import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
    // Multiple useState variation VARIATION 1
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    // Using one useState for several inputs VARIATION 2
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: "",
    //     enteredAmount: "",
    //     enteredDate: "",
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value); //VARIATION 1
        // setUserInput({
        //     ...userInput, // not to dump the others, then ovverride with enteredTitle VARIATION 2 (NOT BEST PRACTISE)
        // enteredTitle: event.target.value,
        // });
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value }; //BEST PRACTISE IF YOUR STATE UPDATE DEPENDS ON A PREVIOUS STATE!!
        // });
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput, // VARIATION 2 not to dump the others, then ovverride with enteredAmount
        //     enteredAmount: event.target.value,
        // });
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput, // VARIATION 2 not to dump the others, then ovverride with enteredDate
        //     enteredDate: event.target.value,
        // });
    };

    // to prevent browser default behavior to automatically submit form data
    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };

        console.log(expensedata);
        // TWO WAY BINDING
        sertEnteredTitle(""); // sets the input back to empty string when form submits
        setEnteredAmount("");
        setEnteredDate("");
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type="text"
                        value={enteredTitle}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={enteredAmount}
                        onChange={amountChangeHandler}
                    />
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input
                            type="date"
                            min="2019-01-01"
                            max="2022-12-31"
                            value={enteredDate}
                            onChange={dateChangeHandler}
                        />
                    </div>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
