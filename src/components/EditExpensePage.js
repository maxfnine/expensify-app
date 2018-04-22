import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense, removeExpense} from  '../actions/expenses';

export class EditExpensePage extends React.Component
{
  constructor(props){
    super(props);
  }

  onSubmit=(expense)=>{
    this.props.editExpense(expense);
    this.props.history.push('/');
  }

  onClick=(e)=>{
    const id = this.props.expense.id;
    this.props.removeExpense(id);
    this.props.history.push('/');
  }

  render()
  {
    return (
      <div>
        <ExpenseForm
        expense={this.props.expense}
        onSubmit={this.onSubmit}/>
        <button onClick={this.onClick}>Remove</button>
      </div>
    );
  }
}

const mapStateToProps=(state,props)=>
{
  return {
    expense : state.expenses.find((expense)=>expense.id===props.match.params.id)
  };
};

const mapDispatchToProps=(dispatch)=>({
  editExpense:(expense)=>dispatch(editExpense(expense.id,expense)),
  removeExpense:(id)=>dispatch(removeExpense({id}))
});


export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage);
