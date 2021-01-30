import React, { useContext } from 'react'

import AppContext from '../contexts/AppContext'

import { DELETE_EVENT } from '../actions'

const Event = ({ event }) => {

  const { dispatch }  = useContext(AppContext)

  const handleClickDeleteButton = id => {

    const confirm = window.confirm(
      `イベント（ID:${id}）を削除してもよろしいですか`
    )

    if (!confirm) {
      return
    }

    const action = {
      type: DELETE_EVENT,
      id: id
    }
    dispatch(action)
  }

  return  (
    <tr>
      <td>{event.id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td>
        <button
        onClick={() => handleClickDeleteButton(event.id)}
        className="btn btn-danger">
          削除
        </button>
      </td>
    </tr>
  )
}


export default Event