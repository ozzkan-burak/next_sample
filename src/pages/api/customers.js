import { getProducts } from "../../network";

export default async function handler(req, res) {
  const data = await getProducts();
  res.json(data);
}
