import React, { PureComponent } from 'react';
import { reduxForm, Field, isValid} from 'redux-form';
import {compose} from 'recompose';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {connect} from "react-redux";
import cx from 'classnames';
import st from './Login.module.css';



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

const myValidator = values =>{
  const errors = {};

  if(!values.login){
    errors.login = 'Поле логина пустое'
  }
  if(values.login && values.login !== 'test@test.com'){
    errors.login = 'Логин неправильный'
  }
 if(values.login && !values.login.split('').includes('@')){
    errors.login = 'Логин должен быть почтой'
  }

  if(!values.password){
    errors.password = 'Поле пароля пустое'
  }

  if(values.password && values.password !== '123123'){
    errors.password = 'Пароль не верен'
  }

  return errors;
};

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

const Login = (props) =>{

  const { classes, valid, onSends } = props;

  const formSends = (callback)=>{
    if(valid){
      callback()
    }
  };

  const checkSendForm = event => {

    event.preventDefault();
    formSends(onSends);
  };

  const checkPressButtonForm = event =>{
    if (event.key === 'Enter') {
      formSends(onSends);
    }
  };

  return(
    <Paper className={cx(classes.root)}>
      <Typography className={classes.paragraph} component="p">
        Войти
      </Typography>
      <form onSubmit={checkSendForm} onKeyPress={checkPressButtonForm} className={cx('form', st.login__form)}>
        <Field
          component={customField}
          placeholder='Логин *'
          type='text'
          id='first-name'
          name='login'
          className='formField'
        />
        <Field
          component={customField}
          placeholder='Пароль *'
          type='password'
          id='last-name'
          name='password'
          className='formField'
        />
        <Button color="primary" variant="outlined" type='submit'>
          Войти
        </Button>
      </form>
    </Paper>
  )
};

export default compose(
  connect(
    state => ({valid: isValid('Login')(state)})
  ),
  withStyles(styles),
  reduxForm({form: 'Login', validate: myValidator})
)(Login);