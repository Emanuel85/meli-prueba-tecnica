// app/items/[id]/page.tsx
import type { Metadata } from "next";
import { getItemByIdSSR } from "../../../api/apiMeli";
import CardDetails from "./components/CardDetails";
import Categories from "../components/Categories";
import styles from "../styles/page.module.scss";
import { Props } from "./type";
import MessageCustom from "@/ux-ui/msgCustom/MessageCustom";


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
  let data: any
  let errorMsg: string = "";
  try {
    data = await getItemByIdSSR(id);
  } catch (error: any) {
    errorMsg = error.message;
  }
  return (
    <>
      {errorMsg && (
        <MessageCustom
          url_msg={'/imagen/imgError.png'}
          msgPrimary={'Algo salió mal'}
          msgSecondary={errorMsg} />
      )}
      {data && (
        <div className={styles.container_cardDetailsCategory} data-testid="container_cardDetailsCategory">
          <Categories categories={data.categories} />
          <CardDetails item={data.item} author={data.author} />
        </div>
      )}
    </>
  );
}
