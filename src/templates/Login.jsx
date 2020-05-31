import React from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { signInAction } from '../reducks/users/actions';

const Login = () => {
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Login</h2>
      <button onClick={() => {
        dispatch(signInAction({ uid: "001", username: "unko" }));
        dispatch(push('/'))
      }}>
        GO LOGIN
      </button>
    </div>
  )

}
export default Login