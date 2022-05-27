import { getItems } from "../service/itemService";

export async function getPathsFromIda() {
  const items = await getItems();
  const paths = items.map((item) => {
    return {
      params: {
        id: item.id,
      },
    };
  });
}
