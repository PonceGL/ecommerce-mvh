import { rest } from "../../../lib/connection";
import Cors from "cors";
import initMiddleware from "../../../lib/init-middleware";

const cors = initMiddleware(
  Cors({
    methods: ["GET"],
  })
);

export default async function getDetailsProduct(req, res) {
  // http://localhost:3000/api/detalles-initial/103793832
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
      await rest.executeQuery(`SELECT RTRIM(a.CLAVEART) AS articulo_id, RTRIM(a.DESC_BREVE) AS name, RTRIM(a.DESCRIBEAR) AS description, l.PREC_IVA1 AS price, cast('' as xml).value(
        'xs:base64Binary(sql:column("i.IMAGEN"))', 'varchar(max)'
    ) AS image_url
    FROM ARTICULO AS a
    LEFT OUTER JOIN ARTLISTA AS l
        ON a.CLAVEART = l.CLAVEART
    LEFT OUTER JOIN IMAGENES AS i
        ON a.CLAVEART = i.CAMPO1
    WHERE a.CLAVEART = '${query}' AND a.HABVTAS = '' AND l.NO_LISTAP = '001'
    GROUP BY a.CLAVEART, a.CLAVEART, a.DESC_BREVE, a.DESCRIBEAR, l.PREC_IVA1, i.IMAGEN`);

    result &&
      res.status(200).json({
        name: "Details Product",
        total: result.data[0].length,
        data: result.data[0],
      });
  }, 800);
}
