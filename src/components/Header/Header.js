import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import st from './Header.module.css';
import cx from 'classnames';
import {NavTop} from '../NavTop';
import {Logo} from '../Logo';

export default class Header extends Component{

  render() {
    return(
      <header className='header'>
        <AppBar position="static" color="default">
          <Toolbar className={cx(st.header__inner)}>
            <Logo slogan="LoftTaxi" className={cx(st.header__logo)}/>
            <NavTop className={cx(st.header__nav)}/>
          </Toolbar>
        </AppBar>
      </header>
    )
  }
}