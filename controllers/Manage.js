'use strict';

var utils = require('../utils/writer.js');
var Manage = require('../service/ManageService');

module.exports.organizationsBot_session_idCouponsPOST = function organizationsBot_session_idCouponsPOST (req, res, next, body, bot_session_id) {
  Manage.organizationsBot_session_idCouponsPOST(body, bot_session_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
