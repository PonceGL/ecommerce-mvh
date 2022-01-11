import { useState, useEffect } from "react";

export function useGetImage(id = "") {
  const [image, setImage] = useState("");
  useEffect(async () => {
    if (id) {
      setImage("");
      window
        .fetch(
          `/api/image/${id.replace(/ /gi, "space").replace(/\//gi, "slash")}`
        )
        .then((response) => response.json())
        .then(({ data }) => {
          setImage(data[0].image_url);
        })
        .catch((error) => {
          console.log("Error: ", error);
        });
    }
  }, [id]);

  return [image];
}
