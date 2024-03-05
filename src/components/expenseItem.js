import React from 'react'
import { LiaEdit } from "react-icons/lia";
import { MdDeleteForever } from "react-icons/md";
import "./expenseitem.css"

export default function ExpenseItem() {


  return (
    <li className='item'>
      <div className='info'>


        <span className='amount'>아이템</span>
        <span className='expense'>1000원</span>


      </div>
      <div>
        <button className='edit-btn'>
          {/* edit-icons */}
          <LiaEdit />
        </button>
        <button className='clear-btn'
        >
          {/* delete-icons */}
          <MdDeleteForever />
        </button>
      </div>
    </li>
  )
}
