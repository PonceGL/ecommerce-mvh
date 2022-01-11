import { useState, useEffect } from "react";

export function useMyItems(id, listItems) {
  const [yesItIsMine, setYesItIsMine] = useState(false);

  useEffect(() => {
    let filtered = listItems.filter((item) => item.articulo_id == id)[0];
    if (filtered) {
      setYesItIsMine(true);
    } else {
      setYesItIsMine(false);
    }
  }, [listItems, id]);

  return [yesItIsMine];
}
