import { rest } from "../../lib/connection";
import Cors from "cors";
import initMiddleware from "../../lib/init-middleware";

const cors = initMiddleware(
  Cors({
    methods: ["GET"],
  })
);

export default async function getProductsByCategorie(req, res) {
  // http://localhost:3000/api/todos-los-articulos
  // Run cors
  await cors(req, res);

  if (req.method !== "GET") {
    res
      .status(500)
      .json({ message: "Lo sentimos, sólo aceptamos solicitudes GET" });
  }

  const slidersItems = `SELECT RTRIM(a.CLAVEART) AS articulo_id, RTRIM(a.DESCRIBEAR) AS text, RTRIM(a.URL) AS link, cast('' as xml).value(
    'xs:base64Binary(sql:column("i.IMAGEN"))', 'varchar(max)'
) AS image
FROM ARTICULO AS a
LEFT OUTER JOIN ARTICULO_IMG AS i
    ON a.CLAVEART = i.CLAVEART
WHERE a.CLAVEART IN ('SLIDER1', 'SLIDER2', 'SLIDER3', 'SLIDER4') AND i.IMAGEN IS NOT NULL
ORDER BY a.FECHA_ALTA DESC`;

  const bestSellers = `SELECT *
  FROM (
      SELECT ROW_NUMBER () OVER(ORDER BY a.FECHA_ALTA DESC) AS row_id, RTRIM(a.CLAVEART) AS articulo_id, RTRIM(a.DESC_BREVE) AS name, RTRIM(a.DESCRIBEAR) AS description, RTRIM(l.PREC_IVA1) AS price, RTRIM(g.DESGIR) AS category, RTRIM(g2.DESC_GIR2) AS main_category, RTRIM(m.DESC_MARCA) AS brand, cast('' as xml).value(
      'xs:base64Binary(sql:column("i.IMAGEN"))', 'varchar(max)'
  ) AS image_url
    FROM ARTICULO AS a
  LEFT OUTER JOIN ARTLISTA AS l
      ON a.CLAVEART = l.CLAVEART
  LEFT OUTER JOIN ARTGIRO AS g
      ON a.CLAVEGIR = g.CLAVEGIR
  LEFT OUTER JOIN ARTGIRO2 AS g2
      ON a.CLAVEGIR2 = g2.CLAVEGIR2
  LEFT OUTER JOIN ARTICULO_IMG AS i
      ON a.CLAVEART = i.CLAVEART
  LEFT OUTER JOIN ART_ALM AS s
      ON a.CLAVEART = s.CLAVEART
  LEFT OUTER JOIN MARCAS AS m
      ON a.CVE_MARCA = m.CVE_MARCA
  WHERE a.HABVTAS = '' AND g.DESGIR = 'LO MÁS VENDIDOS' AND l.NO_LISTAP = '001' AND i.IMAGEN IS NOT NULL AND i.SELECTO = 'S' AND s.CVEALM IN ('0020','0007','0018','0014','0015','0002','0008','0023','0017','0028','0027', '0021')
  GROUP BY a.CLAVEART, a.DESC_BREVE, a.DESCRIBEAR, l.PREC_IVA1, g.DESGIR, a.CLAVEGIR, g2.DESC_GIR2, i.IMAGEN, a.FECHA_ALTA, m.DESC_MARCA
  ) AS articles_with_row_nums
  WHERE row_id BETWEEN 1 AND 12;`;

  const lightingItems = `SELECT *
  FROM (
      SELECT ROW_NUMBER () OVER(ORDER BY a.FECHA_ALTA DESC) AS row_id, RTRIM(a.CLAVEART) AS articulo_id, RTRIM(a.DESC_BREVE) AS name, RTRIM(a.DESCRIBEAR) AS description, RTRIM(l.PREC_IVA1) AS price, RTRIM(g.DESGIR) AS category, RTRIM(g2.DESC_GIR2) AS main_category, RTRIM(m.DESC_MARCA) AS brand, cast('' as xml).value(
      'xs:base64Binary(sql:column("i.IMAGEN"))', 'varchar(max)'
  ) AS image_url
    FROM ARTICULO AS a
  LEFT OUTER JOIN ARTLISTA AS l
      ON a.CLAVEART = l.CLAVEART
  LEFT OUTER JOIN ARTGIRO AS g
      ON a.CLAVEGIR = g.CLAVEGIR
  LEFT OUTER JOIN ARTGIRO2 AS g2
      ON a.CLAVEGIR2 = g2.CLAVEGIR2
  LEFT OUTER JOIN ARTICULO_IMG AS i
      ON a.CLAVEART = i.CLAVEART
  LEFT OUTER JOIN ART_ALM AS s
      ON a.CLAVEART = s.CLAVEART
  LEFT OUTER JOIN MARCAS AS m
      ON a.CVE_MARCA = m.CVE_MARCA
  WHERE a.HABVTAS = '' AND g2.DESC_GIR2 = 'ILUMINACION' AND l.NO_LISTAP = '001' AND i.IMAGEN IS NOT NULL AND i.SELECTO = 'S' AND s.CVEALM IN ('0020','0007','0018','0014','0015','0002','0008','0023','0017','0028','0027', '0021')
  GROUP BY a.CLAVEART, a.DESC_BREVE, a.DESCRIBEAR, l.PREC_IVA1, g.DESGIR, a.CLAVEGIR, g2.DESC_GIR2, i.IMAGEN, a.FECHA_ALTA, m.DESC_MARCA
  ) AS articles_with_row_nums
  WHERE row_id BETWEEN 1 AND 12;`;

  const ferrItems = `SELECT *
  FROM (
      SELECT ROW_NUMBER () OVER(ORDER BY a.FECHA_ALTA DESC) AS row_id, RTRIM(a.CLAVEART) AS articulo_id, RTRIM(a.DESC_BREVE) AS name, RTRIM(a.DESCRIBEAR) AS description, RTRIM(l.PREC_IVA1) AS price, RTRIM(g.DESGIR) AS category, RTRIM(g2.DESC_GIR2) AS main_category, RTRIM(m.DESC_MARCA) AS brand, cast('' as xml).value(
      'xs:base64Binary(sql:column("i.IMAGEN"))', 'varchar(max)'
  ) AS image_url
    FROM ARTICULO AS a
  LEFT OUTER JOIN ARTLISTA AS l
      ON a.CLAVEART = l.CLAVEART
  LEFT OUTER JOIN ARTGIRO AS g
      ON a.CLAVEGIR = g.CLAVEGIR
  LEFT OUTER JOIN ARTGIRO2 AS g2
      ON a.CLAVEGIR2 = g2.CLAVEGIR2
  LEFT OUTER JOIN ARTICULO_IMG AS i
      ON a.CLAVEART = i.CLAVEART
  LEFT OUTER JOIN ART_ALM AS s
      ON a.CLAVEART = s.CLAVEART
  LEFT OUTER JOIN MARCAS AS m
      ON a.CVE_MARCA = m.CVE_MARCA
  WHERE a.HABVTAS = '' AND g.DESGIR = 'FERRETERIA' AND l.NO_LISTAP = '001' AND i.IMAGEN IS NOT NULL AND i.SELECTO = 'S' AND s.CVEALM IN ('0020','0007','0018','0014','0015','0002','0008','0023','0017','0028','0027', '0021')
  GROUP BY a.CLAVEART, a.DESC_BREVE, a.DESCRIBEAR, l.PREC_IVA1, g.DESGIR, a.CLAVEGIR, g2.DESC_GIR2, i.IMAGEN, a.FECHA_ALTA, m.DESC_MARCA
  ) AS articles_with_row_nums
  WHERE row_id BETWEEN 1 AND 12;`;

  const doorsItems = `SELECT *
  FROM (
      SELECT ROW_NUMBER () OVER(ORDER BY a.FECHA_ALTA DESC) AS row_id, RTRIM(a.CLAVEART) AS articulo_id, RTRIM(a.DESC_BREVE) AS name, RTRIM(a.DESCRIBEAR) AS description, RTRIM(l.PREC_IVA1) AS price, RTRIM(g.DESGIR) AS category, RTRIM(g2.DESC_GIR2) AS main_category, RTRIM(m.DESC_MARCA) AS brand, cast('' as xml).value(
      'xs:base64Binary(sql:column("i.IMAGEN"))', 'varchar(max)'
  ) AS image_url
    FROM ARTICULO AS a
  LEFT OUTER JOIN ARTLISTA AS l
      ON a.CLAVEART = l.CLAVEART
  LEFT OUTER JOIN ARTGIRO AS g
      ON a.CLAVEGIR = g.CLAVEGIR
  LEFT OUTER JOIN ARTGIRO2 AS g2
      ON a.CLAVEGIR2 = g2.CLAVEGIR2
  LEFT OUTER JOIN ARTICULO_IMG AS i
      ON a.CLAVEART = i.CLAVEART
  LEFT OUTER JOIN ART_ALM AS s
      ON a.CLAVEART = s.CLAVEART
  LEFT OUTER JOIN MARCAS AS m
      ON a.CVE_MARCA = m.CVE_MARCA
  WHERE a.HABVTAS = '' AND g2.DESC_GIR2 = 'PUERTAS Y VENTANAS' AND l.NO_LISTAP = '001' AND i.IMAGEN IS NOT NULL AND i.SELECTO = 'S' AND s.CVEALM IN ('0020','0007','0018','0014','0015','0002','0008','0023','0017','0028','0027', '0021')
  GROUP BY a.CLAVEART, a.DESC_BREVE, a.DESCRIBEAR, l.PREC_IVA1, g.DESGIR, a.CLAVEGIR, g2.DESC_GIR2, i.IMAGEN, a.FECHA_ALTA, m.DESC_MARCA
  ) AS articles_with_row_nums
  WHERE row_id BETWEEN 1 AND 12;`;

  const ventilationItems = `SELECT *
  FROM (
      SELECT ROW_NUMBER () OVER(ORDER BY a.FECHA_ALTA DESC) AS row_id, RTRIM(a.CLAVEART) AS articulo_id, RTRIM(a.DESC_BREVE) AS name, RTRIM(a.DESCRIBEAR) AS description, RTRIM(l.PREC_IVA1) AS price, RTRIM(g.DESGIR) AS category, RTRIM(g2.DESC_GIR2) AS main_category, RTRIM(m.DESC_MARCA) AS brand, cast('' as xml).value(
      'xs:base64Binary(sql:column("i.IMAGEN"))', 'varchar(max)'
  ) AS image_url
    FROM ARTICULO AS a
  LEFT OUTER JOIN ARTLISTA AS l
      ON a.CLAVEART = l.CLAVEART
  LEFT OUTER JOIN ARTGIRO AS g
      ON a.CLAVEGIR = g.CLAVEGIR
  LEFT OUTER JOIN ARTGIRO2 AS g2
      ON a.CLAVEGIR2 = g2.CLAVEGIR2
  LEFT OUTER JOIN ARTICULO_IMG AS i
      ON a.CLAVEART = i.CLAVEART
  LEFT OUTER JOIN ART_ALM AS s
      ON a.CLAVEART = s.CLAVEART
  LEFT OUTER JOIN MARCAS AS m
      ON a.CVE_MARCA = m.CVE_MARCA
  WHERE a.HABVTAS = '' AND g2.DESC_GIR2 = 'VENTILACION Y CALEFACCIÓN' AND l.NO_LISTAP = '001' AND i.IMAGEN IS NOT NULL AND i.SELECTO = 'S' AND s.CVEALM IN ('0020','0007','0018','0014','0015','0002','0008','0023','0017','0028','0027', '0021')
  GROUP BY a.CLAVEART, a.DESC_BREVE, a.DESCRIBEAR, l.PREC_IVA1, g.DESGIR, a.CLAVEGIR, g2.DESC_GIR2, i.IMAGEN, a.FECHA_ALTA, m.DESC_MARCA
  ) AS articles_with_row_nums
  WHERE row_id BETWEEN 1 AND 12;`;

  setTimeout(async () => {
    const slider = await rest.executeQuery(slidersItems);
    const bests = await rest.executeQuery(bestSellers);
    const lighting = await rest.executeQuery(lightingItems);
    const ferr = await rest.executeQuery(ferrItems);
    const doors = await rest.executeQuery(doorsItems);
    const ventilation = await rest.executeQuery(ventilationItems);

    ventilation &&
      res.status(200).json({
        name: `Inicio`,
        slider: slider.data[0],
        bests: bests.data[0],
        lighting: lighting.data[0],
        ferr: ferr.data[0],
        doors: doors.data[0],
        ventilation: ventilation.data[0],
        status: true,
      });
  }, 800);
}
