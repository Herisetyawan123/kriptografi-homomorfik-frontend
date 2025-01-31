import React from 'react'
import CardHistory from '~/components/card-history'
import historyStatic from '~/data/static/history'

export default function HistoryPage() {
  return (
    <div className="max-w-xl mx-auto p-6 bg-white mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-center">History Transaction</h2>

      {
        historyStatic.map(
          (value) => <CardHistory
            amount={value.amount}
            description={value.description}
            type={value.type} />
        )
      }
    </div>

  )
}
