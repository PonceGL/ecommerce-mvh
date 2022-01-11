import { rest } from "../../../lib/connection";
import Cors from "cors";
import initMiddleware from "../../../lib/init-middleware";

const cors = initMiddleware(
  Cors({
    methods: ["GET"],
  })
);

export default async function getCategoriesByProduct(req, res) {
  // http://localhost:3000/api/detalles-categories/103793832
  // Run cors
  await cors(req, res);
  if (req.method !== "GET") {
    res
      .status(500)
      .json({ message: "Lo sentimos, sólo aceptamos solicitudes GET" });
  }
  const query = req.query.id.replace(/space/g, " ").replace(/slash/gi, "/");

  setTimeout(async () => {
    const result =
      await rest.executeQuery(`SELECT TOP 1 RTRIM(g.DESGIR) AS category, RTRIM(g2.DESC_GIR2) AS main_category
      FROM ARTICULO AS a
      LEFT OUTER JOIN ARTLISTA AS l
          ON a.CLAVEART = l.CLAVEART
      LEFT OUTER JOIN ARTGIRO AS g
          ON a.CLAVEGIR = g.CLAVEGIR
      LEFT OUTER JOIN ARTGIRO2 AS g2
          ON a.CLAVEGIR2 = g2.CLAVEGIR2
      WHERE a.CLAVEART = '${query}'`);

    result &&
      res.status(200).json({
        name: "Details Product",
        total: result.data[0].length,
        data: result.data[0],
      });
  }, 800);
}
