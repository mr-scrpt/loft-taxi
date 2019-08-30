import React, { PureComponent } from 'react';
import { reduxForm, Field} from 'redux-form';
import {compose} from 'recompose';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



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

const Login = (props) =>{
  const { classes } = props;
  const checkSendForm = event => {
    event.preventDefault();
  };

  const checkPressButtonForm = event =>{
    if (event.key === 'Enter') {
      console.log('ee');
    }
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
          {...input}
        />

        {touched && error && <p style={{color: 'red'}}>{error}</p>}
      </>
    );
  };

  return(
    <Paper className={classes.root}>
      <Typography className={classes.paragraph} component="p">
        Войти
      </Typography>
      <form onSubmit={checkSendForm} onKeyPress={checkPressButtonForm}>
        <Field
          component={customField}
          placeholder='Логин *'
          type='text'
          id='first-name'
          name='firstName'
          className='formField'
        />
        <Field
          component={customField}
          placeholder='Пароль *'
          type='text'
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
  withStyles(styles),
  reduxForm({form: 'Login'})
)(Login);

//export default withStyles(styles)(reduxForm({form: 'Login'})(Login));
