import {addExpense,editExpense,removeExpense} from '../../actions/expenses';

test('should setupe remove expense actgion object',()=>{
  const action= removeExpense({id:'123abc'});
  expect(action).toEqual({
    type:'REMOVE_EXPENSE',
    id:'123abc'
  })
});

test('Should test edit expense action',()=>{
  const action=editExpense('123abc',{note:'note'});
  expect(action).toEqual({
    type:'EDIT_EXPENSE',
    id:'123abc',
    updates:{
      note:'note'
    }
  });
});


test('Should ttest add expense action with provided values',()=>{
  const expenseData={
    description:'Rent',
    amount:109500,
    createdAt:1000,
    note:'This was last month rent'
  }
  const action=addExpense(expenseData);
  expect(action).toEqual({
    type:'ADD_EXPENSE',
    expense:{...expenseData,
    id:expect.any(String)}
  });

});

test('Should ttest add expense action with default values',()=>{
  const action= addExpense();
  const defaultValues=  {
      description:'',
      note:'',
      amount:0,
      createdAt:0
    };
  expect(action).toEqual({
    type:'ADD_EXPENSE',
    expense:{...defaultValues,
    id:expect.any(String)}
  });
});
