const products = require("../mock/all_Products.json");
const details = require("../mock/detail_Product.json");

const productsService = () => {
    const getItemDetail = (id) => {
        const item = products.find((product) => product.id === id);
        return item || null;
    };

    return { products, getItemDetail };
};

const getItemDetail = (id) => {
    console.log({ Prueba: id })

    console.log({ productos: details });
    const item = details.find((product) => product.item.id === id);
    return item || null;
};

module.exports = { productsService, getItemDetail };
