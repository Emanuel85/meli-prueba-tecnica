// app/items/[id]/page.tsx
import type { Metadata } from "next";
import { getItemByIdSSR } from "../../../api/apiMeli";
import CardDetails from "./components/CardDetails";
import Categories from "../components/Categories";
import styles from "./page.module.scss";
import { Props } from "./type";


export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  try {
    // memoiza con el fetch de la page
    const data = await getItemByIdSSR(id);
    const title = data?.item?.title ? `${data.item.title} | Mercado Libre` : "Detalle | Mercado Libre";
    const description = data?.item?.description ?? "Detalle del producto en Mercado Libre";
    return { title, description };
  } catch {
    return { title: "Producto no encontrado | Mercado Libre", description: "No se encontró el producto" };
  }
}

export default async function ItemDetailPage({ params }: Props) {
  const { id } = await params;
  const data = await getItemByIdSSR(id);
  return (
    <div className={styles.container_cardDetailsCategory} data-testid="container_cardDetailsCategory">
      <Categories categories={data.categories} />
      <CardDetails item={data.item} author={data.author} />
    </div>
  );
}

// Para evitar cachear por ID si te conviene
export const revalidate = 0;
