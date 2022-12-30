import ExpenseDate from "../Expenses/ExpenseDate";
import Card from "../UI/Card";
import './ExpenseItem.css';


const ExpenseItem = (props) => {

	return (

		<Card className="expense-item">
			<ExpenseDate date={props.date}/>
			<div className="expense-item__description">
				<h2 className="expense-item">{props.title}</h2>
				<div className="expense-item__price">€{props.amount}</div>
			</div>
		</Card>

	)
}


// import this to app.js

export default ExpenseItem;
