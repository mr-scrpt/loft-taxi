import React from 'react';
import cx from "classnames";
import st from "./NavTop.module.css";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import {NavLink} from "react-router-dom";


export const NavTop = (props)=> {
  const {className: parentClass} = props;

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
          <NavLink to={`login`} className={cx(st.navTop__link)}>
            Войти
          </NavLink>
        </Button>

      </ButtonGroup>

    </div>
  )
};