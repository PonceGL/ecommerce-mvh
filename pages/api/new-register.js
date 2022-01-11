const CosmosClient = require("@azure/cosmos").CosmosClient;
import config from "../../lib/config-cosmos";

const articulos = [];

export default async function getAllCategories(req, res) {
  //   if (req.method !== "POST") {
  //     res
  //       .status(500)
  //       .json({ message: "Lo sentimos, sólo aceptamos solicitudes GET" });
  //   }

  const { endpoint, key } = config;

  const client = new CosmosClient({ endpoint, key });
  const databaseID = client.database("articulos");
  const containerID = databaseID.container("sliders");
  // const { containerID } = await databaseID.containers.createIfNotExists({
  //   id: "articulos_mv",
  // });

  if (endpoint) {
    // for (const articulo of articulos) {
    //   containerID.items.create(articulo);
    // }

    const { resources: items } = await containerID.items
      .query(`SELECT TOP 20 * FROM c`)
      .fetchAll();

    res.status(200).json({
      name: "All Categories",
      method: req.method,
      total: items.length,
      //   data: items,
    });
  }
}
