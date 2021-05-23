export const isEmpty = (value) => {
  return value.trim() === '';
}
export const isEmail = (value) => {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(value);
}

export const validateURL = (textval) => {
  var urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
  return urlregex.test(textval);
}


/**
   * Regular Expression Method for TextInput Empty
   */
export const textInputCheck = (txtInput) => {
  // var regex = /^[a-zA-Z ]+$/;
  // console.log("TXTInput-->" + txtInput);

  if (txtInput !== null && txtInput.trim().length > 0) {
    return true;
  }
  return false;
}

/**
 * Regular Expression Method for TextInput Special Character
 */
export const specialCharacterCheck = (txtInput) => {
  const regex = /^[a-zA-Z ]+$/;
  // console.log("TXTInput-->" + txtInput);

  if (regex.test(txtInput)) {
    return true;
  }
  // Alert.alert(globals.appName, emptyMessage);
  return false;
}

/**
 * Regular Expression Method for TextInput allSpecialCharacter
 */
export const allSpecialCharacter = (txtInput) => {
  const regex = /[`~,.<>;':"\/\[\]\|{}()=_+-]/;

  if (!regex.test(txtInput)) {
    return true;
  }
  // Alert.alert(globals.appName, emptyMessage);
  return false;
}

/**
 * Regular Expression Method for Date compare
 */
export const dateCheck = (date1, date2, message) => {
  if (date1 > date2) {
    Alert.alert(globals.appName, message);
    return false;
  }
  return true;
}

/**
 * Regular Expression Method for valid Month
 */
export const validMonth = (month) =>{
  // const regex ='/^\d{2}$/';
  if (month > 12 || month <= 0) {
    return false;
    // Alert.alert(globals.appName, I18n.t('AUTH_ALERT_VALID_MONTH'));
  }
  return true;
}
export const isValidPassword = (password) => {
  // const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-(){'":,.}]).{7,}$/;
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,15}$/;
  if (!regex.test(password)) {
    // Alert.alert(globals.appName, message)
    return false;
  }
  return true;
}


/**
 * Regular Expression Method for is Valid Register Mobile
 */
export const isValidRegisterMobile = (mobileNum) => {
  if (mobileNum !== 10) {
    return false;
  }
  return true;
}

export const numbercheck =(num)=>{
  const reg = /^\d+$/;
  if (!reg.test(num)) {
    // Alert.alert(globals.appName, message)
    return true;
  }
  return false;
}

export const onlycharandnum = (char)=>{
  const regex =/^([a-zA-Z0-9 _-]+)$/;
  if (!regex.test(char)) {
    // Alert.alert(globals.appName, message)
    return true;
  }
  return false;
}


export const checkfirstWhiteSpace =(char)=>{
  let regex = /^[^\s]+(\s+[^\s]+)*$/;
  if (!regex.test(char)) {
    // Alert.alert(globals.appName, message)
    return true;
  }
  return false;
}

export const onlycharandnum = value => {
  let regex =/^[^!-\\/:-@\\[-`{-~]+$/;
  return regex.test(value);
 };


