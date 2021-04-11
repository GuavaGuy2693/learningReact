import React from 'react'

export default function CurrencyRow(props) {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    onChangeAmount,
    amount
  } = props

console.log(selectedCurrency)

  return (
    <div>
      <input type='number' className='input' value={amount} onChange={onChangeAmount}/>
        <select value={selectedCurrency} onChange={onChangeCurrency}>
          {currencyOptions.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
    </div>
  )
}