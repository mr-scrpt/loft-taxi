import React, { Component } from 'react';
import Paper from "@material-ui/core/Paper";
import cx from "classnames";
import Typography from "@material-ui/core/Typography";
import st from "./ModalAddress.module.css";
import {Field,reduxForm} from "redux-form";
import Button from "@material-ui/core/Button";
import {compose} from "recompose";
import {withStyles} from "@material-ui/core";
import SelectField from '../SelectField';
import TextField from "@material-ui/core/TextField";

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
const customField = ({ input, type, placeholder, id, className, meta: { touched, error },...rest}) => {
  return (
    <>
      <TextField
        label={placeholder}
        defaultValue=""
        className={className}
        margin="normal"
        id={id}
        type={type}
        {...input}
      />

      {touched && error && <p style={{color: 'red'}}>{error}</p>}
    </>
  );
};
const ModalAddress = ( props )=>{
  const testOptions = [
    {name: '', value: ''},
    {name: 'Адрес 1', value: 'address1'},
    {name: 'Адрес 2', value: 'address2'},
    {name: 'Адрес 3', value: 'address3'},
  ];
  const { classes } = props;
    return(
      <Paper className={cx(classes.root, st.modal)}>
        <Typography className={classes.paragraph} component="p">
          Вызов такси
        </Typography>
        <form className={cx(st.modal__form)}>


          <Field
            name='addressFrom'
            component={SelectField}
            options={testOptions}
            label='Выберите адрес отправления'
          />
          <Field
            name='addressTo'
            component={SelectField}
            options={testOptions}
            label='Выберите адрес прибытия'
          />


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