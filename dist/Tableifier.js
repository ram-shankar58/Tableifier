"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./Tableifier.css");
require("bulma/css/bulma.css");
var _iconsMaterial = require("@mui/icons-material");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var Tableifier = function Tableifier(_ref) {
  var _filterOptions$active, _columns$find, _filterOptions$active2, _filterOptions$active3;
  var columns = _ref.columns,
    rows = _ref.rows;
  var _useState = (0, _react.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    filterOptions = _useState2[0],
    setFilterOptions = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    sortConfig = _useState4[0],
    setSortConfig = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    activeFilterColumn = _useState6[0],
    setActiveFilterColumn = _useState6[1];
  var filterRef = (0, _react.useRef)(null);
  var _useState7 = (0, _react.useState)({
      top: 0,
      left: 0
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    filterPosition = _useState8[0],
    setFilterPosition = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    showFilter = _useState10[0],
    setShowFilter = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    filterOpen = _useState12[0],
    setFilterOpen = _useState12[1];
  var handleSort = function handleSort(column) {
    var direction = 'ascending';
    if (sortConfig && sortConfig.key === column.field && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({
      key: column.field,
      direction: direction
    });
  };
  var sortedRows = _toConsumableArray(rows).sort(function (a, b) {
    if (sortConfig) {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
    }
    return 0;
  });
  var handleFilterChange = function handleFilterChange(field, type, value) {
    setFilterOptions(function (prevOptions) {
      return _objectSpread(_objectSpread({}, prevOptions), {}, _defineProperty({}, field, _objectSpread(_objectSpread({}, prevOptions[field]), {}, _defineProperty({}, type, value))));
    });
  };
  var applyFilter = function applyFilter(rows) {
    return rows.filter(function (row) {
      return columns.every(function (column) {
        var filter = filterOptions[column.field];
        if (!filter) return true;
        var text = filter.text,
          min = filter.min,
          max = filter.max;
        var cellValue = row[column.field].toString().toLowerCase();
        var isValid = true;
        if (text && !cellValue.includes(text.toLowerCase())) isValid = false;
        if (min && parseFloat(cellValue) < parseFloat(min)) isValid = false;
        if (max && parseFloat(cellValue) > parseFloat(max)) isValid = false;
        return isValid;
      });
    });
  };
  var filteredRows = applyFilter(sortedRows);
  var handleHeaderClick = function handleHeaderClick(column, isFilterIconClicked) {
    setActiveFilterColumn(column.field);
    var filterElement = filterRef.current;
    if (filterElement) {
      var rect = filterElement.getBoundingClientRect();
      setFilterPosition({
        top: rect.top + window.scrollY,
        left: rect.left - 300
      });
    }
    if (isFilterIconClicked) {
      setShowFilter(!showFilter);
      setFilterOpen(!filterOpen);
    } else {
      setShowFilter(false);
      setFilterOpen(false);
      handleSort(column);
    }
  };
  var handleFilterReset = function handleFilterReset(field) {
    setFilterOptions(function (prevOptions) {
      return _objectSpread(_objectSpread({}, prevOptions), {}, _defineProperty({}, field, {
        text: '',
        min: '',
        max: ''
      }));
    });
    setFilterOpen(false);
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "table-container"
  }, showFilter && /*#__PURE__*/_react["default"].createElement("div", {
    className: "filter-sidebar"
  }, activeFilterColumn && /*#__PURE__*/_react["default"].createElement("div", {
    className: "filter-popup box",
    ref: filterRef,
    style: {
      top: filterPosition.top,
      left: filterPosition.left
    }
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("strong", {
    className: "has-text-info"
  }, "Filter for ", columns.find(function (col) {
    return col.field === activeFilterColumn;
  }).headerName)), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    placeholder: "Text filter",
    value: ((_filterOptions$active = filterOptions[activeFilterColumn]) === null || _filterOptions$active === void 0 ? void 0 : _filterOptions$active.text) || '',
    onChange: function onChange(e) {
      return handleFilterChange(activeFilterColumn, 'text', e.target.value);
    },
    className: "input is-small mb-2"
  }), ((_columns$find = columns.find(function (col) {
    return col.field === activeFilterColumn;
  })) === null || _columns$find === void 0 ? void 0 : _columns$find.type) === 'number' && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("input", {
    type: "number",
    placeholder: "Min",
    value: ((_filterOptions$active2 = filterOptions[activeFilterColumn]) === null || _filterOptions$active2 === void 0 ? void 0 : _filterOptions$active2.min) || '',
    onChange: function onChange(e) {
      return handleFilterChange(activeFilterColumn, 'min', e.target.value);
    },
    className: "input is-small mb-2"
  }), /*#__PURE__*/_react["default"].createElement("input", {
    type: "number",
    placeholder: "Max",
    value: ((_filterOptions$active3 = filterOptions[activeFilterColumn]) === null || _filterOptions$active3 === void 0 ? void 0 : _filterOptions$active3.max) || '',
    onChange: function onChange(e) {
      return handleFilterChange(activeFilterColumn, 'max', e.target.value);
    },
    className: "input is-small mb-2"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "buttons"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "button is-small is-info mr-2",
    onClick: function onClick() {
      return handleFilterReset(activeFilterColumn);
    }
  }, "Reset Filters"), /*#__PURE__*/_react["default"].createElement("button", {
    className: "button is-small",
    onClick: function onClick() {
      setActiveFilterColumn(null);
      setFilterOpen(false);
      setShowFilter(false);
    }
  }, "Close")))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "table-wrapper ".concat(filterOpen ? 'with-filter' : '')
  }, /*#__PURE__*/_react["default"].createElement("table", {
    className: "table is-striped is-hoverable is-fullwidth"
  }, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", null, columns.map(function (column) {
    return /*#__PURE__*/_react["default"].createElement("th", {
      key: column.field,
      onClick: function onClick() {
        return handleHeaderClick(column, false);
      },
      className: "sortable ".concat(sortConfig && sortConfig.key === column.field ? sortConfig.direction : '')
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "has-text-info"
    }, column.headerName), sortConfig && sortConfig.key === column.field && /*#__PURE__*/_react["default"].createElement("span", {
      className: "ml-1"
    }, sortConfig.direction === 'ascending' ? ' ▲' : ' ▼'), /*#__PURE__*/_react["default"].createElement("span", {
      className: "filter-icon",
      onClick: function onClick(e) {
        e.stopPropagation();
        handleHeaderClick(column, true);
      }
    }, /*#__PURE__*/_react["default"].createElement(_iconsMaterial.FilterList, null)));
  }))), /*#__PURE__*/_react["default"].createElement("tbody", null, filteredRows.map(function (row) {
    return /*#__PURE__*/_react["default"].createElement("tr", {
      key: row.id
    }, columns.map(function (column) {
      return /*#__PURE__*/_react["default"].createElement("td", {
        key: column.field
      }, row[column.field]);
    }));
  })))));
};
var _default = exports["default"] = Tableifier;