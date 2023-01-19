import { getCustomers } from "../../network";

export default async function handler(req, res) {
  const data = await getCustomers();
  res.json(data);
}
