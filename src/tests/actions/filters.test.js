import moment from 'moment';
import {setStartDate,setEndDate,setTextFilter,sortByDate,sortByAmount} from '../../actions/filters';

test('should generate set startDate action object',()=>{
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate:moment(0)
  });
});

test('Should generate setEndDate action object',()=>{
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate:moment(0)
  });
});

test('Should test setTextFilter with provided value',()=>{
  const action=setTextFilter('test');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text:'test'
  })
});

test('Should test setTextFilter with default value',()=>{
  const action=setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text:''
  })
});

test('Should test sortByDate',()=>{
  const action=sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  });
});

test('Should test sortByAmount',()=>{
  const action=sortByAmount();
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  });
});
