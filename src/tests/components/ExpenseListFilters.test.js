import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import {filters,altFilters} from '../fixtures/filters';

let setTextFilter,sortByDate,sortByAmount,setStartDate,setEndDate,wrapper;
beforeEach(()=>{
  setTextFilter=jest.fn();
  sortByDate=jest.fn();
  sortByAmount=jest.fn();
  setStartDate=jest.fn();
  setEndDate=jest.fn();
  wrapper=shallow(<ExpenseListFilters filters={filters}
    setTextFilter={setTextFilter}
    sortByDate={sortByDate}
    sortByAmount={sortByAmount}
    setStartDate={setStartDate}
    setEndDate={setEndDate}/>);
});

test('Should render ExpenseListFilters corectly',()=>{
  expect(wrapper).toMatchSnapshot();
});

test('Should render ExpenseListFilters with alt data correctly',()=>{
  wrapper.setProps({filters:altFilters});
  expect(wrapper).toMatchSnapshot();
});

test('should handle text change',()=>{
  const value='Test Text';
  wrapper.find('input').simulate('change',{
    target:{
      value
    }
  });
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should sort By Date',()=>{
  const value='date';
  wrapper.find('select').simulate('change',{
    target:{
      value
    }
  });
  expect(sortByDate).toHaveBeenCalledTimes(1);
});

test('should sort By Amount',()=>{
  const value='amount';
  wrapper.find('select').simulate('change',{
    target:{
      value
    }
  });
  expect(sortByAmount).toHaveBeenCalledTimes(1);
});

test('should sort By Amount',()=>{
  const value='amount';
  wrapper.find('select').simulate('change',{
    target:{
      value
    }
  });
  expect(sortByAmount).toHaveBeenCalledTimes(1);
});

test('should handle date changes',()=>{
  const value={startDate:altFilters.startDate,endDate:altFilters.endDate};
  wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')(value);
  expect(setStartDate).toHaveBeenLastCalledWith(altFilters.startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(altFilters.endDate);
});

test('should handle date focus changes',()=>{
  const calendarFocused=true;
  wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocused);
  expect(wrapper.state('calendarFocused')).toEqual(calendarFocused);

});
