// Generated from Order.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

export declare type ReturnAgreement = {
  client: damlTypes.Party;
  warehouse: damlTypes.Party;
  reason: string;
};

export declare interface ReturnAgreementInterface {
  Archive: damlTypes.Choice<ReturnAgreement, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<ReturnAgreement, undefined>>;
}
export declare const ReturnAgreement:
  damlTypes.Template<ReturnAgreement, undefined, '1746c23a7cfd6c359452602a12b3b4ff4e42459a906b59da0f49d463d58c663e:Order:ReturnAgreement'> &
  damlTypes.ToInterface<ReturnAgreement, never> &
  ReturnAgreementInterface;

export declare namespace ReturnAgreement {
  export type CreateEvent = damlLedger.CreateEvent<ReturnAgreement, undefined, typeof ReturnAgreement.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<ReturnAgreement, typeof ReturnAgreement.templateId>
  export type Event = damlLedger.Event<ReturnAgreement, undefined, typeof ReturnAgreement.templateId>
  export type QueryResult = damlLedger.QueryResult<ReturnAgreement, undefined, typeof ReturnAgreement.templateId>
}



export declare type Accept = {
};

export declare const Accept:
  damlTypes.Serializable<Accept> & {
  }
;


export declare type OrderReturnRequest = {
  client: damlTypes.Party;
  warehouse: damlTypes.Party;
  reason: string;
};

export declare interface OrderReturnRequestInterface {
  Archive: damlTypes.Choice<OrderReturnRequest, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<OrderReturnRequest, undefined>>;
  Accept: damlTypes.Choice<OrderReturnRequest, Accept, damlTypes.ContractId<ReturnAgreement>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<OrderReturnRequest, undefined>>;
}
export declare const OrderReturnRequest:
  damlTypes.Template<OrderReturnRequest, undefined, '1746c23a7cfd6c359452602a12b3b4ff4e42459a906b59da0f49d463d58c663e:Order:OrderReturnRequest'> &
  damlTypes.ToInterface<OrderReturnRequest, never> &
  OrderReturnRequestInterface;

export declare namespace OrderReturnRequest {
  export type CreateEvent = damlLedger.CreateEvent<OrderReturnRequest, undefined, typeof OrderReturnRequest.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<OrderReturnRequest, typeof OrderReturnRequest.templateId>
  export type Event = damlLedger.Event<OrderReturnRequest, undefined, typeof OrderReturnRequest.templateId>
  export type QueryResult = damlLedger.QueryResult<OrderReturnRequest, undefined, typeof OrderReturnRequest.templateId>
}



export declare type CreateReturnRequest = {
  reason: string;
};

export declare const CreateReturnRequest:
  damlTypes.Serializable<CreateReturnRequest> & {
  }
;


export declare type Order = {
  client: damlTypes.Party;
  warehouse: damlTypes.Party;
};

export declare interface OrderInterface {
  Archive: damlTypes.Choice<Order, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<Order, undefined>>;
  CreateReturnRequest: damlTypes.Choice<Order, CreateReturnRequest, damlTypes.ContractId<OrderReturnRequest>, undefined> & damlTypes.ChoiceFrom<damlTypes.Template<Order, undefined>>;
}
export declare const Order:
  damlTypes.Template<Order, undefined, '1746c23a7cfd6c359452602a12b3b4ff4e42459a906b59da0f49d463d58c663e:Order:Order'> &
  damlTypes.ToInterface<Order, never> &
  OrderInterface;

export declare namespace Order {
  export type CreateEvent = damlLedger.CreateEvent<Order, undefined, typeof Order.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<Order, typeof Order.templateId>
  export type Event = damlLedger.Event<Order, undefined, typeof Order.templateId>
  export type QueryResult = damlLedger.QueryResult<Order, undefined, typeof Order.templateId>
}


