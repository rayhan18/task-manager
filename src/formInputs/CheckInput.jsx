import React from 'react'
import { Form,Row,Col } from 'react-bootstrap'



const CheckInput = ({name,onChange,value,label,valueToChecked}) => {
  return (
    <div>
        
             <Form.Check
               type="radio"
               onChange={onChange}
               name={name}
               value={value}
               label={label}
               checked={valueToChecked === value}
               />
          
    </div>
  )
}

export default CheckInput
