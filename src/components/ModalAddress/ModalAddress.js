import React, { Component } from 'react';
import Paper from "@material-ui/core/Paper";
import cx from "classnames";
import Typography from "@material-ui/core/Typography";
import st from "./ModalAddress.module.css";
import {reduxForm} from "redux-form";
import Button from "@material-ui/core/Button";
import {compose} from "recompose";
import {withStyles} from "@material-ui/core";

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: 250,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  paragraph: {
    width: '100%',
    textAlign: 'center',
    fontSize: '28px'
  },
  input: {
    width: '100%'
  }
});

const ModalAddress = ( props )=>{

  const { classes } = props;
    return(
      <Paper className={cx(classes.root, st.modal)}>
        <Typography className={classes.paragraph} component="p">
          Вызов такси
        </Typography>
        <form className={cx(st.modal__form)}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-simple" name='addressFrom'>Выберите адрес отправления</InputLabel>
            <Select
              //value={values.age}
              //onChange={handleChange}
              inputProps={{
                name: 'age',
                id: 'age-simple',
              }}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <Button color="primary" variant="outlined" type='submit'>
            Вызвать такси
          </Button>
        </form>
      </Paper>
    )

};

export default compose(
  withStyles(styles),
  reduxForm({form: 'ModalAddress'})
)(ModalAddress);