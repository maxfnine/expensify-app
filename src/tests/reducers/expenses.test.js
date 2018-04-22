import expenses from '../fixtures/expenses'
import expensesReducer from '../../reducers/expenses';


test('should set default state',()=>{
  const state=expensesReducer(undefined,{type:'@@INIT'});
  expect(state).toEqual([]);
});

test('Should remove expense by id',()=>{
  const action={type:'REMOVE_EXPENSE',id:expenses[1].id};
  const state=expensesReducer(expenses,action);
  expect(state).toEqual([expenses[0],expenses[2]]);
});

test('Should not remove expense if id not found',()=>{
  const action={type:'REMOVE_EXPENSE',id:'-1'};
  const state=expensesReducer(expenses,action);
  expect(state).toEqual(expenses);
});

test('Should add an expense',()=>{
  const expense = {...expenses[0],description:'Test expense',amount:10000,id:'4'}
  const action={type:'ADD_EXPENSE',expense};
  const state=expensesReducer(expenses,action);
  expect(state).toEqual([...expenses,expense]);
});

test('Should edit an expense',()=>{
  const expenseToupdate={...expenses[0],description:'Updated Description',amount:999};
  const action={type:'EDIT_EXPENSE',id:expenseToupdate.id,updates:expenseToupdate};
  const state=expensesReducer(expenses,action);
  expect(state[0]).toEqual(expenseToupdate);

});

test('Should not edit an expense if id not found',()=>{
  const expenseToupdate={...expenses[0],description:'Updated Description',amount:999};
  const action={type:'EDIT_EXPENSE',id:'-1',updates:expenseToupdate};
  const state=expensesReducer(expenses,action);
  expect(state[0]).toEqual(expenses[0]);

});
