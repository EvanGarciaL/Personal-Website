import "./index.css"

import { useEffect } from "react";

export function useRoot(id : string) {
  const root = document.getElementById("root")

  useEffect(() => {
    root?.classList.add(id)
  
    return () => {
      root?.classList.remove(id)
    };

  },[root?.classList, id]);

}