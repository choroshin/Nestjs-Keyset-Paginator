"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsValidMongoSortOrderValue = void 0;
const class_validator_1 = require("class-validator");
const IsValidMongoSortOrderValue = (validationOptions) => {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'isValidMongoSortOrderValue',
            target: object.constructor,
            propertyName: propertyName,
            // constraints: [property],
            options: Object.assign({ message: `${propertyName} value must be 1 or -1` }, validationOptions),
            validator: {
                validate(value, args) {
                    return typeof value === 'number' && (value === -1 || value === 1);
                }
            }
        });
    };
};
exports.IsValidMongoSortOrderValue = IsValidMongoSortOrderValue;
