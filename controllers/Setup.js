'use strict';

var utils = require('../utils/writer.js');
var Setup = require('../service/SetupService');

module.exports.freeVerifyGET = function freeVerifyGET (req, res, next, url) {
  Setup.freeVerifyGET(url)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.startGET = function startGET (req, res, next, url) {
  Setup.startGET(url)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
