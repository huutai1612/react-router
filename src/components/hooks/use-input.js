import { useState } from 'react';

const useInput = (validateInput) => {
	const [enteredValue, setEnterValue] = useState('');
	const [isBlur, setIsBlur] = useState(false);

	const onChangeHandler = (event) => setEnterValue(event.target.value);

	const onBlurHandler = (event) => setIsBlur(true);

	const isValid = validateInput(enteredValue);
	const hasError = !isValid && isBlur;

	return { enteredValue, onChangeHandler, onBlurHandler, isValid, hasError };
};

export default useInput;
