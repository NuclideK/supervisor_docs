'use strict';

var utils = require('../utils/writer.js');
var Controls = require('../service/ControlsService');

module.exports.v1Bot_sessionsBot_session_idPlayPUT = function v1Bot_sessionsBot_session_idPlayPUT (req, res, next, body, bot_session_id) {
  Controls.v1Bot_sessionsBot_session_idPlayPUT(body, bot_session_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1Bot_sessionsBot_session_idReset_browsersPUT = function v1Bot_sessionsBot_session_idReset_browsersPUT (req, res, next, body, bot_session_id) {
  Controls.v1Bot_sessionsBot_session_idReset_browsersPUT(body, bot_session_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1Bot_sessionsBot_session_idReset_metricsPUT = function v1Bot_sessionsBot_session_idReset_metricsPUT (req, res, next, body, bot_session_id) {
  Controls.v1Bot_sessionsBot_session_idReset_metricsPUT(body, bot_session_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1Bot_sessionsBot_session_idScalePUT = function v1Bot_sessionsBot_session_idScalePUT (req, res, next, body, bot_session_id) {
  Controls.v1Bot_sessionsBot_session_idScalePUT(body, bot_session_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1Bot_sessionsBot_session_idStopPUT = function v1Bot_sessionsBot_session_idStopPUT (req, res, next, body, bot_session_id) {
  Controls.v1Bot_sessionsBot_session_idStopPUT(body, bot_session_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
