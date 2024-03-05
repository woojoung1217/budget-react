

import React from 'react'
import "./expenseList.css"


import { MdDelete } from 'react-icons/md'

export default function ExpoenseList() {




  return (
    <>
      <ul className='list'>

      </ul>
      <button className='btn' >
        목록 지우기 <MdDelete className='btn-icon' />
      </button >
    </>
  )
}
