import React from "react";

function Count({ text, count }) {
  console.log(`rediering ${text}`);
  return (
    <div>
      {text}: {count}
    </div>
  );
}

export default React.memo(Count);
