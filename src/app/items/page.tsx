import type { Metadata } from "next";
import { getItemsSSR } from "../../api/apiMeli";
import { capitalizeFirstLetter } from "./utils/capitalizeFirstLetter";
import { Props, Items } from "./type";
import Categories from "./components/Categories";
import ListCard from "./components/ListCard";
import styles from "./styles/page.module.scss";
import MessageCustom from "../../ux-ui/msgCustom/MessageCustom";

// SEO dinámico en App Router con Metadata de Next
export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { search = "" } = await searchParams;
  const title = search ? `${capitalizeFirstLetter(search)} | Mercado Libre` : "Meli Challenge";
  const description = search
    ? `Resultados de búsqueda para ${search}`
    : "Meli Challenge";
  return { title, description };
}

export default async function ItemsPage({ searchParams }: Props) {
  const { search = "" } = await searchParams;
  let items: Items[] = [];
  let categories: string[] = [];
  let errorMsg: string = "";
  try {
    const data = await getItemsSSR(search);
    items = data?.items ?? [];
    categories = data?.categories ?? [];
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
      <div className={styles.container_itemsCategory}>
        <Categories categories={categories} currentCategory={search} />
        <ListCard items={items} />
      </div>

    </>
  );
}

export const revalidate = 0;
