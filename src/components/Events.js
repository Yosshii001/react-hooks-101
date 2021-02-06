import React, { useContext } from 'react'

import AppContext from '../contexts/AppContext'

import Event from './Event'

const Events = () => {

  const { state } = useContext(AppContext)

  return (<>
    <h4>イベント一覧</h4>
    <table className="table table-hover">
      <thead>
        <tr>
          <th>ID</th>
          <th>タイトル</th>
          <th>ボディ</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      {
        state.events.map(
          (event, index) => (<Event event={event} key={index} />)
        )
      }
      </tbody>
    </table>
  </>)
}

export default Events