import React from 'react';
import cx from "classnames";


export const Logo = (props)=>{
  const {slogan, className: parentClass} = props;
  return(
    <div className={cx('logo', parentClass)}>
      {slogan}
    </div>
  )
};