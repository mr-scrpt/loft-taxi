


export const validator = values =>{
  const errors = {};

  if(!values.fullName){
    errors.fullName = 'Поле с именем пустое';
  }

  if (!values.cartData){
    errors.cartData = 'Введите срок действия карты';
  }

  if (!values.cartNumber){
    errors.cartNumber = 'Введите номер карты';
  }

  if (!values.cvv){
    errors.cvv = 'Введите cvv код карты';
  }
  if (values.cvv && values.cvv.split('').length !== 3){
    errors.cvv = 'CVV код карты содержит 3 цифры';
  }

  return errors;
};