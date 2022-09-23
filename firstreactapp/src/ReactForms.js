import {useState} from "react"

function ReactForms(){
    const [fname,setFname]=useState("")
    const [inp,setInp]=useState("")
    const updateusername=()=>{
        setFname(inp)
    }
    const getName=(e)=>{
    setInp(e.target.value)
    }

    return(
        <div>
        <h1>welcome {fname}</h1>
        Enter username:<input type="text" placeholder="enter your name here"
        onChange={(e)=>getName(e)}></input>
        <button onClick={updateusername}>update</button>
        </div> 

    )

}
export default ReactForms