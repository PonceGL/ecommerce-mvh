import { rest } from "../../lib/connection";
import Cors from "cors";
import initMiddleware from "../../lib/init-middleware";

const cors = initMiddleware(
  Cors({
    methods: ["GET"],
  })
);

export default async function getSlidersData(req, res) {
  // Run cors
  await cors(req, res);
  if (req.method !== "GET") {
    res
      .status(500)
      .json({ message: "Lo sentimos, sólo aceptamos solicitudes GET" });
  }

  setTimeout(async () => {
    const result =
      await rest.executeQuery(`SELECT RTRIM(a.CLAVEART) AS articulo_id, RTRIM(a.DESCRIBEAR) AS text, RTRIM(a.URL) AS link, cast('' as xml).value(
        'xs:base64Binary(sql:column("i.IMAGEN"))', 'varchar(max)'
    ) AS image
    FROM ARTICULO AS a
    LEFT OUTER JOIN ARTICULO_IMG AS i
        ON a.CLAVEART = i.CLAVEART
    WHERE a.CLAVEART IN ('SLIDER1', 'SLIDER2', 'SLIDER3', 'SLIDER4') AND i.IMAGEN IS NOT NULL
    ORDER BY a.FECHA_ALTA DESC`);

    result &&
      res.status(200).json({
        name: "Sliders",
        total: result.data[0].length,
        data: result.data[0],
      });
  }, 800);
}
