export const validatePhoneNum = (phoneNum: string) => {
  const phoneRegex = /^[0-9]*$/;
  if(!phoneRegex.test(phoneNum)) return false;
  if(phoneNum.length !== 11) return false;
  return true;
}