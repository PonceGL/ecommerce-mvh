import articles from "../../../database/articles.json";

export default async function getProductsByJson(req, res) {
  // http://localhost:3000/api/json/doors-and-windows

  if (req.method !== "GET") {
    res
      .status(500)
      .json({ message: "Lo sentimos, sólo aceptamos solicitudes GET" });
  }

  const items = articles.data.filter(
    (item) => item.main_category === "PUERTAS Y VENTANAS"
  );

  items &&
    res.status(200).json({
      name: `PUERTAS Y VENTANAS`,
      total: items.length,
      products: items,
    });
}
