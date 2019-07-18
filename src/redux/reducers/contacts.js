import {
  GET_CONTACTS,
  CONTACTS_SUCCESS,
  CONTACTS_ERROR
} from '../actions/types'

const initialState = {
  contacts: []
}

const contacts = (state = initialState, action) => {
  const { type } = action

  switch (type) {
    case GET_CONTACTS:
      return {
        ...state,
        fetching: true,
        error: null
      }
    case CONTACTS_SUCCESS:
      return {
        ...state,
        fetching: false,
        contacts: action.collection
      }
    case CONTACTS_ERROR:
      return {
        ...state,
        fetching: false,
        contacts: null,
        error: action.error
      }
    default:
      return state
  }
}

export default contacts
