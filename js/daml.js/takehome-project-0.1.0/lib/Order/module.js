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

var pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 = require('@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662');


exports.ReturnAgreement = damlTypes.assembleTemplate(
{
  templateId: '1746c23a7cfd6c359452602a12b3b4ff4e42459a906b59da0f49d463d58c663e:Order:ReturnAgreement',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({client: damlTypes.Party.decoder, warehouse: damlTypes.Party.decoder, reason: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    client: damlTypes.Party.encode(__typed__.client),
    warehouse: damlTypes.Party.encode(__typed__.warehouse),
    reason: damlTypes.Text.encode(__typed__.reason),
  };
}
,
  Archive: {
    template: function () { return exports.ReturnAgreement; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.ReturnAgreement);



exports.Accept = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.OrderReturnRequest = damlTypes.assembleTemplate(
{
  templateId: '1746c23a7cfd6c359452602a12b3b4ff4e42459a906b59da0f49d463d58c663e:Order:OrderReturnRequest',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({client: damlTypes.Party.decoder, warehouse: damlTypes.Party.decoder, reason: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    client: damlTypes.Party.encode(__typed__.client),
    warehouse: damlTypes.Party.encode(__typed__.warehouse),
    reason: damlTypes.Text.encode(__typed__.reason),
  };
}
,
  Archive: {
    template: function () { return exports.OrderReturnRequest; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  Accept: {
    template: function () { return exports.OrderReturnRequest; },
    choiceName: 'Accept',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.Accept.decoder; }),
    argumentEncode: function (__typed__) { return exports.Accept.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ReturnAgreement).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.ReturnAgreement).encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.OrderReturnRequest);



exports.CreateReturnRequest = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({reason: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    reason: damlTypes.Text.encode(__typed__.reason),
  };
}
,
};



exports.Order = damlTypes.assembleTemplate(
{
  templateId: '1746c23a7cfd6c359452602a12b3b4ff4e42459a906b59da0f49d463d58c663e:Order:Order',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({client: damlTypes.Party.decoder, warehouse: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    client: damlTypes.Party.encode(__typed__.client),
    warehouse: damlTypes.Party.encode(__typed__.warehouse),
  };
}
,
  Archive: {
    template: function () { return exports.Order; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  CreateReturnRequest: {
    template: function () { return exports.Order; },
    choiceName: 'CreateReturnRequest',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.CreateReturnRequest.decoder; }),
    argumentEncode: function (__typed__) { return exports.CreateReturnRequest.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.OrderReturnRequest).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.OrderReturnRequest).encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.Order);

