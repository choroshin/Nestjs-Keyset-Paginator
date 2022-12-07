/**
 * @param  {} query
 * @param  {} sort?
 * @param  {} nextKey?
 */
export declare const generatePaginationQuery: (query: any, sort?: any, nextKey?: any) => {
    paginatedQuery: any;
    nextKeyFn: (items: any) => {
        _id: any;
    };
};
