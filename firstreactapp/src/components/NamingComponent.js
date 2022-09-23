import {useState} from 'react'
function NamingComponent(){
    let [fname,setfname]=useState("peter")
    function update(){
        setfname(fname="pete")
    }
    return(
    <div>
        <h1>Naming App</h1>
        <button onClick={update}>click</button>
        {fname}
    </div>
    )
}

export default NamingComponent