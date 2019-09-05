import React, { useEffect } from 'react';
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

import {
  cancelPathRequest,
  fetchAddressRequest,
  fetchCoordsRequest,
  getAddressList,
  getOnMyWay,
  cancelcancelPathRequest
} from '../../modules/Map';
import {connect} from "react-redux";


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
  const { fetchAddressRequest, fetchCoordsRequest } = props;

  useEffect(()=>{
    fetchAddressRequest();
  }, []);

  const getCoords = e =>{
    e.preventDefault();
    const from = e.target.addressFrom.value;
    const to = e.target.addressTo.value;
    fetchCoordsRequest({from, to});

  };

  const { classes, addressList, getOnMyWay, cancelPathRequest } = props;
  console.log(getOnMyWay);
  let content = null;
  if(getOnMyWay === true){
    content = (
      <>
      <p>Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут</p>
      <Button color="primary" variant="outlined" type='submit' onClick={()=> cancelPathRequest()}>
        Отменить заказ
      </Button>
        </>
    )
  }else {
    content = (
      <>
      <form className={cx(st.modal__form)} onSubmit={getCoords}>
      {addressList && addressList.addresses && (
        <>
          <Field
            name='addressFrom'
            inputName='addressFrom'
            component={SelectField}
            options={addressList.addresses}
            label='Выберите адрес отправления'
          />
          <Field
            name='addressTo'
            inputName='addressTo'
            component={SelectField}
            options={addressList.addresses}
            label='Выберите адрес прибытия'
          />
        </>
      )}


    <Button color="primary" variant="outlined" type='submit'>
      Вызвать такси
    </Button>
    </form>
    </>
    )
  }

    return(
      <Paper className={cx(classes.root, st.modal)}>
        <Typography className={classes.paragraph} component="p">
          Вызов такси
        </Typography>
        {content}
      </Paper>
    )

};

export default compose(
  connect(
    state=> ({ addressList: getAddressList(state), getOnMyWay: getOnMyWay(state) }),
    {fetchAddressRequest, fetchCoordsRequest, cancelPathRequest}
  ),
  withStyles(styles),
  reduxForm({form: 'ModalAddress'})
)(ModalAddress);