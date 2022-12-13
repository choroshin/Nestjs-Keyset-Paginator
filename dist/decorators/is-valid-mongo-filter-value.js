"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsValidMongoFilterValue = void 0;
const class_validator_1 = require("class-validator");
const common_types_1 = require("../common.types");
const mongoose_1 = require("mongoose");
const IsValidMongoFilterValue = (mongo_obj_fields = ['_id'], validationOptions) => {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'isValidMongoValue',
            target: object.constructor,
            propertyName: propertyName,
            // constraints: [property],
            options: Object.assign({}, validationOptions),
            validator: {
                validate(value, args) {
                    // console.log('mongo_obj_fields: ', mongo_obj_fields)
                    // console.log('getMetadataStorage:\n', getMetadataStorage())
                    const operator = args.object['operator'];
                    const field_name = args.object['name'];
                    // console.log('args: ', args)
                    // console.log('field_name: ', field_name)
                    if (mongo_obj_fields.find((item) => item === field_name)) {
                        return (0, mongoose_1.isValidObjectId)(value);
                    }
                    // console.log('operator: ', operator)
                    if (operator ===
                        (common_types_1.ENUM_FILTER_OPERATOR_TYPE.eq ||
                            common_types_1.ENUM_FILTER_OPERATOR_TYPE.gt ||
                            common_types_1.ENUM_FILTER_OPERATOR_TYPE.gte ||
                            common_types_1.ENUM_FILTER_OPERATOR_TYPE.lt ||
                            common_types_1.ENUM_FILTER_OPERATOR_TYPE.lte)) {
                        // console.log('condition one')
                        return typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean';
                    }
                    else if (operator === common_types_1.ENUM_FILTER_OPERATOR_TYPE.regex) {
                        return typeof value === 'string';
                    }
                    else
                        return true;
                },
                defaultMessage(validationArguments) {
                    let errMsg = 'value must be string or number or boolean';
                    const operator = validationArguments.object['operator'];
                    const field_name = validationArguments.object['name'];
                    if (mongo_obj_fields.find((item) => item === field_name)) {
                        errMsg = 'value must be mongo object id';
                    }
                    else if (operator === common_types_1.ENUM_FILTER_OPERATOR_TYPE.regex) {
                        errMsg = 'value must be string only if operator value is regex';
                    }
                    return errMsg;
                }
            }
        });
    };
};
exports.IsValidMongoFilterValue = IsValidMongoFilterValue;
