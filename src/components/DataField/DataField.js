import ruLocale from "date-fns/locale/ru";
import React, {createRef} from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  DatePicker
} from '@material-ui/pickers';
import {compose} from "recompose";
import {withStyles, RootRef} from "@material-ui/core";
import cx from "classnames";

const styles = theme => ({
  textField:{
    width: '100%'
  }
});

const DataField = ({classes, name, input, type, placeholder, id, className, meta: { touched, error },...rest}) => {

  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  function handleDateChange(date) {
    setSelectedDate(date);
  }

  const localeMap = {
    ru: ruLocale
  };


  return (

      <MuiPickersUtilsProvider utils={DateFnsUtils} name={name} locale={localeMap['ru']}>

        <Grid container justify="space-around" >
          <DatePicker
            name={name}
            className={cx(classes.textField)}
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            label={placeholder}
            id={id}
            type={type}
            {...input}
            value={selectedDate}
            onChange={handleDateChange}
            locale="ru"
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </Grid>
        {touched && error && <p style={{color: 'red'}}>{error}</p>}
      </MuiPickersUtilsProvider>

  );
};

export default compose(
  withStyles(styles)
)(DataField);