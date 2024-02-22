export const formatPhoneNumber = (number: string | null | undefined) => {
	if(!number || !number.length) return null;
	return `${number.substring(0, 3)}-${number.substring(3, 7)}-${number.substring(7, number.length)}`;
}