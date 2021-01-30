const events = (state = [], action) => {
  switch(action.type) {
    case 'CREATE_EVENT':
      const id = (state.length === 0) ? 1 : state.reduce((a, b) => (a.id > b.id)? a : b).id + 1
      const event = { id: id, title: action.title, body: action.body }
      return [...state, event]
    case 'DELETE_EVENT':
      const createdState = state.filter(item => item.id !== action.id)
      return createdState
    case 'DELETE_ALL_EVENTS':
      return []
    default:
      return state
  }
}

export default events