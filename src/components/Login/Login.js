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

class Login extends PureComponent {
  state = {
    inputValue: ''
  };
  handleChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  handleKeyPress = event => {
    const { inputValue } = this.state;
    const { onEnter } = this.props;

    if (event.key === 'Enter') {
      onEnter(inputValue);
    }
  };
  render() {
    const { classes } = this.props;
    const { inputValue } = this.state;

   /* const customField = ({ input, type, placeholder, id, className, meta: { touched, error },...rest}) => {
      return (
        <>
          <input {...input} placeholder={placeholder} type={type} id={id} className={className}/>
          {touched && error && <p style={{ color: "red" }}>{error}</p>}
        </>
      );
    };
*/

    const customField = ({ input, type, placeholder, id, className, meta: { touched, error },...rest}) => {
      return (
        <>
        <TextField
          id="standard-uncontrolled"
          label="Имя пользователя *"
          defaultValue=""
          className={className}
          margin="normal"
        />
        <TextField
          id="standard-uncontrolled"
          label="Пароль *"
          defaultValue=""
          className={className}
          margin="normal"
        />
        <Button color="primary"variant="outlined">
          Войти
        </Button>
        </>
      );
    };


    return (
      <Paper className={classes.root}>
        <Typography className={classes.paragraph} component="p">
         Войти
        </Typography>
        <Field
          component={customField}
          placeholder='Логин'
          type='text'
          name='firstName'
          className='formField'
        />
        {/*<TextField
          value={inputValue}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
          className={classes.input}
          label="Nasa API Key"
          margin="dense"
        />*/}
      </Paper>
    );
  }
}

export default compose(
  withStyles(styles),
  reduxForm({form: 'Login'})
)(Login);

//export default withStyles(styles)(reduxForm({form: 'Login'})(Login));
