import { useState } from "react";
import {  Container, Form ,Row ,Col, Button} from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid';
const defaultIssue={
    title:"",
    subTitle:"",
    assignedTo:"",
    startDate:"",
    endDate:"",
    priority:'low',
    status:'new',
    completedPercentage:0
}
const AddIssue =({addIssue})=>{

const [issue ,setIssue] =useState(defaultIssue)
const [errors ,setErrors] =useState({
    title:"",
    subTitle:"",
    assignedTo:"",
    startDate:"",
    endDate:"",
})
  const  handelChange=(evt)=>{
    setIssue ({
        ...issue,
        [evt.target.name] : evt.target.value
       })
       setErrors({
        ...errors,
        [evt.target.name] :''
       })
    }
    const handelSubmit=(evt)=>{
    const {title ,subTitle  ,assignedTo,startDate,endDate } = issue
        evt.preventDefault()
        //check error
        if(title === ""){
            setErrors((prevError)=>({
                ...prevError,
                title:" title is required"
            }))
        }

        if(assignedTo === ""){
            setErrors((prevErr)=>({
                ...prevErr,
                assignedTo:" assignedTo is required"
            }))
        }

        if(subTitle === ""){
            setErrors((prevErr)=>({
                ...prevErr,
                subTitle:" subtitle is required"
            }))
        }
        
        if(startDate === ""){
            setErrors((prevErr)=>({
                ...prevErr,
                startDate:" startDate is required"
            }))
        }
        if(endDate === ""){
            setErrors((prevErr)=>({
                ...prevErr,
                endDate:" endDate is required"
            }))
        }
    }
    //return every element true otherwise false
    const isValid = Object.values(issue).every(elm => elm)

    if(isValid){
        // is true then form submitted
        addIssue({
            id: uuidv4(),
            ...issue
        })
        //console.log(issue)
        //form cleared
        setIssue(defaultIssue)
    }
    const {title ,subTitle  ,startDate,endDate ,priority,status,completedPercentage ,assignedTo } = issue
    const {title:errorTitle ,subTitle:errorSubTitle ,
        assignedTo:errorAssignTo,
        startDate:errorStartDate ,
        endDate:errorEndDate
    } = errors 
    return(
        <>
        <Container>
            <Row>
                <Col sm={12} md={2} lg={3}>

                </Col>
                <Col sm={12} md={6} lg={6}>
                <h1> Add issue</h1>
            <Form onSubmit={handelSubmit}>
                <Form.Group  className="mb-3">
                    <Form.Label>Title </Form.Label>
                    <Form.Control 
                     type='text'
                     id="title"
                     name="title"
                     onChange={handelChange}
                     value={title}
                     placeholder ='enter your task name'
                     isInvalid = {errorTitle}
                     />
                    <Form.Control.Feedback type="isInvalid" className="d-block text-danger">
                        {errorTitle}
                    </Form.Control.Feedback>
                </Form.Group>


                <Form.Group  className="mb-3">
                    <Form.Label>assignedTo </Form.Label>
                    <Form.Control 
                     type='text'
                     id="assignedTo"
                     name="assignedTo"
                     onChange={handelChange}
                     value={assignedTo}
                     placeholder ='enter your task name'
                     isInvalid = {errorAssignTo}
                     />
                    <Form.Control.Feedback type="isInvalid" className="d-block text-danger">
                        {errorAssignTo}
                    </Form.Control.Feedback>
                </Form.Group>



                <Form.Group  className="mb-3">
                    <Form.Label>Message </Form.Label>
                    <Form.Control as="textarea" 
                  
                     name="subTitle"
                     onChange={handelChange}
                     value={subTitle}
                     id='subTitle'
                     placeholder ='enter your task Details'
                     isInvalid = {errorSubTitle}
                     />
                   <Form.Control.Feedback type="isInvalid" className="d-block text-danger">
                        {errorSubTitle}
                    </Form.Control.Feedback>
                </Form.Group>

               <Row className="">
                <Col md={6}>
                <Form.Group>
                    <Form.Label htmlFor="startDate">start date </Form.Label>
                    <Form.Control
                    type="date"
                    onChange={handelChange}
                    value={startDate}
                    name="startDate"
                    placeholder='enter start Date'
                    isInvalid={errorStartDate}
                 
                    />
                    <Form.Control.Feedback type="isInvalid" className="d-block text-danger">
                        {errorStartDate}
                    </Form.Control.Feedback>
                </Form.Group>
                </Col>
                <Col>
                <Form.Group>
                    <Form.Label htmlFor="startDate">End date </Form.Label>
                    <Form.Control
                    type="date"
                    onChange={handelChange}
                    value={endDate}
                    name="endDate"
                    placeholder='enter end Date'
                    isInvalid={errorEndDate}
                    
                    />
                    <Form.Control.Feedback type="isInvalid" className="d-block text-danger">
                        {errorEndDate}
                    </Form.Control.Feedback>
                </Form.Group> 
                </Col>
               
              
               </Row>
               <Row >
               <Form.Label htmlFor="priority">priority</Form.Label>
                <Form.Group className="d-flex mt-2">
               

              <Col>
              <Form.Check 
                    inline
                    type="radio"
                    onChange={handelChange}
                    value='high'
                    label='High'
                    name="priority" 
                    checked={priority === 'high'}
                    ></Form.Check>
              </Col>
               
               <Col>
               <Form.Check inline
                    type="radio"
                    onChange={handelChange}
                    value='medium'
                    name="priority"
                    label='Medium'
                    checked={priority === 'medium'}
                    ></Form.Check>
               </Col>
                   
                    <Col>
                    <Form.Check inline
                    type="radio"
                    onChange={handelChange}
                    value='low'
                    name="priority"
                    label='Low'
                    checked={priority === 'low'}
                    ></Form.Check>
                    </Col>   
                       
  
                    </Form.Group>
               </Row>
               <Row>
               <Form.Label htmlFor="priority">Status</Form.Label>
               <Form.Group className="d-flex">
                <Col>
                <Form.Check inline
                    type="radio"
                    onChange={handelChange}
                    value='new'
                    name="status"
                    label='New'
                    checked={status === 'new'}
                    ></Form.Check>
                </Col>
                <Col>
                <Form.Check inline
                    type="radio"
                    onChange={handelChange}
                    value='inprogress'
                    name="status"
                    label='In progress'
                    checked={status === 'inprogress'}
                    ></Form.Check>
                </Col>
                <Col>
                <Form.Check inline
                    type="radio"
                    onChange={handelChange}
                    value='completed'
                    name="status"
                    label='Completed'
                    checked={status === 'completed'}
                    ></Form.Check>
                </Col>
                </Form.Group>
               </Row>
               <Row>
                <Col >
                <Form.Label >Range</Form.Label>
                <Form.Range 
                onChange={handelChange}
                name="completedPercentage"
                value={completedPercentage}
                />
                </Col>
                <Col >
                {completedPercentage}
                </Col>
               </Row>
                <Button  className="mt-2" size='md' variant='primary' type="submit"> Submit</Button>
            </Form>
                </Col>
                <Col sm={12} md={2} lg={3}>
                
                </Col>
            </Row>
        </Container>
            
        </>
    )
}
export default AddIssue;