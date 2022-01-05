import React from "react";

export default function CurrencyCloumn() {
  return (
    <div className="col-6">
      <input type="number" className="inputSelector col-5" />
      <select className="moneySelector">
        <option value="">---</option>
        <option value="dolar">Dollar</option>
        <option value="euro">Euro</option>
        <option value="mexican peso">Mexican Peso</option>
        <option value="quetzal">Quetzal</option>
        <option value="sol">Sol</option>
      </select>
    </div>
  );
}
