import React, { useState, type FormEvent } from 'react'
import type { SaldoModel } from '~/data/request/saldo';


export default function WithdrawPage() {
  const [saldo, setSaldo] = useState<SaldoModel>({
    amount: 0,
    description: ''
  })


  const onType = (value: number | string, key: string) => {
    setSaldo(prevState => ({ ...saldo, [key]: value }));
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(saldo)
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-center">Withdraw</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium">Amount</label>
          <input
            type="number"
            min={1000}
            step={1000}
            value={saldo.amount}
            onChange={(e) => onType(e.target.value, "amount")}
            required
            className="w-full p-3 border rounded-md mt-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Description</label>
          <input
            type="text"
            onChange={(e) => onType(e.target.value, "description")}
            value={saldo.description}
            required
            className="w-full p-3 border rounded-md mt-2"
          />
        </div>
        <button type="submit" className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">Login</button>
      </form>
    </div>
  )

}

