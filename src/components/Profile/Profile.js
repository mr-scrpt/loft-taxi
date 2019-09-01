import React from 'react';
import cx from "classnames";
import Typography from "@material-ui/core/Typography";
import st from "./Profile.module.css";
import stForm from "../Form/Form.module.css";
import {Field, isValid, reduxForm} from "redux-form";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import {compose} from "recompose";
import {connect} from "react-redux";
import {withStyles} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import DataField from "../DataField";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: 800,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  paragraph: {
    width: '100%',
    textAlign: 'center',
    fontSize: '28px'
  }
  ,textField:{
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

export const Profile = (props) =>{
  const { classes } = props;

  return(
    <Paper className={cx(classes.root)}>
      <Typography className={classes.paragraph} component="p">
        Профиль
      </Typography>
      <form className={cx('form', st.profile__form)}>
        <div className={cx(stForm.form__inner)}>
          <div className={cx(stForm.form__col)}>
            <Field
              component={customField}
              placeholder='Имя владельца *'
              type='text'
              id='fullName'
              name='fullName'
              className={cx('formField', classes.textField)}
            />

            <DataField name='cartData'/>


          </div>
          <div className={cx(stForm.form__col)}>
            <Field
              component={customField}
              placeholder='Номер карты *'
              type='text'
              id='cartNumber'
              name='cartNumber'
              className={cx('formField', classes.textField)}
            />
            <Field
              component={customField}
              placeholder='CVV'
              type='text'
              id='cvv'
              name='cvv'
              className={cx('formField', classes.textField)}
            />
          </div>
          <div className={cx(stForm.form__row)}>
            <Button color="primary" variant="outlined" type='submit' className={cx(stForm.form__button)}>
              Войти
            </Button>
          </div>
        </div>
      </form>
    </Paper>

  )
};
export default compose(
  connect(
    state => ({valid: isValid('Profile')(state)})
  ),
  reduxForm({form: 'Profile'}),
  withStyles(styles)
)(Profile);