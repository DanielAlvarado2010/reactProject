import React from "react";

export default function CurrencyCloumn({
  selectedCurrency,
  onChangeCurrency,
  amount,
  onChangeAmount,
}) {
  return (
    <div className="col-6">
      <select
        className="moneySelector"
        value={selectedCurrency}
        onChange={onChangeCurrency}
      >
        <option value="">---</option>
        <option value="dolar">Dollar</option>
        <option value="euro">Euro</option>
        <option value="peso">Mexican Peso</option>
        <option value="quetzal">Quetzal</option>
        <option value="sol">Sol</option>
      </select>
      <input
        type="number"
        className="inputSelector col-5"
        value={amount}
        onChange={onChangeAmount}
      />
    </div>
  );
}
