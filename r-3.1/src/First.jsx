import { useState } from 'react'
import './First.css'
function First(props) {
    console.log(props)
    let [a,setA]=useState([1,2,3,4,5])
    function handleAdd(x){
        setA([...a,x])
    }
    function handleRemove(x){
        let copyA=[...a]
        copyA.splice(x,1)
        setA(copyA)
    }
  return (
    <div>
        {
            a.map(ele=>(<h1 key={ele}>{ele}</h1>))
        }
        <button className="btn btn-success" onClick={()=>handleAdd(6)}>add</button>
        <button className="btn btn-danger" onClick={()=>handleRemove(3)}>remove</button>
    </div>
  )
}

export default First