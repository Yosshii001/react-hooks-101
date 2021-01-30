import React from 'react'

const Event = ({dispatch, event}) => {
  const handleClickDeleteButton = id => {
    const action = {
      type: 'DELETE_EVENT',
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