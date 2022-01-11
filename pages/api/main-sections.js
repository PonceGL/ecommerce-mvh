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

export default async function getMainSections(req, res) {
  // Run cors
  await cors(req, res);
  if (req.method !== "GET") {
    res
      .status(500)
      .json({ message: "Lo sentimos, sólo aceptamos solicitudes GET" });
  }

  setTimeout(async () => {
    const result = await rest.executeQuery(
      `SELECT RTRIM(CLAVEGIR2) AS id, RTRIM(DESC_GIR2) AS title FROM ARTGIRO2 
      WHERE CLAVEGIR = '1000'`
    );

    result &&
      res.status(200).json({
        name: "All Store Brands",
        method: req.method,
        total: result.data[0].length,
        sections: result.data[0],
      });
  }, 800);
}
