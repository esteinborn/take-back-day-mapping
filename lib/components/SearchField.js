"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _input = require("../styles/javascript/input");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchField = function SearchField(_ref) {
  var value = _ref.value,
      handleChange = _ref.handleChange;

  return _react2.default.createElement("input", {
    style: _input.input,
    id: "phone-field",
    type: "text",
    name: "phone-input",
    value: value,
    onChange: handleChange,
    placeholder: "city, zip, or location name"
  });
};

exports.default = SearchField;