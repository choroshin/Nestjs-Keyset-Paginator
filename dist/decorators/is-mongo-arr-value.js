"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsMongoArrValue = void 0;
const class_validator_1 = require("class-validator");
const IsMongoArrValue = (arr_length, validationOptions) => {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'isMongoArrValue',
            target: object.constructor,
            propertyName: propertyName,
            // constraints: [property],
            options: Object.assign({ message: 'arr_value must be array of string or number with length between 1 and ' + arr_length }, validationOptions),
            validator: {
                validate(value, args) {
                    if ((0, class_validator_1.isArray)(value) && (0, class_validator_1.isInt)(arr_length) && value.length > 0 && value.length <= arr_length) {
                        const test_string_or_no = (item) => typeof item === 'string' || typeof item === 'number';
                        return value.every(test_string_or_no);
                    }
                    else
                        return false;
                }
            }
        });
    };
};
exports.IsMongoArrValue = IsMongoArrValue;
