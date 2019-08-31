import React from 'react';
import cx from "classnames";
import {Link} from 'react-router-dom';
import st from './Logo.module.css'

export const Logo = (props)=>{
  const {slogan, className: parentClass} = props;
  return(
    <div className={cx('logo', parentClass)}>
      <Link to='/' className={cx(st.logo__link)}>{slogan}</Link>
    </div>
  )
};