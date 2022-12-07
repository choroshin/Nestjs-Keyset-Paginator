"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePaginationNextKey = void 0;
const generatePaginationNextKey = (arr_start_keys) => {
    const next_key = {};
    for (const arrStartKey of arr_start_keys) {
        next_key[arrStartKey.key] = arrStartKey.value;
    }
    return next_key;
};
exports.generatePaginationNextKey = generatePaginationNextKey;
