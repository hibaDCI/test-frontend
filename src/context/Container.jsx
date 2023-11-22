import { useEffect, useState } from "react";
import { MyContext } from "./context";


export default function Container({children}) {
    const [user,setUser]= useState(null)
    const [records,setRecords]= useState([])
    const [cart, setCart]= useState([])


    useEffect(()=>{
        //on load 
        const token = localStorage.getItem("token")
        //read =>    localStorage.getItem(key)
        //write =>   localStorage.setItem(key,value)
        //remove item =>   localStorage.removeItem(key)
        //clear =>   localStorage.clear()
        if(token){
            fetch("http://localhost:8000/api/users/verifytoken",{
                method:"GET",
                headers:{"token":token}
            }).then(res=>res.json())
            .then(result=>{
                if(result.success){
                    setUser(result.data)
                }else{
                    console.log(result.message)
                }
            })
        }
    },[])

  return (
    <MyContext.Provider value={{user,setUser,records,setRecords,cart, setCart}}>
            {children} 
    </MyContext.Provider>
  )
}


