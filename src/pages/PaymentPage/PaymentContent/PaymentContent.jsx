import "./PaymentContent.scss"
import Image from "../../../ui/Image/Image"
import Button from "../../../ui/Button/Button"
import { Link } from "react-router-dom"
import MultipleLink from "../../../components/MultipleLink/MultipleLink"
import TextField from '@mui/material/TextField';
import InputMask from 'react-input-mask';
import { useState, useEffect } from 'react';

const PaymentContent = ({ texts }) => {
	const [phoneNumber, setPhoneNumber] = useState('');
	const [amount, setAmount] = useState('');
	const [amountError, setAmountError] = useState('');
	const [pib, setPib] = useState("")
	const [dogovor, setDogovor] = useState("")
	const [validPhoneNumber, setValidPhoneNumber] = useState("")

	const { title, list, paynow_btn, more_price, payment_service, payment_form } = texts.paymentPage;

	const validateAmount = (value) => {
		const numberValue = parseFloat(value);
		if (isNaN(numberValue)) {
			setAmountError(payment_form.price_error_start);
			return false;
		}
		if (numberValue < 1.00 || numberValue > 29999.99) {
			setAmountError(payment_form.price_error);
			return false;
		}
		setAmountError('');
		return true;
	};

	const handleAmountChange = (event) => {
		const value = event.target.value;
		if (/^\d*\.?\d{0,2}$/.test(value) || value === '') {
			setAmount(value);
			validateAmount(value);
		}
	};

	function formatPhoneNumber(input) {
		if (!input) return '';
		const cleaned = input.replace(/\D/g, '');
		if (cleaned.startsWith('380')) {
			return cleaned;
		}
		return '';
	}

	const sendForm = (event) => {
		event.preventDefault()

		window.open(`https://easypay.ua/ua/partners/vasha_chest/VASHA-CHEST?name=${pib}&Agreement=${dogovor}&Phone=${validPhoneNumber}%3D&amount=${amount}`, "_blank")
	}

	useEffect(() => {
		setValidPhoneNumber(formatPhoneNumber(phoneNumber))
	}, [phoneNumber])

	return (
		<section className="payment">
			<div className="container">
				<h1>{title}</h1>
				<div className="payment__wrapper">
					{list && list.map(el => {
						return (
							<div className="payment__card" key={el.id}>
								<div className="payment__card-number">{el.id}</div>
								<p>{el.text}</p>
								<Image src={el.image} alt={el.text} height={"180px"} width={"auto"} />
							</div>
						)
					})}
				</div>

				<form className="payment__form" onSubmit={sendForm}>
					<h2>{payment_form.title}</h2>
					<TextField required id="outlined-basic" onChange={(e) => setPib(e.target.value)} value={pib} label={payment_form.label_1} variant="outlined" />
					<TextField required id="outlined-basic" onChange={(e) => setDogovor(e.target.value)} value={dogovor} label={payment_form.label_2} variant="outlined" />
					<InputMask
						mask="+380 (99) 999-99-99"
						required
						value={phoneNumber}
						onChange={(e) => setPhoneNumber(e.target.value)}
					>
						{(inputProps) => (
							<TextField
								{...inputProps}
								id="outlined-basic"
								label={payment_form.label_3}
								variant="outlined"
							/>
						)}
					</InputMask>
					<TextField
						id="outlined-basic"
						label={payment_form.label_4}
						variant="outlined"
						value={amount}
						onChange={handleAmountChange}
						error={!!amountError}
						helperText={amountError}
						required
						inputProps={{
							inputMode: 'decimal',
							pattern: '[0-9]*\\.?[0-9]{0,2}'
						}}
					/>
					<Button text={paynow_btn} />
				</form>

				<Link className="payment__more-price" to={"/pricing"}>{more_price}</Link>
				<MultipleLink texts={texts} />
				<p className="payment-easy" dangerouslySetInnerHTML={{ __html: payment_service }} />
			</div>
		</section>
	)
}

export default PaymentContent