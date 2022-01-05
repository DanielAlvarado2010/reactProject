import React, { useState } from "react";
import CurrencyColumn from "./CurrencyColumn";

function CurrencySelector() {
  const [Currency, setCurrency] = useState("");

  const handleSelect = (event) => setCurrency(event.target.value);
  return (
    <>
      <CurrencyColumn />
    </>
  );
}

export default CurrencySelector;
