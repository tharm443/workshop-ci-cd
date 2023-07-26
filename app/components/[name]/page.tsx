import React from 'react'

export default function Name({ params }: any) {
  console.log(params)
  return (
    <div className='flex min-h-screen flex-col items-center justify-between p-24'>
      {params.name}
    </div>
  )
}
