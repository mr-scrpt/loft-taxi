import React from 'react';
import Login from '../Login';

import st from './PageLogin.module.css';

export const PageLogin = (props) =>{
  return(
  <div className={st.pageLogin}>
    <div className={st.pageLogin__inner}>
      <Login />
    </div>
  </div>
        

  )
};