

import React from 'react'
import "./expenseList.css"
import ExpenseItem from './expenseItem'

import { MdDelete } from 'react-icons/md'

export default function ExpoenseList({ expenses, handleDelete, deleteAllItems }) {




  return (
    <>
      <ul className='list'>
        {expenses.map((item, index) => {
          return (
            <ExpenseItem item={item} key={item.id} handleDelete={handleDelete} />
          )
        })}
      </ul>
      <button className='btn' onClick={() => {
        deleteAllItems(expenses)
      }}>
        목록 지우기 <MdDelete className='btn-icon' />
      </button>
    </>
  )
}
