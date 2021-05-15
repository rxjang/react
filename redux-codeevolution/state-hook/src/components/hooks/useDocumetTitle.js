import React, { useEffect } from "react";

function useDocumetTitle(count) {
  useEffect(() => {
    document.title = `Count ${count}`;
  }, [count]);
}

export default useDocumetTitle;
