"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsValidMongoFieldName = void 0;
const class_validator_1 = require("class-validator");
const common_types_1 = require("../common.types");
const IsValidMongoFieldName = (validationOptions) => {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'isValidMongoFieldName',
            target: object.constructor,
            propertyName: propertyName,
            options: Object.assign({}, validationOptions),
            validator: {
                validate(value, args) {
                    const arr_tester = (item) => typeof item === 'string' && common_types_1.REGEX_MONGO_FIELD_NAME.test(item);
                    if (typeof value === 'string' && common_types_1.REGEX_MONGO_FIELD_NAME.test(value))
                        return true;
                    else
                        return !!(typeof value === 'object' &&
                            Array.isArray(value) &&
                            value.length > 0 &&
                            value.length <= 10 &&
                            value.every(arr_tester));
                },
                defaultMessage(validationArguments) {
                    const { value } = validationArguments;
                    if (typeof value === 'object' && Array.isArray(value) && (value.length === 0 || value.length > 10))
                        return 'name must be an array of string of length greater than 0 and less than 10';
                    return 'name must be an string or array of strings matching with regex: ' + common_types_1.REGEX_MONGO_FIELD_NAME;
                }
            }
        });
    };
};
exports.IsValidMongoFieldName = IsValidMongoFieldName;
