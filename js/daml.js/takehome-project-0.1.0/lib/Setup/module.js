"use strict";
/* eslint-disable-next-line no-unused-vars */
function __export(m) {
/* eslint-disable-next-line no-prototype-builtins */
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable-next-line no-unused-vars */
var jtv = require('@mojotech/json-type-validation');
/* eslint-disable-next-line no-unused-vars */
var damlTypes = require('@daml/types');
/* eslint-disable-next-line no-unused-vars */
var damlLedger = require('@daml/ledger');

var pkg7efc35e331d20e12e1fcd3f58cbd026187ee79a16bc2bfcc5daeb81808bd5286 = require('@daml.js/7efc35e331d20e12e1fcd3f58cbd026187ee79a16bc2bfcc5daeb81808bd5286');

var Order = require('../Order/module');


exports.TestUser = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({alias: damlTypes.Text.decoder, public: damlTypes.Party.decoder, participantName: damlTypes.Optional(pkg7efc35e331d20e12e1fcd3f58cbd026187ee79a16bc2bfcc5daeb81808bd5286.Daml.Script.ParticipantName).decoder, }); }),
  encode: function (__typed__) {
  return {
    alias: damlTypes.Text.encode(__typed__.alias),
    public: damlTypes.Party.encode(__typed__.public),
    participantName: damlTypes.Optional(pkg7efc35e331d20e12e1fcd3f58cbd026187ee79a16bc2bfcc5daeb81808bd5286.Daml.Script.ParticipantName).encode(__typed__.participantName),
  };
}
,
};



exports.Orders = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({order1: Order.Order.decoder, }); }),
  encode: function (__typed__) {
  return {
    order1: Order.Order.encode(__typed__.order1),
  };
}
,
};



exports.Parties = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({warehouse1: damlTypes.Party.decoder, warehouse2: damlTypes.Party.decoder, client1: damlTypes.Party.decoder, client2: damlTypes.Party.decoder, public: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    warehouse1: damlTypes.Party.encode(__typed__.warehouse1),
    warehouse2: damlTypes.Party.encode(__typed__.warehouse2),
    client1: damlTypes.Party.encode(__typed__.client1),
    client2: damlTypes.Party.encode(__typed__.client2),
    public: damlTypes.Party.encode(__typed__.public),
  };
}
,
};

