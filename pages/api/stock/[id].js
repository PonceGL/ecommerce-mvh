import { rest } from "../../../lib/connection";
import Cors from "cors";
import initMiddleware from "../../../lib/init-middleware";

const cors = initMiddleware(
  Cors({
    methods: ["GET"],
  })
);

export default async function getStockOfAProduct(req, res) {
  // http://localhost:3000/api/stock/100053433

  // Run cors
  await cors(req, res);

  if (req.method !== "GET") {
    res
      .status(500)
      .json({ message: "Lo sentimos, sólo aceptamos solicitudes GET" });
  }
  const id = req.query.id.replace(/space/g, " ").replace(/slash/gi, "/");

  const query = `SELECT SUM(s.EXISTE) - SUM(s.U_SURTIR) AS stock
  FROM ART_ALM AS s
  WHERE S.CLAVEART = '${id}' AND s.CVEALM IN ('0020','0007','0018','0014','0015','0002','0008','0023','0017','0028','0027', '0021')`;
  // console.log("Stock :", query);

  setTimeout(async () => {
    const result = await rest.executeQuery(query);

    result &&
      res.status(200).json({
        name: "Stock of a Product",
        data: result.data[0],
      });
  }, 900);
}
