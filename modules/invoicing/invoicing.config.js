"use strict";
exports.collectionOperations = {
    getList: 'getInvoices.json',
};
exports.listConfig = {
    page: 1,
    perPage: 10,
    perPageOptions: [10, 15, 20, 30, 50],
    sort: 'customer.company.name'
};
