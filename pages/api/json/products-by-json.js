import articles from "../../../database/articles.json";

export default async function getProductsByJson(req, res) {
  // http://localhost:3000/api/products-by-json

  if (req.method !== "GET") {
    res
      .status(500)
      .json({ message: "Lo sentimos, sólo aceptamos solicitudes GET" });
  }

  console.log("====================================");
  console.log(articles.data[0]);
  console.log("====================================");

  data &&
    res.status(200).json({
      name: `Todos los Productos`,
      total: articles.data.length,
      products: articles.data,
    });
}
