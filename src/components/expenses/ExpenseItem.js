import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate";
import Card from "../ui/Card";


function ExpenseItem(props) {
  const item = props;
  return (
    <Card className="expense-item">
      <ExpenseDate date={item.date}></ExpenseDate>
      <h2 className="expense-item__description">{item.title}</h2>
      <p className="expense-item__price">{item.amount}</p>
    </Card>
  );
}

export default ExpenseItem;
