import { ENUM_FILTER_OPERATOR_TYPE, TYPE_MONGO_FIELD_NAME, TYPE_STRING_NUM_ARRAY } from '../common.types';
export declare class sortDto {
    field: any;
    order: number;
}
export declare class filterDto {
    name: TYPE_MONGO_FIELD_NAME;
    value: any;
    arr_value: TYPE_STRING_NUM_ARRAY;
    operator: ENUM_FILTER_OPERATOR_TYPE;
    mode: string;
}
export declare class projectionDto {
    name: any;
    mode: any;
}
export declare class startKeyDto {
    key: any;
    value: unknown;
}
export declare class PaginationDto {
    start_key: startKeyDto[];
    skip: number;
    limit: number;
    sort: sortDto;
    filter: filterDto[];
    projection: projectionDto[];
}
