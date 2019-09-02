import React from 'react';
import Map from "../Map";
import st from './PageMap.module.css';


export const PageMap = () =>{

  return(

    <div className={st.pageMap}>
    <div className={st.pageMap__inner}>
      <Map />
    </div>
    </div>

  )
};