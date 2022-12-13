export declare enum ENUM_FILTER_OPERATOR_TYPE {
    /**
     * Equal to
     */
    eq = "eq",
    /**
     * Greater than
     */
    gt = "gt",
    /**
     * Greater than or equal to
     */
    gte = "gte",
    /**
     * Less than
     */
    lt = "lt",
    /**
     * Less than or equal to
     */
    lte = "lte",
    /**
     * Regular expression
     */
    regex = "regex",
    /**
     * Array based search with "$in" mongo operator
     */
    _in = "in",
    /**
     * Array based search with "$nin" mongo operator
     */
    _nin = "nin",
    /** * Array based search with "$gt and $lt" mongo operator */
    between = "between"
}
export declare enum REGEX_SEARCH_MODE_TYPE {
    /**
     * Start With Mode
     */
    swm = "swm",
    /**
     * Begin With Mode
     */
    bnm = "bnm",
    /**
     * End With Mode
     */
    ewm = "ewm"
}
export declare type TYPE_STRING_NUM_ARRAY = (string | number)[];
export declare const REGEX_MONGO_FIELD_NAME: RegExp;
export declare type TYPE_MONGO_FIELD_NAME = string | string[];
