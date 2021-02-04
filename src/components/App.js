import React, { useReducer } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

import AppContext from '../contexts/AppContext'

import EventForm from './EventForm'
import Events from './Events'

import reducer from '../reducers'

const App = () => {
  const initialState = {
    events: []
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <EventForm/>
      <Events/>
    </AppContext.Provider>
  )
}

export default App;
