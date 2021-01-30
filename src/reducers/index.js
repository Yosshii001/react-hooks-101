const events = (state = [], action) => {
  switch(action.type) {
    case 'CREATE_EVENT':
      const id = (state.length == 0) ? 1 : state.reduce((a, b) => Math.max(a.id, b.id)) + 1
      const event = { id: id, title: action.title, body: action.body }
      return [...state, event]
    case 'DELETE_EVENT':
      return state
    case 'DELETE_ALL_EVENTS':
      return []
    default:
      return state
  }
}

export default events