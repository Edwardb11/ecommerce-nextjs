import Layout from "../../components/layout";
import Product from "../../components/product";
import { getItemsData, getPathsFromIds } from "../../lib/utils";

export default function ProductPage({ productInfo }) {
  return (
    <Layout title={productInfo.data.title}>
      <Product item={productInfo.data} showAs="Page" />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await getPathsFromIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const id = params.id;
  const productInfo = await getItemsData(id);

  return {
    props: {
      productInfo,
    },
  };
}
