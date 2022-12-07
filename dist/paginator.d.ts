/// <reference types="mongoose" />
export declare class Paginator {
    paginate: (model: import("mongoose").Model<any, {}, {}, {}>, skip?: number, limit?: number, start_key?: import(".").startKeyDto[], sort_field?: string, sort_order?: number, filter?: import(".").filterDto[], projection?: import(".").projectionDto[]) => Promise<{
        docs: any;
        next_key: any[];
        total_items: number;
    }>;
}
