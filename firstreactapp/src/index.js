import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";
import { createStore } from "redux";
import reducer from "./redux core/reducer";
const mystore=createStore(
reducer
)
const root = ReactDOM.createRoot(document.getElementById('root'));

/*root.render(
  <>
   <Product Price="25000" imglink="https://images-eu.ssl-images-amazon.com/images/I/71AvQd3VzqL._AC._SR360,460.jpg" Details="https://www.amazon.in/dp/B09R42QNSS/ref=s9_acsd_al_bw_c
   2_x_0_t?pf_rd_m=A1K21FY43GMZF8&pf_rd_s=merchandised-search-3&pf_rd_r=1B8T2
   987DWFP2FC12BHF&pf_rd_t=101&pf_rd_p=9dcd3e72-a755-4ed9-b5aa-18af5ae44b
   a0&pf_rd_i=21634722031&th=1"></Product>
   )
  </>*/
  root.render(
    <>
    {/*<Provider store={mystore}>
    </Provider>*/}
    <App></App>
    </>
  )

