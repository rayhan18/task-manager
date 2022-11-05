import { Form } from "react-bootstrap";


const TextInput =({ label,type,name,placeholder,onChange,error ,value ,...rest}) =>{
    return(
        <>
             <Form.Group>
              <Form.Label htmlFor={name}>{label}</Form.Label>
              <Form.Control
               type={type}
               name={name}
               value={value}
               placeholder={placeholder}
               onChange={onChange}
               isInvalid={error}
               {...rest}
              />
              <Form.Control.Feedback type='inValid' className="d-blog text-danger">
                {error}
              </Form.Control.Feedback>
              </Form.Group>
             
             
        </>
    )
}
export default TextInput;