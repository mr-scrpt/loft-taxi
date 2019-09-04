import React from 'react'
import {Field, reduxForm} from 'redux-form'
import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'

import MenuItem from '@material-ui/core/MenuItem';


const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>
  }
};

const renderSelectField = ({input, label, options, inputName, meta: {touched, error},...custom}) => (
  <FormControl error={touched && error}>
    <InputLabel htmlFor="age-native-simple">{label}</InputLabel>
    <Select
      {...input}
      {...custom}
      inputProps={{
        name: inputName,
        id: 'age-native-simple'
      }}
    >

      {options && options.map(item=>(
        <MenuItem value={item} key={item}>{item}</MenuItem>
      ))}

    </Select>
    {renderFromHelper({touched, error})}
  </FormControl>
);

export default renderSelectField;