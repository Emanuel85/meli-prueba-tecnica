const asyncHandler = require("express-async-handler");
const { itemsService, getItemDetail, getCategoriesForItem } = require("../services/itemsService");

//Se define delay para hacer la simulación de carga
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


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
  const categoryFilteredGroups = groups.filter(g =>
    g.categories.some(cat => normalize(cat).includes(normalizedQ))
  );

  if (categoryFilteredGroups.length > 0) {
    return categoryFilteredGroups;
  }

  const titleFilteredGroups = groups.map(group => ({
    ...group,
    items: group.items.filter(item => normalize(item.title).includes(normalizedQ))
  })).filter(group => group.items.length > 0);

  return titleFilteredGroups.length > 0 ? titleFilteredGroups : [];
}

const getItems = asyncHandler(async (req, res, next) => {
  try {
    const { search } = req.query;
    const groups = itemsService();
    const filtered = filterByCategory(groups, search);

    await delay(2000)
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
    // if (!item) {
    //   return res.status(404).json({ error: 'Item not found' });
    // }
    await delay(2000)
    res.json({ ...item, categories });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = { getItems, getItemById };
