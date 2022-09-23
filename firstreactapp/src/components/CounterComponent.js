import {useState} from 'react'
/*function CounterComponent(){
    let [count,setCount]=useState(0)
    function increment(){
        setCount(count+1)
    }
    function decrement(){
        setCount(count-1)
    }
    return(
        <div>
            <h1>Counter App</h1>
            <button onClick={increment}>+</button>
            {count}
            <button onClick={decrement}>-</button>
        </div>
    )
}
*/
function CounterComponent(){
    let [fname,setfname]=useState("peter")
    function update(){
        setfname(fname="pete")
    }
    return
    <div>
        <h1>Naming App</h1>
        <button onClick={update}>click</button>
        {fname}
    </div>
}
export default CounterComponent