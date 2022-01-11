import { rest } from "../../../lib/connection";
import Cors from "cors";
import initMiddleware from "../../../lib/init-middleware";

const cors = initMiddleware(
  Cors({
    methods: ["GET"],
  })
);

export default async function getMainCategories(req, res) {
  // Run cors
  await cors(req, res);
  if (req.method !== "GET") {
    res
      .status(500)
      .json({ message: "Lo sentimos, sólo aceptamos solicitudes GET" });
  }

  // let resultMenu = [];
  setTimeout(async () => {
    const result = await rest.executeQuery(
      `SELECT RTRIM(DESGIR) AS name, RTRIM(CLAVEGIR) AS category_id FROM ARTGIRO WHERE CO1 = '1'`
    );

    if (result) {
      res.status(200).json({
        name: "Main Categories",
        method: req.method,
        total: result.data[0].length,
        data: result.data[0],
      });
    }
  }, 1000);
}
