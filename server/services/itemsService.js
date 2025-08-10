const products = require("../mock/all_Products.json");
const details = require("../mock/detail_Product.json");

const itemsService = () => products;

const getItemDetail = (id) => {
    const item = details.find((product) => product.item.id === id);
    return item;
};

const getCategoriesForItem = (id) => {
    const group = products.find(g => g.items.some(it => it.id === id));
    return group?.categories ?? [];
};

module.exports = { itemsService, getItemDetail, getCategoriesForItem };
