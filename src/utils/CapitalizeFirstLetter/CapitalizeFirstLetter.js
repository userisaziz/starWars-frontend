const CapitalizeFirstLetter = (string) => {
	return string
		?.toLowerCase()
		?.split('_')
		?.join(' ')
		?.replace(/\b\w/g, (char) => char.toUpperCase());
};
export default CapitalizeFirstLetter;
