
import { Container, Row,Col, Form ,Button } from "react-bootstrap"
import {useState ,useEffect} from "react"
import {v4 as uuid} from 'uuid'
import {useNavigate} from 'react-router-dom'
import { toast } from "react-toastify"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from "date-fns"
import TextInput from "../formInputs/TextInput"
import DateInput from "../formInputs/DateInput"
import CheckInput from "../formInputs/CheckInput"

// const defaultIssue={
//     title:'',
//     subTitle:'',
//     assignedTo:'',
//     startDate: new Date(),
//     endDate: addDays(new Date(),1) ,
//     priority:'low',
//     status:'new',
//     completedPercentage:1
//   }
const IssueForm =({addIssue ,upDateIssue,handleUpdateIssue ,issue:EditToIssue})=>{
 
        const navigate = useNavigate()
        const [issue, setIssue]= useState({
          title:'',
          subTitle:'',
          assignedTo:'',
          startDate:'',
          endDate:'',
          priority:'low',
          status:'new',
          completedPercentage:1
        })

        useEffect(()=>{
          if(EditToIssue){
          const {
            id,
            title,
            subTitle,
            assignedTo,
            startDate,
            endDate,
            priority,
            status,
            completedPercentage
          }=EditToIssue
          setIssue({
            id,
            title,
            subTitle,
            assignedTo,
            startDate,
            endDate,
            priority,
            status,
            completedPercentage
          })
          }
        },[EditToIssue])

        const [errorIssue, setErrorIssue]= useState({
          title:'',
          subTitle:'',
          assignedTo:'',
          startDate:'',
          endDate:''
        })
        
        
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
            if(issue.id && isValidData ){
              handleUpdateIssue({
                ...issue
             })
               toast.success('issue updated successfully')
               return  navigate('/issue')
                }


          if(isValidData){
           // value is true then submit form
            //console.log(issue)
           addIssue({
            id: uuid(),
            ...issue
          })
          
          toast.success('issue added successfully')
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
    

            const priorityTypes = [
              {
                name:'priority',
                value:'high',
                label:'High',
                valueToChecked:priority
              },
              {
                name:'priority',
                value:'medium',
                label:'Medium',
                valueToChecked:priority
              },
              {
                name:'priority',
                value:'low',
                label:'Low',
                valueToChecked:priority
              },
            ]
            
            const statusChecks =[
              {
                name:'status',
                value:'new',
                label:'New',
                statusType:status
              },
              {
                name:'status',
                value:'inProgress',
                label:'in Progress',
                statusType:status
              },
              {
                name:'status',
                value:'completed',
                label:'Completed',
                statusType:status
              },
            ]
    return(
        <>
    
      <Container className="">

        <Row>
        <h1>{EditToIssue ? 'Edit Issue' : 'Add issues'}</h1>
          <Col>
            <Form onSubmit={handelSubmit}>
              {/* <Form.Group>
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
              </Form.Group> */}
             <TextInput 
              type='text'
              name='title'
              value={title}
              placeholder='title'
              onChange={handelChange}
              error={errorTitle}
             />
              {/* <Form.Group>
              <Form.Label>assigned to</Form.Label>
              <Form.Control
               label=' Title'
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
              </Form.Group> */}
              <TextInput 
               label=' Assigned to'
              type='text'
              name='assignedTo'
              value={assignedTo}
              placeholder='assigned To'
              onChange={handelChange}
              error={errorassignedTo}
             />
              {/* <Form.Group>
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
              </Form.Group> */}
             <TextInput 
             label='Sub title'
              type='text'
              name='subTitle'
              value={subTitle}
              placeholder='sub Title'
              onChange={handelChange}
              error={errorSubTitle}
              as='textarea'
             />
              <Form.Group>
                <Row>
                  <Col>
                  <Form.Label htmlFor="startDate">Start Date </Form.Label>
                  {/* <DatePicker
                  selected={startDate} 
                  type='date'
                  onChange={(date)=> setIssue({
                    ...issue,
                    startDate:date})}   
                    startDate={startDate}
                    endDate={endDate}
                   // minDate={new date()}
                  name='startDate'
                  value={startDate}
                  placeholder='startDate'
                  isInvalid={errorStartDate}
                  selectsStart
                  /> */}
{/*                   
                  <Form.Control.Feedback type='inValid' className="d-blog text-danger">
                {errorStartDate}
              </Form.Control.Feedback> */}
              <DateInput
               selected={startDate} 
               type='date'
               onChange={(date)=> setIssue({
                 ...issue,
                 startDate:date})}   
                 startDate={startDate}
                 endDate={endDate}
                 //minDate={new date()}
               name='startDate'
               value={startDate}
               placeholder='startDate'
               error={errorStartDate}
               selectsStart
              />
                  </Col>
                  <Col>
                  <Form.Label htmlFor="startDate">End Date </Form.Label>
                  <DateInput
                  type='date'
                  selected={endDate} 
                  onChange={(date)=> setIssue({
                    ...issue,
                    endDate:date})}
                    selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                  name='endDate'
                  value={endDate}
                  placeholder='end Date'
                  error={errorEndDate}
                  />
                  {/* <DatePicker
                  type='date'
                  selected={endDate} 
                  onChange={(date)=> setIssue({
                    ...issue,
                    endDate:date})}
                    selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                  name='endDate'
                  value={endDate}
                  placeholder='end Date'
                  isInvalid={errorEndDate}
                  /> */}
                  {/* <Form.Control.Feedback type='inValid' className="d-blog text-danger">
                {errorEndDate}
              </Form.Control.Feedback> */}
                  </Col>
                </Row>
              
              </Form.Group>
             
              <Form.Group>
                <Form.Label htmlFor="priority">priority</Form.Label>
                <Row className="">
               
                  {priorityTypes.map((priorityType,index) =>(
                     <Col sm='auto' key={index}>
                      <CheckInput  
                      name={priorityType.name}
                      onChange={handelChange}
                      value={priorityType.value}
                      label={priorityType.label}
                      valueToChecked={priorityType.valueToChecked}
                      />
                      </Col>
                  ))}
               
             
            
                </Row>
               
               
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="status">status</Form.Label>
                <Row>
                  {statusChecks.map((statusCheck,index) =>(
                    <Col sm='auto' key={index}>
                    <CheckInput 

                    onChange={handelChange}
                    name={statusCheck.name}
                    value={statusCheck.value}
                    label={statusCheck.label}
                    valueToChecked={statusCheck.statusType }
                    />
                    </Col>
                  ))}
                 
                  {/* <Col sm='auto'>
                  <CheckInput 
              
               onChange={handelChange}
               name='status'
               value='inProgress'
               label='in Progress'
               valueToChecked={status }
               />
                  </Col>
                  <Col sm='auto'>
                  <CheckInput 
               
               onChange={handelChange}
               name='status'
               value='completed'
               label='completed'
               valueToChecked={status }
               />
                  </Col> */}
                  
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
              <Button className='mt-2 ' type='submit'>{EditToIssue?"Update issue" :"Submit Issue"} </Button>
             
            </Form>
          </Col>
        </Row>
      </Container>
    </>
    )
}
export default IssueForm;