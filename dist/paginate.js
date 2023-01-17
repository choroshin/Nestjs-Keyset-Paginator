"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginate = void 0;
const generate_pagination_filter_1 = require("./pagination/generate-pagination-filter");
const generate_pagination_query_1 = require("./pagination/generate-pagination-query");
const generate_pagination_next_key_1 = require("./pagination/generate-pagination-next-key");
const generate_pagination_next_key_dto_arr_1 = require("./pagination/generate-pagination-next-key-dto-arr");
/**
 * @param  {Model<any>} model - Mongoose model
 * @param  {} skip=0 - Number of documents to skip
 * @param  {} limit=10 - Number of documents to limit
 * @param  {startKeyDto[]} start_key? - Key to start pagination from
 * @param  {string} sort_field? -  Field to sort by
 * @param  {number} sort_order? - Ascending or descending 1 or -1
 * @param  {filterDto[]} filter? - Array of filters
 * @param  {projectionDto[]} projection? - Object of projection
 */
const paginate = (model, skip = 0, limit = 10, start_key, sort_field, sort_order, filter, projection) => __awaiter(void 0, void 0, void 0, function* () {
    const model_paths = Object.keys(model.schema.paths);
    let filter_fn = {};
    let query_fn;
    // console.log(filter)
    if (filter && filter.length !== 0)
        filter_fn = (0, generate_pagination_filter_1.generatePaginationFilter)(filter);
    // console.log(filter);
    let sort = null;
    if (sort_field && sort_order && model_paths.includes(sort_field)) {
        sort = [sort_field, sort_order];
    }
    let start_key_fn = null;
    if (start_key) {
        start_key_fn = (0, generate_pagination_next_key_1.generatePaginationNextKey)(start_key);
    }
    const { paginatedQuery, nextKeyFn } = (0, generate_pagination_query_1.generatePaginationQuery)(filter_fn, sort, start_key_fn);
    // console.log("paginatedQuery: ", paginatedQuery);
    // const aggregate_arr = []
    if (projection) {
        const select_obj = {};
        for (const projectionEle of projection) {
            select_obj[projectionEle.name] = projectionEle.mode;
        }
        // console.log('projection: ', select_obj);
        query_fn = model.find(paginatedQuery, select_obj).skip(skip).limit(limit).lean();
    }
    else
        query_fn = model.find(paginatedQuery).skip(skip).limit(limit).lean();
    if (sort) {
        query_fn = query_fn.sort([sort]);
    }
    // aggregate_arr.push(skip)
    // aggregate_arr.push(limit)
    const total_items = yield model.find(paginatedQuery).count();
    const docs = yield query_fn.exec();
    const next_key = (0, generate_pagination_next_key_dto_arr_1.generatePaginationNextKeyDtoArr)(nextKeyFn(docs));
    return { docs: docs, next_key: next_key, total_items };
});
exports.paginate = paginate;
