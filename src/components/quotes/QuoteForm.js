import useInput from '../../hooks/use-input';
import { Prompt } from 'react-router-dom';
import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';
import { Fragment, useState } from 'react';

const isNotEmpty = (value) => value.trim() !== '';

const QuoteForm = (props) => {
	const {
		enteredValue: enteredAuthor,
		onChangeHandler: authorChangeHandler,
		onBlurHandler: authorBlurHandler,
		isValid: isAuthorValid,
		hasError: isAuthorError,
	} = useInput(isNotEmpty);

	const {
		enteredValue: enteredText,
		onChangeHandler: textChangeHandler,
		onBlurHandler: textBlurHandler,
		isValid: isTextValid,
		hasError: isTextError,
	} = useInput(isNotEmpty);

	const [isEntering, setIsEntering] = useState(false);

	const formIsValid = isAuthorValid && isTextValid;

	function submitFormHandler(event) {
		event.preventDefault();

		// optional: Could validate here
		if (!formIsValid) {
			return;
		}
		props.onAddQuote({ author: enteredAuthor, text: enteredText });
	}

	const submitClickBtnHandler = () => setIsEntering(false);
	const focusFormHandler = () => setIsEntering(true);

	return (
		<Fragment>
			<Prompt
				when={isEntering}
				message='Do you sure want to leave. All Data will be lost'
			/>
			<Card>
				<form
					onFocus={focusFormHandler}
					className={classes.form}
					onSubmit={submitFormHandler}>
					{props.isLoading && (
						<div className={classes.loading}>
							<LoadingSpinner />
						</div>
					)}

					<div className={classes.control}>
						<label htmlFor='author'>Author</label>
						<input
							className={isAuthorError ? classes.err : ''}
							value={enteredAuthor}
							onBlur={authorBlurHandler}
							onChange={authorChangeHandler}
							type='text'
							id='author'
						/>
						{isAuthorError && (
							<p className={classes.error}>Need valid author</p>
						)}
					</div>
					<div className={classes.control}>
						<label htmlFor='text'>Text</label>
						<textarea
							className={isTextError ? classes.err : ''}
							id='text'
							rows='5'
							value={enteredText}
							onChange={textChangeHandler}
							onBlur={textBlurHandler}></textarea>
						{isTextError && <p className={classes.error}>Need valid Text</p>}
					</div>
					<div className={classes.actions}>
						<button onClick={submitClickBtnHandler} className='btn'>
							Add Quote
						</button>
					</div>
				</form>
			</Card>
		</Fragment>
	);
};

export default QuoteForm;
