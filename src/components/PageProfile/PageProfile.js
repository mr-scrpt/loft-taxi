import React from 'react';
import Profile from "../Profile";
import st from "./PageProfile.module.css";

export const PageProfile = () =>{

  return(
    <div className={st.pageProfile}>
      <div className={st.pageProfile__inner}>
        <Profile />
      </div>
    </div>
  )
};