import * as Actions from './actions'
import initialState from '../store/initialState'

export const UserReducer = (state = initialState.users, action) => {
  switch (action.type) {
    case Actions.SIGN_IN:
      return {
        // state指定することで、initialStateを保持できる。
        ...state,
        ...action.payload
        // isSignedIn: action.payload.isSignedIn,
        // uid: action.payload.uid,
        // username: action.payload.username
      }
    default:
      return state
  }
}