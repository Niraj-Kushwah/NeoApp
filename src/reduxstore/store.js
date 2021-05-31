import {createStore,applyMiddleware} from "redux"
import demo from "./reducer"

import {logger} from "./middleware"

import createSaga from "redux-saga"

import{RootSaga} from "./sagas"
import thunk from "redux-thunk";

var sagamiddlewares=createSaga()

var middlewares= applyMiddleware(logger,sagamiddlewares,thunk)

export default createStore(demo,middlewares)
sagamiddlewares.run(RootSaga)
/*var store =createStore(demo)*/

// store.dispatch({
//     type:"login"
// })

// console.log("...........",store.getState())

// store.dispatch({
//     type:"LOGIN",
//     payload:{email:"13psathwane@gmail.com" , name:"prajakta"}
// })//parameter action
// // //action are plane js objects with key known as type
//  console.log("............after login match",store.getState())

/*export default store*/