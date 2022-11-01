

import { Container, Row,Col, Form ,Button } from "react-bootstrap"
import {useEffect, useState} from "react"
import {v4 as uuid} from 'uuid'
import {useNavigate ,useParams} from 'react-router-dom'
import { toast } from "react-toastify"
const defaultIssue={
  title:'',
  subTitle:'',
  assignedTo:'',
  startDate:'',
  endDate:'',
  priority:'low',
  status:'new',
  completedPercentage:1
}

const EditIssue =({addIssue ,issues, upDateIssue})=>{
  const navigate = useNavigate()
  const {id} = useParams()
const [issue, setIssue]= useState(defaultIssue)
const [errorIssue, setErrorIssue]= useState({
  title:'',
  subTitle:'',
  assignedTo:'',
  startDate:'',
  endDate:''
})

//edit and update issue
const EditIssue=()=>{
 const findSingleIssue = issues.find(issue => issue.id === id)
 if(!findSingleIssue){
  toast.warning('Its not correct id ')
  return navigate('/issue')
 }
 setIssue(findSingleIssue)
}

useEffect(()=>{
  EditIssue()
},[id])
//catch value
  const handelChange =(evn)=>{
    setIssue({
      ...issue,
      [evn.target.name]:evn.target.value
    })
    setErrorIssue({
      ...errorIssue,
      [evn.target.name]:''
    })
  }

  //form submit
  const handelSubmit=(evn)=>{
    evn.preventDefault()
    const {title ,subTitle ,assignedTo, startDate}= issue

//check error
    if(title === ''){
      setErrorIssue((prevErrors)=>({
          ...prevErrors,
          title:'Title is requires'
      }))
    }

    if(subTitle === ''){
      setErrorIssue((prevErrors)=>({
          ...prevErrors,
          subTitle:'massage is requires'
      }))
    }
    if(assignedTo === ''){
      setErrorIssue((prevErrors)=>({
          ...prevErrors,
          assignedTo:'assigned To is requires'
      }))
    }
    if(startDate === ''){
      setErrorIssue((prevErrors)=>({
          ...prevErrors,
          startDate:'start Date  is requires'
      }))
    }
    if(endDate === ''){
      setErrorIssue((prevErrors)=>({
          ...prevErrors,
          endDate:'end Date  is requires'
      }))
    }
    //check all filed is true
  const isValidData =Object.values(issue).find(elem=>elem)
  if(isValidData){
   // value is true then submit form
    //console.log(issue)
  //  addIssue({
  //   id: uuid(),
  //   ...issue
  // })
  upDateIssue({
    id: uuid(),
    ...issue
  })
  toast.success('issue updated successfully')
  navigate('/issue')
   //etIssue(defaultIssue)
  }
  }
  
  const {title ,subTitle ,assignedTo , startDate,endDate ,priority,status ,completedPercentage}= issue
  const {
    title:errorTitle ,
    subTitle:errorSubTitle,
    assignedTo:errorassignedTo,
    startDate:errorStartDate,
    endDate:errorEndDate
    }= errorIssue
  return(
    <>
    
      <Container className="">

        <Row>
        <h1>Edit issues</h1>
          <Col>
            <Form onSubmit={handelSubmit}>
              <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
               type='text'
               name='title'
               value={title}
               placeholder='title'
               onChange={handelChange}
               isInvalid={errorTitle}
              />
              <Form.Control.Feedback type='inValid' className="d-blog text-danger">
                {errorTitle}
              </Form.Control.Feedback>
              </Form.Group>
             
              <Form.Group>
              <Form.Label>assigned to</Form.Label>
              <Form.Control
               type='text'
               name='assignedTo'
               value={assignedTo}
               placeholder='assigned To'
               onChange={handelChange}
               isInvalid={errorassignedTo}
              />
              <Form.Control.Feedback type='inValid' className="d-blog text-danger">
                {errorassignedTo}
              </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
              <Form.Label> Message</Form.Label>
              <Form.Control
               as='textarea'
               name='subTitle'
               value={subTitle}
               placeholder='sub Title'
               onChange={handelChange}
               isInvalid={errorSubTitle}
              />
               <Form.Control.Feedback type='inValid' className="d-blog text-danger">
                {errorSubTitle}
              </Form.Control.Feedback>
              </Form.Group>

              <Form.Group>
                <Row>
                  <Col>
                  <Form.Label htmlFor="startDate">Start Date </Form.Label>
                  <Form.Control
                  type='date'
                  onChange={handelChange}
                  name='startDate'
                  value={startDate}
                  placeholder='startDate'
                  isInvalid={errorStartDate}
                  />
                  <Form.Control.Feedback type='inValid' className="d-blog text-danger">
                {errorStartDate}
              </Form.Control.Feedback>
                  </Col>
                  <Col>
                  <Form.Label htmlFor="startDate">End Date </Form.Label>
                  <Form.Control
                  type='date'
                  onChange={handelChange}
                  name='endDate'
                  value={endDate}
                  placeholder='end Date'
                  isInvalid={errorEndDate}
                  />
                  <Form.Control.Feedback type='inValid' className="d-blog text-danger">
                {errorEndDate}
              </Form.Control.Feedback>
                  </Col>
                </Row>
              
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="priority">priority</Form.Label>
                <Row>
                  <Col sm='auto'>
                  <Form.Check
               type="radio"
               onChange={handelChange}
               name='priority'
               value='high'
               label='High'
               checked={priority === 'high'}
               />
                  </Col>
                  <Col sm='auto'>
                  <Form.Check
               type="radio"
               onChange={handelChange}
               name='priority'
               value='medium'
               label='Medium'
               checked={priority === 'medium'}
               />
                  </Col>
                  <Col sm='auto'>
                  <Form.Check
               type="radio"
               onChange={handelChange}
               name='priority'
               value='low'
               label='Low'
               checked={priority === 'low'}
               />
                  </Col>
                </Row>
               
               
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="status">status</Form.Label>
                <Row>
                  <Col sm='auto'>
                  <Form.Check
               type="radio"
               onChange={handelChange}
               name='status'
               value='new'
               label='new'
               checked={status === 'new'}
               />
                  </Col>
                  <Col sm='auto'>
                  <Form.Check
               type="radio"
               onChange={handelChange}
               name='status'
               value='inProgress'
               label='in Progress'
               checked={status === 'inProgress'}
               />
                  </Col>
                  <Col sm='auto'>
                  <Form.Check
               type="radio"
               onChange={handelChange}
               name='status'
               value='completed'
               label='completed'
               checked={status === 'completed'}
               />
                  </Col>
                  
                </Row>
                
              </Form.Group>
                <Form.Group>
                <Form.Label htmlFor='completedPercentage'> Completed in percentage</Form.Label>
                   <Row>
                    <Col className="w-50">
                    <Form.Range 
                      value={completedPercentage}
                      name='completedPercentage'
                      onChange={handelChange}
                    ></Form.Range>
                    </Col>
                   <Col>
                   <p>{completedPercentage}</p>
                    </Col>
                    </Row> 
                </Form.Group>
              <Button className='mt-2 ' type='submit'> Update Issue</Button>
              <Button onClick={()=> navigate('/issue')} variant='warning' className='mt-2 mx-2 ' > Back</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default EditIssue;