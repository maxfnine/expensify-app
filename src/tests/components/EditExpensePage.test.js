import React from 'react';
import {shallow} from 'enzyme';
import {EditExpensePage} from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense,removeExpense,history,wrapper,expense;

beforeEach(()=>{
  expense={...expenses[0]};
   editExpense=jest.fn();
   removeExpense=jest.fn();
   history={push:jest.fn()};
   wrapper = shallow(<EditExpensePage editExpense={editExpense} removeExpense={removeExpense} history={history} expense={expense}/>);
});

test('Should render EditExpensePage',()=>{
  expect(wrapper).toMatchSnapshot();
});

test('Should handle editExpense',()=>{
  wrapper.find('ExpenseForm').prop('onSubmit')(expense);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editExpense).toHaveBeenLastCalledWith(expense);
});

test('Should handle removeExpense',()=>{
  wrapper.find('button').prop('onClick')({});
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(removeExpense).toHaveBeenLastCalledWith(expense.id);
})
