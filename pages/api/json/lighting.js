import articles from "../../../database/articles.json";

export default async function getProductsByJson(req, res) {
  // http://localhost:3000/api/json/lighting

  if (req.method !== "GET") {
    res
      .status(500)
      .json({ message: "Lo sentimos, sólo aceptamos solicitudes GET" });
  }

  const items = articles.data.filter(
    (item) => item.main_category === "ILUMINACION"
  );

  items &&
    res.status(200).json({
      name: `ILUMINACION`,
      total: items.length,
      products: items,
    });
}
