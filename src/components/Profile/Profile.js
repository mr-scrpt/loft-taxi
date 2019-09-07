import React, {useState} from 'react';
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
import {validator} from './validator';
import {profileDataSet, getProfileData} from '../../modules/Profile';
import {Redirect} from 'react-router-dom';
import Cleave from 'cleave.js/react';

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


const customField = ({ input, type,placeholder, formatter, id, className, meta: { touched, error },...rest}) => {
  const { value } = input;
  console.log(value);
  let myValue;
  if( formatter){
    myValue = formatter(value)
  }else {
    myValue = value;
  }
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
        value={myValue}
      />

      {touched && error && <p style={{color: 'red'}}>{error}</p>}
    </>
  );
};

function MaskedTextField(props) {
  const { options, inputRef, ...other } = props;
  return <Cleave {...other} ref={inputRef} options={options} />;
}

const customFieldsCard = ({input: { name, onChange, value, ...restInput }, meta,options,...rest})=>{
return(
  <TextField
    {...rest}
    name={name}
    onChange={onChange}
    value={value}
    error={meta.error && meta.touched}
    helperText={meta && meta.touched ? meta.error : undefined}
    inputProps={{ ...restInput, options, value }}
    InputProps={{
      inputComponent: MaskedTextField
    }}
  />
)};


export const Profile = (props) =>{

  //const [cartNumber, setCartNumber] = useState(0);

  const { classes, valid, profileDataSet, dataStatus } = props;


  const checkSendForm = event => {
    event.preventDefault();
    if(valid){
      profileDataSet(true)
    }
  };


  if (dataStatus){
    return (<Redirect to='/map'/>);
  }


  return(
    <Paper className={cx(classes.root)}>
      <Typography className={classes.paragraph} component="p">
        Профиль
      </Typography>
      <form className={cx('form', st.profile__form)} onSubmit={checkSendForm} >
        <div className={cx(stForm.form__inner)}>
          <div className={cx(stForm.form__col)}>
            <Field
              component={customField}
              placeholder='Имя владельца *'
              type='text'
              id='full-Name'
              name='fullName'
              className={cx('formField', classes.textField)}
            />

            <Field
              component={DataField}
              name='cartData'
              placeholder='Срок действия карты *'
              id='cartData'
              className={cx('formField', classes.textField)}
            />

          </div>
          <div className={cx(stForm.form__col)}>
            <Field
              component={customFieldsCard}
              placeholder='Номер карты *'
              type='text'
              id='cartNumber'
              name='cartNumber'
              className={cx('formField', classes.textField)}
              options={{creditCard: true}}
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
              Сохранить
            </Button>
          </div>
        </div>
      </form>
    </Paper>

  )
};
export default compose(
  connect(
    state => ({
      valid: isValid('Profile')(state),
      dataStatus: getProfileData(state)
    }),
    {profileDataSet}
  ),
  reduxForm({form: 'Profile', validate: validator}),
  withStyles(styles)
)(Profile);