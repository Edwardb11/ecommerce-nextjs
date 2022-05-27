import Layout from "../../components/layout";
import Product from "../../components/product";
import { getPathsFromIda } from "../../lib/utils";

export default function ProductPage(){
    return (
        <Layout>
            <Product/>
        </Layout>
    );
}

export async function getStaticPaths() {
    const paths =  getPathsFromIda();
    return {
        paths: 
            paths,
        fallback: false,
    };
}