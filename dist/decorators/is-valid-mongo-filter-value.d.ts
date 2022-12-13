import { ValidationOptions } from 'class-validator';
export declare const IsValidMongoFilterValue: (mongo_obj_fields?: string[], validationOptions?: ValidationOptions) => (object: any, propertyName: string) => void;
