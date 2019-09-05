


export const validator = values =>{
  const errors = {};

  if(!values.fullName){
    errors.login = 'Поле с именем пустое';
  }

  return errors;
};