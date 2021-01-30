import React, { useReducer, useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

import reducer from '../reducers'
import Event from './Event'

const App = () => {

  const [state, dispatch] = useReducer(reducer, [])

  const [title, setTitle] = useState('') 
  const [body, setBody] = useState('')


  const addEvent = e => {
    e.preventDefault()

    const action = {
      type: 'CREATE_EVENT',
      title: title,
      body: body
    }

    dispatch(action)
    console.log({state})
    setTitle('')
    setBody('')
  }

  const unCreatable = title === "" || body === ""

  const deleteAllEvents = e => {
    e.preventDefault()

    if (!window.confirm("すべてのイベントを削除しますが、大丈夫ですか？")) {
      return
    }

    const action = {
      type: 'DELETE_ALL_EVENTS'
    }

    dispatch(action)
  }

  const unDeletetable = state.length === 0

  return (
    <div className="container-fluid">
      <form>
        <h4>イベント作成フォーム</h4>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input className="form-control"
          id="formEventTitle"
          value={title}
          onChange={e => setTitle(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody">ボディー</label>
          <textarea className="form-control"
          id="formEventBody"
          value={body}
          onChange={e => setBody(e.target.value)}/>
        </div>
        <button
          className="btn btn-primary"
          onClick={addEvent}
          disabled={unCreatable}>
          イベントを作成
        </button>
        <button
          className="btn btn-danger"
          onClick={deleteAllEvents}
          disabled={unDeletetable}>
          すべてのイベントを削除
        </button>
      </form>

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
          state.map(
            event => (<Event dispatch={dispatch} event={event} />)
          )
        }
        </tbody>
      </table>
    </div>
  )
}

export default App;
