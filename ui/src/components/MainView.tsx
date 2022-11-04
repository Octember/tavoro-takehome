// Copyright (c) 2022 Digital Asset (Switzerland) GmbH and/or its affiliates. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useMemo } from "react";
import {
  Container,
  Grid,
  Header,
  Icon,
  Segment,
  Divider,
} from "semantic-ui-react";
import { Party } from "@daml/types";
import { User, Order } from "@daml.js/takehome-project";
import { publicContext, userContext } from "./App";
import OrderList from "./OrderList";

// USERS_BEGIN
const MainView: React.FC = () => {
  const username = userContext.useParty();
  const aliases = publicContext.useStreamQueries(User.Alias, () => [], []);


  // Map to translate party identifiers to aliases.
  const partyToAlias = useMemo(
    () =>
      new Map<Party, string>(
        aliases.contracts.map(({ payload }) => [
          payload.username,
          payload.alias,
        ])
      ),
    [aliases]
  );
  const myUserName = aliases.loading
    ? "loading ..."
    : partyToAlias.get(username) ?? username;

  // FOLLOW_BEGIN
  const ledger = userContext.useLedger();

  const follow = async (userToFollow: Party): Promise<boolean> => {
    try {
      await ledger.exerciseByKey(User.User.Follow, username, { userToFollow });
      return true;
    } catch (error) {
      alert(`Unknown error:\n${JSON.stringify(error)}`);
      return false;
    }
  };

  // FOLLOW_END

  return (
    <Container>
      <Grid centered columns={2}>
        <Grid.Row stretched>
          <Grid.Column>
            <Header
              as="h1"
              size="huge"
              color="blue"
              textAlign="center"
              style={{ padding: "1ex 0em 0ex 0em" }}
            >
              {myUserName ? `Welcome, ${myUserName}!` : "Loading..."}
            </Header>

            <Segment>
              <Header as="h2">
                <Icon name="globe" />
                <Header.Content>
                  Orders
                  <Header.Subheader>My orders</Header.Subheader>
                </Header.Content>
              </Header>
              <Divider />
              <OrderList />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default MainView;
