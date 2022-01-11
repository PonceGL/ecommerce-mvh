import { rest } from "../../../lib/connection";
import Cors from "cors";
import initMiddleware from "../../../lib/init-middleware";

const cors = initMiddleware(
  Cors({
    methods: ["GET"],
  })
);

export default async function getPricekOfAProduct(req, res) {
  // http://localhost:3000/api/price/100053433

  // Run cors
  await cors(req, res);

  if (req.method !== "GET") {
    res
      .status(500)
      .json({ message: "Lo sentimos, sólo aceptamos solicitudes GET" });
  }

  const id = req.query.id.replace(/space/g, " ").replace(/slash/gi, "/");

  const query = `SELECT TOP 1 PREC_IVA1 AS price FROM ARTLISTA WHERE CLAVEART = '${id}' AND NO_LISTAP = '001'`;

  setTimeout(async () => {
    const result = await rest.executeQuery(query);

    result &&
      res.status(200).json({
        name: "Stock of a Product",
        data: result.data[0],
      });
  }, 900);
}
