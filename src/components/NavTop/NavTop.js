import React from 'react';
import cx from "classnames";
import st from "./NavTop.module.css";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import {NavLink} from "react-router-dom";
import {getIsAuthorized, isLogged} from '../../modules/Auth';

import {connect} from "react-redux";

const NavTop = (props)=> {
  const {className: parentClass, isAuthorized, isLogged} = props;
 /* const handdler = () =>{
    console.log('test here');
  };*/
  const LoginButton = ({myClass, isAuthorized, isLogged}) => (
    isAuthorized ?
      (
        <div onClick={()=>isLogged(false)}>
          <NavLink to={`login`} className={cx(st.navTop__link)}>
            Выйти
          </NavLink>
        </div>
      )
      :
      (
        <NavLink to={`login`} className={cx(st.navTop__link)}>
          Войти
        </NavLink>
      )


  );
  return(
    <div className={cx('navTop', parentClass )}>
      <ButtonGroup color="primary" aria-label="outlined primary button group">

        <Button variant="contained">
          <NavLink to={`map`} className={cx(st.navTop__link)}>
            Карта
          </NavLink>
        </Button>

        <Button variant="contained">
          <NavLink to={`profile`} className={cx(st.navTop__link)}>
            Профиль
          </NavLink>
        </Button>

        <Button variant="contained">
          <LoginButton isAuthorized={isAuthorized} isLogged={isLogged}/>
        </Button>

       {/*<LoginButton myClass={cx(st.navTop__link)}/>*/}

      </ButtonGroup>

    </div>
  )
};
export default connect(
  state => ({isAuthorized: getIsAuthorized(state)}),
  {isLogged}
)(NavTop)