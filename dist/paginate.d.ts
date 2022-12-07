import { Model } from 'mongoose';
import { filterDto, projectionDto, startKeyDto } from './pagination/pagination.dto';
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
export declare const paginate: (model: Model<any>, skip?: number, limit?: number, start_key?: startKeyDto[], sort_field?: string, sort_order?: number, filter?: filterDto[], projection?: projectionDto[]) => Promise<{
    docs: any;
    next_key: any[];
    total_items: number;
}>;
