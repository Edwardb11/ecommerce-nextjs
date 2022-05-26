import Image from "next/image";
import Layout from "../../components/layout";
import { getItems } from "../../service/itemService";

export default function Index({ items }) {
  return (
    <Layout>
      <h1>Store</h1>
      {items &&
        items.map((item) => (
          <div key={item.id}>
            <Image src={item.image} width="200" height="200"></Image>
            {item.title}
          </div>
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
