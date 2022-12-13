"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REGEX_MONGO_FIELD_NAME = exports.REGEX_SEARCH_MODE_TYPE = exports.ENUM_FILTER_OPERATOR_TYPE = void 0;
var ENUM_FILTER_OPERATOR_TYPE;
(function (ENUM_FILTER_OPERATOR_TYPE) {
    /**
     * Equal to
     */
    ENUM_FILTER_OPERATOR_TYPE["eq"] = "eq";
    /**
     * Greater than
     */
    ENUM_FILTER_OPERATOR_TYPE["gt"] = "gt";
    /**
     * Greater than or equal to
     */
    ENUM_FILTER_OPERATOR_TYPE["gte"] = "gte";
    /**
     * Less than
     */
    ENUM_FILTER_OPERATOR_TYPE["lt"] = "lt";
    /**
     * Less than or equal to
     */
    ENUM_FILTER_OPERATOR_TYPE["lte"] = "lte";
    /**
     * Regular expression
     */
    ENUM_FILTER_OPERATOR_TYPE["regex"] = "regex";
    /**
     * Array based search with "$in" mongo operator
     */
    ENUM_FILTER_OPERATOR_TYPE["_in"] = "in";
    /**
     * Array based search with "$nin" mongo operator
     */
    ENUM_FILTER_OPERATOR_TYPE["_nin"] = "nin";
    /** * Array based search with "$gt and $lt" mongo operator */
    ENUM_FILTER_OPERATOR_TYPE["between"] = "between";
})(ENUM_FILTER_OPERATOR_TYPE = exports.ENUM_FILTER_OPERATOR_TYPE || (exports.ENUM_FILTER_OPERATOR_TYPE = {}));
var REGEX_SEARCH_MODE_TYPE;
(function (REGEX_SEARCH_MODE_TYPE) {
    /**
     * Start With Mode
     */
    REGEX_SEARCH_MODE_TYPE["swm"] = "swm";
    /**
     * Begin With Mode
     */
    REGEX_SEARCH_MODE_TYPE["bnm"] = "bnm";
    /**
     * End With Mode
     */
    REGEX_SEARCH_MODE_TYPE["ewm"] = "ewm";
})(REGEX_SEARCH_MODE_TYPE = exports.REGEX_SEARCH_MODE_TYPE || (exports.REGEX_SEARCH_MODE_TYPE = {}));
exports.REGEX_MONGO_FIELD_NAME = /^[a-zA-Z_]+$/;
