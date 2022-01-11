import Cors from "cors";
import initMiddleware from "../../lib/init-middleware";

const cors = initMiddleware(
  Cors({
    methods: ["GET"],
  })
);

const rest = new (require("rest-mssql-nodejs"))({
  user: process.env.NEXT_PUBLIC_USER,
  password: process.env.NEXT_PUBLIC_PASSWORD,
  server: process.env.NEXT_PUBLIC_HOST,
  database: process.env.NEXT_PUBLIC_DATABASE,
});

export default async function getNewProducts(req, res) {
  // Run cors
  await cors(req, res);
  if (req.method !== "GET") {
    res
      .status(500)
      .json({ message: "Lo sentimos, sólo aceptamos solicitudes GET" });
  }

  setTimeout(async () => {
    const result = await rest.executeQuery(
      `SELECT DISTINCT RTRIM(m.DESC_MARCA) AS marca, m.DESC_MARCA
        FROM MARCAS AS m
        LEFT OUTER JOIN ARTICULO AS a
            ON m.CVE_MARCA = a.CVE_MARCA
        LEFT OUTER JOIN CAT_CLAS AS c
            ON a.CVE_CLAS = c.CVE_CLAS
        WHERE a.HABVTAS = ''
        ORDER BY m.DESC_MARCA ASC;`
    );

    result &&
      res.status(200).json({
        name: "All Store Brands",
        method: req.method,
        total: result.data[0].length,
        brands: result.data[0],
      });
  }, 800);
}
