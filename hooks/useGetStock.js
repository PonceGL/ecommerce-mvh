import { useState, useEffect } from "react";

export function useGetStock(id = "") {
  const [stock, setStock] = useState("");

  // Solicita el Stock
  useEffect(async () => {
    window
      .fetch(
        `/api/stock/${id.replace(/ /gi, "space").replace(/\//gi, "slash")}`
      )
      .then((response) => response.json())
      .then(({ data }) => {
        setStock(data[0].stock);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }, [id]);

  return [stock];
}
