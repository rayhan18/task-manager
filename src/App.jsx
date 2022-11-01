import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { toast, ToastContainer } from 'react-toastify';
import Navigation from './components/Navigation'
import AddIssue from './components/AddIssue'
import IssueBar from './components/IssueBar'
import Issues from './components/Issues'
import Homepage from './components/Homepage'

import { Row,Col,Container } from 'react-bootstrap'
import {
  BrowserRouter ,
  Routes,
  Route,
 
} from "react-router-dom";
import NotFoundPage from './components/NotFoundPage';
import EditIssue from './components/EditIssue';

function App() {
  const [issues, setIssue] = useState([{
    id:"d430255c-0399-4af3-83ef-2f709cd2aedf",
    title:"sample title",
    subTitle:"sample subTitle",
    assignedTo:"Rayhan",
    startDate:new Date(),
    endDate: new Date(),
    priority:'low',
    status:'new',
    completedPercentage:1
  }])
  const [totalCount,setTotalCount] = useState(0)
  const [newCount,setNewCount] = useState(0)
  const [progressCount,setProgressCount] = useState(0)
  const [completedCount,setCompletedCount] = useState(0)


  const addIssue=(issue)=>{
    
     setIssue([...issues ,issue])
     //console.log(issue)
     if(issue.status === 'new'){
      setNewCount(prevValue=>prevValue + 1)
     }
     if(issue.status === 'inProgress'){
      setProgressCount(prevValue =>prevValue + 1)
     }
     if(issue.status === 'completed'){
      setCompletedCount(prevValue =>prevValue + 1)
     }
     if(issues.status === 'new'){
      setTotalCount(prevValue=>prevValue + 1)
     }
  }
  //editIssue n update 
  const upDateIssue=(issueUpdate)=>{
   console.log(issueUpdate ,'update')
  const issueAfterUpdate = issues.map(issue=>{
     if(issue.id === issueUpdate.id){
      return{
        ...issueUpdate,
        id:issue.id,
        status: parseInt(issueUpdate.completedPercentage ) < 100 ? 'inprogress': issueUpdate.status
      }
     }else{
      return issue
     }
   })
   //console.log(issueAfterUpdate)
   setIssue(issueAfterUpdate)
  }
 //deleteIssue
 const deleteIssue =(id)=>{
 //console.log(id)
 const afterDeleteIssue = issues.filter(issue => issue.id !== id)
   setIssue(afterDeleteIssue)
 }
  //update status issue filed
const completedIssue =(id)=>{
 //console.log(id)
  const issueAfterComled = issues.map(issue =>{
   if(issue.id === id){
    return{
      ...issue,
      status:'completed',
      completedPercentage:100
    }
   }else{
    return issue
   }
  })
  setIssue(issueAfterComled)
}


  return (
    <>
    <BrowserRouter>
      <Navigation/>
     
        <Container>
          <Routes>
          <Route path="/"  element={ <Homepage/>}/>
            <Route path="/add" element={ <AddIssue addIssue={addIssue}/>}/>
            <Route path="/edit/:id" element={ <EditIssue issues={issues} upDateIssue={upDateIssue} />}/>
            <Route path= "/issue" element={<Issues issues={issues}
            totalCount={totalCount}
            newCount={newCount} 
            progressCount={progressCount}
            completedCount={completedCount}
            completedIssue={completedIssue}
            deleteIssue ={deleteIssue}
            />} />
            <Route path='*' element={<NotFoundPage/>} />
          </Routes>
           
            
            
        </Container>
        </BrowserRouter>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              />
              {/* Same as */}
              <ToastContainer />
      
    </>
  )
}

export default App
