const asyncHandler = require("express-async-handler");
const { productsService, getItemDetail } = require("../services/productsService");


function transformResponse(data) {
    const categories = data.products.categories || [];
    const items = data.products.items.map((product) => {
        return {
            id: product.id,
            title: product.title,
            price: {
                currency: product.currency,
                amount: product.price,
                decimals: 0,
            },
            picture: product.picture,
            condition: product.condition,
            free_shipping: product.free_shipping,
        };
    });

    return {
        categories,
        items,
    };
};

const getProducts = asyncHandler(async (req, res, next) => {
    try {
        const data = productsService();
        console.log({ CONTROLLER: data })
        if (!data.products.items) {
            return res.status(404).json({ error: "Products not found" });
        }

        const transformedData = transformResponse(data);
        res.json(transformedData);
    } catch (error) {
        console.error(error);
        next(error);
    }
});

const getItemById = asyncHandler(async (req, res, next) => {
    try {
        const { id } = req.params;
        const item = getItemDetail(id);

        if (!item) {
            return res.status(404).json({ error: 'Item not found' });
        }

        res.json(item);
    } catch (error) {
        console.error(error);
        next(error);
    }
});

module.exports = { getProducts, getItemById };
