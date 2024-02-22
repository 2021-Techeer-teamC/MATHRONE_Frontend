export const validatePhoneNum = (phoneNum: string) => {
  const phoneRegex = /^[0-9]*$/;
  if(!phoneRegex.test(phoneNum)) return false;
  if(phoneNum.length !== 11) return false;
  return true;
}

export const validateNull = (value: string | number | null | undefined) => {
  return value || '정보가 없습니다'
}