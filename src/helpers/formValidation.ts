const doValidation  = (name: string, value: string): boolean => {
  if (name === 'email') {
    return emailValidation(value);
  }
  return textValidation(value);
};

const textValidation = (value: string) => value.length > 1;
const emailValidation = (value: string) => {
  const regexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  return regexp.test(value);
}

export default doValidation;
