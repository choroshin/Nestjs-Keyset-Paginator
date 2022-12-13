"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationDto = exports.startKeyDto = exports.projectionDto = exports.filterDto = exports.sortDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const common_types_1 = require("../common.types");
const is_valid_mongo_filter_value_1 = require("../decorators/is-valid-mongo-filter-value");
const is_mongo_arr_value_1 = require("../decorators/is-mongo-arr-value");
const is_valid_mongo_sort_order_value_1 = require("../decorators/is-valid-mongo-sort-order-value");
const is_valid_mongo_field_name_1 = require("../decorators/is-valid-mongo-field-name");
class sortDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(common_types_1.REGEX_MONGO_FIELD_NAME),
    (0, class_validator_1.MinLength)(2),
    (0, class_validator_1.MaxLength)(20)
], sortDto.prototype, "field", void 0);
__decorate([
    (0, is_valid_mongo_sort_order_value_1.IsValidMongoSortOrderValue)()
], sortDto.prototype, "order", void 0);
exports.sortDto = sortDto;
class filterDto {
}
__decorate([
    (0, is_valid_mongo_field_name_1.IsValidMongoFieldName)()
], filterDto.prototype, "name", void 0);
__decorate([
    (0, is_valid_mongo_filter_value_1.IsValidMongoFilterValue)()
], filterDto.prototype, "value", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((object) => object.operator === (common_types_1.ENUM_FILTER_OPERATOR_TYPE._in || common_types_1.ENUM_FILTER_OPERATOR_TYPE._nin)),
    (0, is_mongo_arr_value_1.IsMongoArrValue)(100)
], filterDto.prototype, "arr_value", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(common_types_1.ENUM_FILTER_OPERATOR_TYPE)
], filterDto.prototype, "operator", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((object) => object.operator === 'regex'),
    (0, class_validator_1.IsEnum)(common_types_1.REGEX_SEARCH_MODE_TYPE)
], filterDto.prototype, "mode", void 0);
exports.filterDto = filterDto;
class projectionDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(common_types_1.REGEX_MONGO_FIELD_NAME),
    (0, class_validator_1.MinLength)(2),
    (0, class_validator_1.MaxLength)(20)
], projectionDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(1)
], projectionDto.prototype, "mode", void 0);
exports.projectionDto = projectionDto;
class startKeyDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(common_types_1.REGEX_MONGO_FIELD_NAME),
    (0, class_validator_1.MinLength)(2),
    (0, class_validator_1.MaxLength)(20)
], startKeyDto.prototype, "key", void 0);
exports.startKeyDto = startKeyDto;
class PaginationDto {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => startKeyDto),
    (0, class_validator_1.ValidateNested)({
        each: true
    }),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, class_validator_1.ArrayMaxSize)(2)
], PaginationDto.prototype, "start_key", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0)
], PaginationDto.prototype, "skip", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(100)
], PaginationDto.prototype, "limit", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => sortDto),
    (0, class_validator_1.ValidateNested)(),
    (0, class_validator_1.IsOptional)()
], PaginationDto.prototype, "sort", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => filterDto),
    (0, class_validator_1.ValidateNested)({
        each: true
    }),
    (0, class_validator_1.ArrayMinSize)(1)
], PaginationDto.prototype, "filter", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => projectionDto),
    (0, class_validator_1.ValidateNested)({
        each: true
    })
], PaginationDto.prototype, "projection", void 0);
exports.PaginationDto = PaginationDto;
