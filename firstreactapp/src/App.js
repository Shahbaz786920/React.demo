import React, {useState} from 'react';
import ContactManager from "./components/ContactManager";




const App=()=>{
   const [mode,setMode] = useState('light')
  
  /*const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark'); 
      document.body.style.backgroundColor = '#042743'
  }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'

    }  
  }*/

    return(
        <div>
          {/*<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
          <div className="container my-3">
          <TextForm heading = "Enter the text here" mode={mode}/>
        </div>*/}
        <ContactManager></ContactManager>
        </div>
    )
}

export default App;
