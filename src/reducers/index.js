import { combineReducers } from 'redux'

import events from './events'
import operationLog from './operationLogs'

export default combineReducers({
  events,
  operationLog
})