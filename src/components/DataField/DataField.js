import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import {compose} from "recompose";
import {withStyles} from "@material-ui/core";
import cx from "classnames";

const styles = theme => ({
  /*root: {
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
  },*/
  textField:{
    width: '100%'
  }
});

const DataField = ({classes, name, input, type, placeholder, id, className, meta: { touched, error },...rest}) => {

  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  function handleDateChange(date) {
    setSelectedDate(date);
  }


  //const { classes, name, input, type, placeholder, id, className, meta: { touched, error },...rest} } = props;

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} name={name}>
      <Grid container justify="space-around" >
        <KeyboardDatePicker
          name={name}
          className={cx(classes.textField)}
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          //label="Date picker inline"
          label={placeholder}
          defaultValue=""
          id={id}
          type={type}
          {...input}
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
};

export default compose(
  withStyles(styles)
)(DataField);