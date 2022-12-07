"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paginator = void 0;
const paginate_1 = require("./paginate");
class Paginator {
    constructor() {
        this.paginate = paginate_1.paginate;
    }
}
exports.Paginator = Paginator;
