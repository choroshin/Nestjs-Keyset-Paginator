"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMongoFilterKeyName = void 0;
const generateMongoFilterKeyName = (field) => {
    if (typeof field === 'string')
        return field;
    else {
        let str = '';
        for (let i = 0; i < field.length; i++) {
            const item = field[i];
            str = i === 0 ? str + item : str + '.' + item;
        }
        // console.log('str: ', str)
        return str;
    }
};
exports.generateMongoFilterKeyName = generateMongoFilterKeyName;
