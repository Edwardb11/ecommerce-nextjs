import Image from "next/image";
import Layout from "../../components/layout";
import Product from "../../components/product";
import { getItems } from "../../service/itemService";

export default function Index({ items }) {
  return (
    <Layout>
      <h1>Store</h1>
      {items &&
        items.map((item) => (
          <Product item={item} showAs="Defaulf"/>
        ))}
    </Layout>
  );
}
export async function getStaticProps() {
  const res = await getItems();
  return {
    props: {
      items: res,
    },
  };
}
