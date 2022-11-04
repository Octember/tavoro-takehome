// Generated from Setup.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkg7efc35e331d20e12e1fcd3f58cbd026187ee79a16bc2bfcc5daeb81808bd5286 from '@daml.js/7efc35e331d20e12e1fcd3f58cbd026187ee79a16bc2bfcc5daeb81808bd5286';

import * as Order from '../Order/module';

export declare type TestUser = {
  alias: string;
  public: damlTypes.Party;
  participantName: damlTypes.Optional<pkg7efc35e331d20e12e1fcd3f58cbd026187ee79a16bc2bfcc5daeb81808bd5286.Daml.Script.ParticipantName>;
};

export declare const TestUser:
  damlTypes.Serializable<TestUser> & {
  }
;


export declare type Orders = {
  order1: Order.Order;
};

export declare const Orders:
  damlTypes.Serializable<Orders> & {
  }
;


export declare type Parties = {
  warehouse1: damlTypes.Party;
  warehouse2: damlTypes.Party;
  client1: damlTypes.Party;
  client2: damlTypes.Party;
  public: damlTypes.Party;
};

export declare const Parties:
  damlTypes.Serializable<Parties> & {
  }
;

