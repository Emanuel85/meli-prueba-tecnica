const asyncHandler = require("express-async-handler");
const { itemsService, getItemDetail, getCategoriesForItem } = require("../services/itemsService");

function transformResponse(groups) {
    if (!groups.length) return { categories: [], items: [] };
    const categories = groups[0].categories || [];
    const items = groups.flatMap(g => g.items.map(product => ({
        id: product.id,
        title: product.title,
        price: product.price,
        picture: product.picture,
        condition: product.condition,
        free_shipping: product.free_shipping,
    })));
    return { categories, items };
}

// normaliza las cadenas de texto para facilitar la búsqueda
// elimina acentos y convierte a minúsculas
function normalize(str) {
    return str.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();
}

function filterByCategory(groups, query) {
    if (!query) return groups;
    const normalizedQ = normalize(query);
    return groups.filter(g => g.categories.some(cat => normalize(cat).includes(normalizedQ)));
}

const getItems = asyncHandler(async (req, res, next) => {
    try {
        const { search } = req.query;
        const groups = itemsService();
        const filtered = filterByCategory(groups, search);
        if (!filtered.length) return res.status(404).json({ error: "Products not found" });
        res.json(transformResponse(filtered));
    } catch (error) {
        console.error(error);
        next(error);
    }
});

const getItemById = asyncHandler(async (req, res, next) => {
    try {
        const { id } = req.params;
        const item = getItemDetail(id);
        const categories = getCategoriesForItem(id)
        if (!item) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.json({ ...item, categories });
    } catch (error) {
        console.error(error);
        next(error);
    }
});

module.exports = { getItems, getItemById };
