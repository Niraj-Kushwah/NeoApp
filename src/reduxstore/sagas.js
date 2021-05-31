import axios from "axios"
import {call,put,takeEvery,all} from "redux-saga/effects"

function login(action)
{
	return axios({
		method:"post",
		url:"https://apifromashu.herokuapp.com/api/login",
		data:action.payload
	})
}

function* LoginGenerator(action)
{
  var result=yield call(login,action)
  if(result.data.token)
  {
  	yield put({type:'LOGIN_SUCCESS',payload:result.data})
  	localStorage.setItem('token', result.data.token);
  }else
  {
  	yield put({type:'LOGIN_FAILURE'})
  }
}

export function* LoginSaga()
{
	yield takeEvery("LOGIN",LoginGenerator)
}

export function* RootSaga(){
    yield all([LoginSaga()])
}

// for multiple saga function call need 

/*export function* RootSaga()
{
	yield all(LoginSaga(),OrderSaga())
}*/