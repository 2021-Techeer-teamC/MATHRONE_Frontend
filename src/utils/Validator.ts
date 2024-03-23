export const validatePhoneNum = (phoneNum: string) => {
  const phoneRegex = /^[0-9]*$/;
  if(!phoneRegex.test(phoneNum)) return false;
  if(phoneNum.length !== 11) return false;
  return true;
}

export const validateNull = (value: string | number | null | undefined) => {
  return value || '정보가 없습니다'
}

export const validateEmail = (value: string) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  if(!emailRegex.test(value) || !value) {
		return false;
	}
  return true;
}