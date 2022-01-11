import { rest } from "../../../../lib/connection";
import Cors from "cors";
import initMiddleware from "../../../../lib/init-middleware";

const cors = initMiddleware(
  Cors({
    methods: ["GET"],
  })
);

export default async function getSubCategoriesBySection(req, res) {
  // Run cors
  await cors(req, res);
  if (req.method !== "GET") {
    res
      .status(500)
      .json({ message: "Lo sentimos, sólo aceptamos solicitudes GET" });
  }

  setTimeout(async () => {
    const result = await rest.executeQuery(
      `SELECT RTRIM(sc.DESC_GIR2) AS sub_category, RTRIM(sc.CLAVEGIR2) AS id_sub
      FROM ARTGIRO AS c
      LEFT OUTER JOIN ARTGIRO2 AS sc
          ON c.CLAVEGIR = sc.CLAVEGIR
      WHERE c.DESGIR = '${req.query.id
        .replace(/-/gi, " ")
        .replace(/enne/gi, "Ñ")}'`
    );

    result &&
      res.status(200).json({
        name: "Main Categories",
        method: req.method,
        total: result.data[0].length,
        data: result.data[0],
      });
  }, 800);
}
