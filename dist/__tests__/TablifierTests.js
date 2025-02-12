"use strict";

var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
require("@testing-library/jest-dom");
var _Tableifier = _interopRequireDefault(require("../Tableifier"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var columns = [{
  headerName: "Name",
  field: "name",
  type: "string"
}, {
  headerName: "Age",
  field: "age",
  type: "number"
}, {
  headerName: "Country",
  field: "country",
  type: "string"
}];
var rows = [{
  id: 1,
  name: "Alice",
  age: 25,
  country: "USA"
}, {
  id: 2,
  name: "Bob",
  age: 30,
  country: "Canada"
}, {
  id: 3,
  name: "Charlie",
  age: 22,
  country: "UK"
}];

// Test if component renders properly
test("renders table with headers", function () {
  (0, _react2.render)(/*#__PURE__*/_react["default"].createElement(_Tableifier["default"], {
    columns: columns,
    rows: rows
  }));
  columns.forEach(function (column) {
    expect(_react2.screen.getByText(column.headerName)).toBeInTheDocument();
  });
});

// Test sorting functionality
test("sorts table by age", function () {
  (0, _react2.render)(/*#__PURE__*/_react["default"].createElement(_Tableifier["default"], {
    columns: columns,
    rows: rows
  }));
  var ageHeader = _react2.screen.getByText("Age");
  _react2.fireEvent.click(ageHeader);
  var firstRow = _react2.screen.getAllByRole("row")[1]; // First data row
  expect(firstRow).toHaveTextContent("Charlie"); // Youngest first

  _react2.fireEvent.click(ageHeader);
  firstRow = _react2.screen.getAllByRole("row")[1]; // First data row
  expect(firstRow).toHaveTextContent("Bob"); // Oldest first
});