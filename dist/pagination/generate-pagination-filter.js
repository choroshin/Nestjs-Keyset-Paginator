"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePaginationFilter = void 0;
const generate_mongo_filter_key_name_1 = require("../common/generate-mongo-filter-key-name");
/**
 * @param  {filterDto[]} filter
 */
const generatePaginationFilter = (filter) => {
    const filter_fn = {};
    for (const filterElement of filter) {
        /** we do not need to control dto here because we implement validation on DTO side */
        // if (filterElement instanceof filterDto) {
        // console.log('instanceof filterDto')
        // console.log('filterElement: ', filterElement)
        if (filterElement.operator === 'regex') {
            let exp = new RegExp(filterElement.value, 'i');
            if (filterElement.mode === 'swm') {
                exp = new RegExp('^' + filterElement.value + '.*', 'i');
            }
            if (filterElement.mode === 'bnm') {
                exp = new RegExp('.*' + filterElement.value + '.*', 'i');
            }
            if (filterElement.mode === 'ewm') {
                // console.log('EWM\n');
                exp = new RegExp(filterElement.value + '.*', 'i');
            }
            filter_fn[(0, generate_mongo_filter_key_name_1.generateMongoFilterKeyName)(filterElement.name)] = {
                ['$' + filterElement.operator]: exp
            };
        }
        else if (filterElement.operator === 'in' || filterElement.operator === 'nin') {
            filter_fn[(0, generate_mongo_filter_key_name_1.generateMongoFilterKeyName)(filterElement.name)] = {
                ['$' + filterElement.operator]: filterElement.arr_value
            };
        }
        else if (filterElement.operator === 'between') {
            filter_fn[(0, generate_mongo_filter_key_name_1.generateMongoFilterKeyName)(filterElement.name)] = {
                $gte: filterElement.arr_value[0],
                $lte: filterElement.arr_value[1]
            };
        }
        else
            filter_fn[(0, generate_mongo_filter_key_name_1.generateMongoFilterKeyName)(filterElement.name)] = {
                ['$' + filterElement.operator]: filterElement.value
            };
        // } else {
        //     console.warn('filterElement must be instance of filterDto')
        //     console.warn('filterElement:\n', filterElement)
        // }
    }
    return filter_fn;
};
exports.generatePaginationFilter = generatePaginationFilter;
