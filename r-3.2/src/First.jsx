import { useState,useEffect } from "react"
function First() {
    let [a,setA]=useState([])
    let [error,seterror]=useState({})
    useEffect(()=>{
        fetch('https://reqres.in/api/users?page=2')
        .then(res=>res.json())
        .then(obj=>setA(obj.data))
        .catch(err=>seterror(err))
    },[])
    console.log(error)
    console.log(a);
  return (
    <div>
        {
            error.message?.length!=0 && <h1>{error.message}</h1> 
        } 
        {  
            a.length===0?
            <div className="spinner-border" role="status"></div>
        :
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>EMAIL</th>
                    <th>FIRST_NAME</th>
                    <th>LAST_NAME</th>
                </tr>
            </thead>
            <tbody>
                {
                    a.map(obj=>(
                        <tr key={obj.id}>
                            <td>{obj.id}</td>
                            <td>{obj.email}</td>
                            <td>{obj.first_name}</td>
                            <td>{obj.last_name}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        }
    </div>
  )
}

export default First