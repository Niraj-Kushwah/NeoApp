import axios from 'axios'
export function getorderdetail(){
    let odapi = "https://apifromashu.herokuapp.com/api/cakeorders"
    var token = localStorage.token
    return (dispatch) => {
        axios({
                    url:odapi,
                    method:"post",
                    headers:{
                        authtoken:token
                      } 
                }).then((response)=>{
                    console.log("response from order api" , response.data)
            		dispatch({
            			type:"GETORDERS",
            			payload:response.data.cakeorders
            		})
                },(error)=>{
                    console.log("error from order api" , error)
                })
    }
}