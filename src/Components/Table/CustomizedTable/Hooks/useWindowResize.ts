import { useEffect, useState } from "react";
import { getColumnSize } from "../utils";

export const useWindowResize = () => {
  const [numberOfColumn, setNumberOfColumn] = useState<number>(getColumnSize());

  /**
   * Life Cycle
   */
  useEffect(() => {
    function handleResize() {
      setNumberOfColumn(getColumnSize());
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { numberOfColumn };
};
