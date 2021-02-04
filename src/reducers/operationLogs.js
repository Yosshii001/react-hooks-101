import {
  ADD_OPERATION_LOG,
  DELETE_ALL_OPERATION_LOGS
} from '../actions'

const operationLogs = (state = [], action) => {

  switch (action) {
    case ADD_OPERATION_LOG:

      const operationLog = {
        descrition: action.descrition,
        operatedAt: action.operatedAt
      }
      
      return [operationLog , ...state]
    case DELETE_ALL_OPERATION_LOGS:
      return []
    default:
      return state
  }
}

export default operationLogs