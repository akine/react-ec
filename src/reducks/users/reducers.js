import * as Actions from './actions'
import initialState from '../store/initialState'

export const UserReducer = (state = initialState.users, action) => {
  switch (action.type) {
    case Actions.SIGN_IN:
      return {
        // 今の状態を保持
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