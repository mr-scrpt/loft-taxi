import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect(props) {
  console.log(props);
  const { input:{ type, placeholder, id, className, name}, meta: { touched, error },...rest} = props;
  console.log(name);
  const classes = useStyles();
  const [values, setValues] = React.useState({
    [name]: '',
    name: 'hai',
  });

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }

  return(
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor="age-simple">Age</InputLabel>
      <Select
        value={values[name]}

        onChange={handleChange}
        name={name}
        inputProps={{
          name: name,
          id: 'age-simple',
          value: values[name]
        }}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  )

}