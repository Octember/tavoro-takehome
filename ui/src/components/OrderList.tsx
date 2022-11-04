// Copyright (c) 2022 Digital Asset (Switzerland) GmbH and/or its affiliates. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import React from "react";
import { Input, List, Button, Header } from "semantic-ui-react";
import { Order } from "@daml.js/takehome-project";
import { publicContext, userContext } from "./App";

type Props = {};

/**
 * React component to display a list of `User`s.
 * Every party in the list can be added as a friend.
 */
const OrderList: React.FC<Props> = ({}) => {
  const orders = userContext.useStreamQueries(Order.Order).contracts;

  const returns = userContext.useStreamQueries(
    Order.OrderReturnRequest
  ).contracts;

  // returns[0].

  return (
    <>
      <List divided relaxed>
        {[...orders].map((order) => (
          // @ts-ignore
          <OrderSingle key={order.contractId} order={order} />
        ))}
      </List>

      <Header>Return requests</Header>
      <List divided relaxed>
        {returns.map((ret) => (
          // @ts-ignore
          <OrderReturnRequest key={ret.contractId} returnRequest={ret} />
        ))}
      </List>
    </>
  );
};

const OrderSingle: React.FC<{ order: Order.Order.CreateEvent }> = ({
  order,
}) => {
  const [returnReason, setReturnReason] = React.useState("");

  const ledger = userContext.useLedger();

  const startReturn = async (): Promise<boolean> => {
    const r = await ledger.listUserRights();
    console.log("rights", r);

    await ledger.exercise(Order.Order.CreateReturnRequest, order.contractId, {
      reason: returnReason,
    });
    return true;
  };

  return (
    <List.Item>
      <List.Content>{order.contractId}</List.Content>
      <Input
        onChange={(x) => setReturnReason(x.target.value)}
        value={returnReason}
        placeholder="Return Reason"
      />

      <List.Content floated="right">
        <Button
          onClick={() => {
            startReturn();
          }}
        >
          Make a return
        </Button>
      </List.Content>
    </List.Item>
  );
};

const OrderReturnRequest: React.FC<{
  returnRequest: Order.OrderReturnRequest.CreateEvent;
}> = ({ returnRequest }) => {
  const ledger = userContext.useLedger();

  const acceptReturn = async (): Promise<boolean> => {

    await ledger.exercise(
      Order.OrderReturnRequest.Accept,
      returnRequest.contractId,
      {}
    );
    return true;
  };

  console.log(returnRequest)

  return (
    <List.Item>
      <List.Content>Reason: {returnRequest?.payload?.reason}</List.Content>

      <List.Content floated="right">
        <Button
          onClick={() => {
            acceptReturn();
          }}
        >
          Accept return
        </Button>
      </List.Content>
    </List.Item>
  );
};

export default OrderList;
