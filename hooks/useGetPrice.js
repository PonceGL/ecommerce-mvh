import { useState, useEffect } from "react";

export function useGetPrice(id) {
  const [price, setPrice] = useState("");
  useEffect(async () => {
    if (id) {
      setPrice("");
      window
        .fetch(
          `/api/price/${id.replace(/ /gi, "space").replace(/\//gi, "slash")}`
        )
        .then((response) => response.json())
        .then(({ data }) => {
          setPrice(data[0].price);
        })
        .catch((error) => {
          console.log("Error: ", error);
        });
    }
  }, [id]);

  return [price];
}
