import React, { useState, useEffect } from "react";
import CurrencyColumn from "./CurrencyColumn";

function CurrencySelector() {
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [rate, setRate] = useState();
  const [amount, setAmount] = useState();
  const [amountOnFrom, setAmountOnFrom] = useState(true);

  // The amountOnFrom variable determines if the user is typing the amount they want to convert on the
  // "From:" input (this way the amountOnfrom is true) or the "To: " input (the amountOnFrom is false)

  let toAmount, fromAmount;

  if (amountOnFrom) {
    fromAmount = amount;
    toAmount = amount * rate;
  } else {
    toAmount = amount;
    fromAmount = amount / rate;
  }

  // The converter array has the exchange rates for the selected countries

  const converter = [
    {
      country: "peso",
      rate: { peso: 1, dolar: 0.049, euro: 0.043, sol: 0.19, quetzal: 0.38 },
    },
    {
      country: "dolar",
      rate: { dolar: 1, euro: 0.88, sol: 3.96, quetzal: 7.72, peso: 20.59 },
    },
    {
      country: "euro",
      rate: { dolar: 1.13, euro: 1, sol: 4.48, quetzal: 8.74, peso: 23.3 },
    },
    {
      country: "sol",
      rate: { dolar: 0.25, euro: 0.22, sol: 1, quetzal: 1.95, peso: 5.2 },
    },
    {
      country: "quetzal",
      rate: { dolar: 0.13, euro: 0.11, sol: 0.51, quetzal: 1, peso: 2.67 },
    },
  ];

  // This function will search the desired value on the converter array:

  let searchRate = (fromCurrency, toCurrency) => {
    let selectedArray = [];
    let selectedRate = 1;

    converter.forEach((item) => {
      if (item.country == fromCurrency) {
        selectedRate = item.rate[toCurrency];
        item.rate.push(selectedArray);
      }
    });

    console.log(selectedArray);

    const clickedFromRate = converter.filter(
      (coin) => coin.country == fromCurrency
    );
    return selectedArray;
  };

  console.log(searchRate("sol", "dolar"));

  useEffect(() => {
    let clickedCurrency = searchRate(fromCurrency);
    setRate((converter.rate = 123123));
  }, [fromCurrency, toCurrency]);

  const handleFromAmount = (e) => {
    setAmount(e.target.value);
    setAmountOnFrom(true);
  };

  const handleToAmount = (e) => {
    setAmount(e.target.value);
    setAmountOnFrom(false);
  };

  return (
    <>
      <span className="FromToText">From: </span>
      <CurrencyColumn
        selectedCurrency={fromCurrency}
        onChangeCurrency={(event) => setFromCurrency(event.target.value)}
        amount={fromAmount}
        onChangeAmount={handleFromAmount}
      />
      <span className="FromToText"> To: </span>
      <CurrencyColumn
        selectedCurrency={toCurrency}
        onChangeCurrency={(event) => setToCurrency(event.target.value)}
        amount={toAmount}
        onChangeAmount={handleToAmount}
      />
    </>
  );
}

export default CurrencySelector;
