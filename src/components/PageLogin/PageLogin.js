import React from 'react';
import Login from '../Login';

import st from './PageLogin.module.css';

export const PageLogin = (props) =>{
  const {onSends} = props;
  return(
  <div className={st.pageLogin}>
    <div className={st.pageLogin__inner}>
      <Login onSends={()=>onSends()}/>
    </div>
  </div>
        

  )
};