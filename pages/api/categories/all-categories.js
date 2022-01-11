import { rest } from "../../../lib/connection";
import Cors from "cors";
import initMiddleware from "../../../lib/init-middleware";

const cors = initMiddleware(
  Cors({
    methods: ["GET"],
  })
);

export default async function getAllCategories(req, res) {
  // Run cors
  await cors(req, res);
  if (req.method !== "GET") {
    res
      .status(500)
      .json({ message: "Lo sentimos, sólo aceptamos solicitudes GET" });
  }

  setTimeout(async () => {
    const result = await rest.executeQuery(
      `SELECT RTRIM(l.DESGIR) AS categorie, RTRIM(s.DESC_GIR2) AS subcategorie, RTRIM(s.CLAVEGIR2) AS id
    FROM ARTGIRO AS l
    RIGHT JOIN  ARTGIRO2 AS s
        ON s.CLAVEGIR = l.CLAVEGIR
    WHERE l.CO1 = '1'`
    );

    result &&
      res.status(200).json({
        name: "All Categories",
        method: req.method,
        total: result.data[0].length,
        data: result.data[0],
      });
  }, 800);
}
