
export const getItemsSSR = async (search: string) => {
  try {
    const res = await fetch(`http://localhost:3001/items?search=${encodeURIComponent(search)}`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Error fetching items");
    return res.json();
  } catch (error) {
    // Error de red (server caído, etc.)
    throw new Error("Estamos trabajando para solucionarlo.");
  }
};


export const getItemByIdSSR = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3001/items/${(id)}`, {
      cache: "no-store",
    });

    if (res.status === 404) return null; // manejalo en la page con notFound()

    if (!res.ok) {
      const body = await res.text().catch(() => "");
      throw new Error(`Error fetching item detail: ${res.status} ${res.statusText} ${body}`);
    }
    return res.json();
  } catch (error) {
    // Error de red (server caído, etc.)
    throw new Error("Estamos trabajando para solucionarlo.");
  }
};

export default { getItemsSSR, getItemByIdSSR };