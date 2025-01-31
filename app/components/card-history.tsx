import React from 'react'
import { TypeEnum, type cardProps } from '~/data/props/history'

export default function CardHistory({ amount, description, type }: cardProps) {
  return (
    <div className='bg-white hover:scale-105 duration-700 shadow px-8 py-6 rounded flex gap-5 justify-between items-center mb-2'>
      <div className='flex gap-5 items-center'>
        <div>
          Icon
        </div>
        <div>
          <h1>
            Amount: <span className="font-bold text-orange-800"> Rp. {amount},- </span>
          </h1>
          <p>{description}</p>
        </div>

      </div>
      <div>
        <span className={`${type == TypeEnum.Topup ? 'bg-green-500' : 'bg-red-500'} text-white px-4 py-2 rounded-2xl text-sm`}>top up</span>
      </div>
    </div>

  )
}

