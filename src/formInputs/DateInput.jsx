
import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from "date-fns"
import { Form } from 'react-bootstrap';

const DateInput = ({selected ,onChange,name,value,startDate,endDate,minDate,error,...rest}) => {
  return (
    <div>
       <DatePicker
                  selected={selected} 
                  type='date'
                  onChange={onChange}   
                    startDate={startDate}
                    endDate={endDate}
                    minDate={minDate}
                  name={name}
                  value={value}
                  placeholder='startDate'
                  isInvalid={error}
                  {...rest}
                  />
                  <Form.Control.Feedback type='inValid' className="d-blog text-danger">
                    {error}
                  </Form.Control.Feedback>
    </div>
  )
}

export default DateInput
