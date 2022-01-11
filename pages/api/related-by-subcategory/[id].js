import { rest } from "../../../lib/connection";
import Cors from "cors";
import initMiddleware from "../../../lib/init-middleware";

const cors = initMiddleware(
  Cors({
    methods: ["GET"],
  })
);

export default async function getProductsByCategorie(req, res) {
  // http://localhost:3000/api/related-by-subcategory/LONAS?first=1&last=20
  // Run cors
  await cors(req, res);

  if (req.method !== "GET") {
    res
      .status(500)
      .json({ message: "Lo sentimos, sólo aceptamos solicitudes GET" });
  }

  const categorie = req.query.id
    .replace(/-/gi, " ")
    .replace(/aacento/g, "á")
    .replace(/eacento/g, "é")
    .replace(/iacento/g, "í")
    .replace(/oacento/g, "ó")
    .replace(/uacento/g, "ú")
    .replace(/Aacento/g, "Á")
    .replace(/Eacento/g, "É")
    .replace(/Iacento/g, "Í")
    .replace(/Oacento/g, "Ó")
    .replace(/Uacento/g, "Ú")
    .replace(/enne/gi, "Ñ");

  const query = `SELECT *
    FROM (
        SELECT ROW_NUMBER () OVER(ORDER BY a.FECHA_ALTA DESC) AS row_id, RTRIM(a.CLAVEART) AS articulo_id, RTRIM(a.DESC_BREVE) AS name, RTRIM(a.DESCRIBEAR) AS description, l.PREC_IVA1 AS price, RTRIM(g.DESGIR) AS category, RTRIM(g2.DESC_GIR2) AS main_category, cast('' as xml).value(
        'xs:base64Binary(sql:column("i.IMAGEN"))', 'varchar(max)'
    ) AS image_url
    FROM ARTICULO AS a
    LEFT OUTER JOIN ARTLISTA AS l
        ON a.CLAVEART = l.CLAVEART
    LEFT OUTER JOIN ARTGIRO AS g
        ON a.CLAVEGIR = g.CLAVEGIR
    LEFT OUTER JOIN ARTGIRO2 AS g2
        ON a.CLAVEGIR2 = g2.CLAVEGIR2
    LEFT OUTER JOIN CAT_CLAS AS c
        ON a.CVE_CLAS = c.CVE_CLAS
    LEFT OUTER JOIN IMAGENES AS i
        ON a.CLAVEART = i.CAMPO1
    LEFT OUTER JOIN ART_ALM AS s
        ON a.CLAVEART = s.CLAVEART
    WHERE g2.DESC_GIR2 = '${categorie}' AND a.HABVTAS = '' AND l.NO_LISTAP = '001' AND i.IMAGEN Is NOT NULL AND s.CVEALM IN ('0020','0007','0018','0014','0015','0002','0008','0023','0017','0028','0027', '0021')
      GROUP BY a.CLAVEART, a.DESC_BREVE, a.DESCRIBEAR, l.PREC_IVA1, a.CVE_CLAS, g.DESGIR, a.CLAVEGIR, g2.DESC_GIR2, i.IMAGEN, a.FECHA_ALTA
    ) AS articles_with_row_nums
    WHERE row_id BETWEEN ${req.query.first || 1} AND ${req.query.last || 6};`;

  setTimeout(async () => {
    const result = await rest.executeQuery(query);

    result &&
      res.status(200).json({
        name: "Products by Category",
        method: req.method,
        total: result.data[0].length,
        data: result.data[0],
      });
  }, 800);
}
