import React from 'react'

export default function HistoryPage() {
  return (
    <div className="max-w-xl mx-auto p-6 bg-white mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-center">History Transaction</h2>
      <div className='bg-white hover:scale-105 duration-700 shadow px-8 py-6 rounded flex gap-5 justify-between items-center mb-2'>
        <div className='flex gap-5 items-center'>
          <div>
            Icon
          </div>
          <div>
            <h1>
              Amount: <span className="font-bold text-orange-800"> Rp. 100.000,- </span>
            </h1>
            <p>lorem ipsum dolor imet</p>
          </div>

        </div>
        <div>
          <span className='bg-green-500 text-white px-4 py-2 rounded-2xl text-sm'>top up</span>
        </div>
      </div>
      <div className='bg-white hover:scale-105 duration-700 shadow px-8 py-6 rounded flex gap-5 justify-between items-center mb-2'>
        <div className='flex gap-5 items-center'>
          <div>
            Icon
          </div>
          <div>
            <h1>
              Amount: <span className="font-bold text-orange-800"> Rp. 100.000,- </span>
            </h1>
            <p>lorem ipsum dolor imet</p>
          </div>

        </div>
        <div>
          <span className='bg-red-500 text-white px-4 py-2 rounded-2xl text-sm'>withdraw</span>
        </div>
      </div>
    </div>

  )
}
