import React from 'react'
import { LiaEdit } from "react-icons/lia";
import { MdDeleteForever } from "react-icons/md";
import "./expenseitem.css"

export default function ExpenseItem({ item, handleDelete }) {

  let formattedAmount = new Intl.NumberFormat('ko-KR', { style: 'decimal' }).format(item.amount)
  return (
    <li className='item'>
      <div className='info'>


        <span className='amount'>{item.charge}</span>
        <span className='expense'>{formattedAmount} 원</span>


      </div>
      <div>
        <button className='edit-btn'>
          {/* edit-icons */}
          <LiaEdit />
        </button>
        <button className='clear-btn'
          onClick={() => {
            handleDelete(item.id)
          }}
        >
          {/* delete-icons */}
          <MdDeleteForever />
        </button>
      </div>
    </li>
  )
}
