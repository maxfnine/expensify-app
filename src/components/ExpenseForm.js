import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/initialize';


export default class ExpenseForm extends React.Component
{
  constructor(props)
  {
    super();
    // const{description,note,amount,createdAt}=props.expense;
    // console.log(description,note,amount,createdAt);
    this.state = {
      description: props.expense?props.expense.description:'',
      note: props.expense?props.expense.note:'',
      amount: props.expense?(props.expense.amount/100):'',
      createdAt: props.expense?moment(props.expense.createdAt):moment(),
      calendarFocused: false,
      error:''
    };
  }


  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({description}));
  }

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({note}));
  }

  onAmountchange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({amount}));
    }
  }
onDateChange = (createdAt) => {
  if (createdAt) {
    this.setState(() => ({createdAt}));
  }

};

  onFocusChange = ({focused}) => {
    this.setState(() => ({
      calendarFocused:focused
    }));
  };

  onSubmit=(e)=>{
    e.preventDefault();
    if(!this.state.description || !this.state.amount)
    {
      this.setState(()=>({error:'Please fill description and amount first !'}));
    }
    else
    {
      this.setState(()=>({error:''}));
      this.props.onSubmit({
        description:this.state.description,
        amount:parseFloat(this.state.amount,10)*100,
        createdAt:this.state.createdAt.valueOf(),
        note:this.state.note});
    }
  }

  render() {
    return (<div>
      {this.state.error && <p>{this.state.error}</p>}
      <form onSubmit={this.onSubmit}>
        <input type="text" placeholder="Description" value={this.state.description} onChange={this.onDescriptionChange} autoFocus="autoFocus"/>
        <input value={this.state.amount} type="text" placeholder="Amount" onChange={this.onAmountchange}/>
        <SingleDatePicker
        date={this.state.createdAt}
        onDateChange={this.onDateChange}
         focused={this.state.calendarFocused}
         onFocusChange={this.onFocusChange}
         numberOfMonths={1}
         isOutsideRange={(day)=>false}
         />
        <textarea onChange={this.onNoteChange} placeholder="Add a note for your expense{optional}"></textarea>
        <button>Add Expense</button>

      </form>
    </div>);
  }
}
