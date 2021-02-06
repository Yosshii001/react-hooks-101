import React, { useReducer } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

import AppContext from '../contexts/AppContext'

import EventForm from './EventForm'
import Events from './Events'
import OperationLogs from './OperationLogs'

import reducer from '../reducers'

const App = () => {
  const initialState = {
    events: [],
    operationLogs: []
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <EventForm/>
      <Events/>
      <OperationLogs/>
    </AppContext.Provider>
  )
}

export default App;
