import { useState } from 'react'
import reactLogo from './assets/react.svg'

import Navigation from './components/Navigation'
import AddIssue from './components/AddIssue'
import IssueBar from './components/IssueBar'
import Issues from './components/Issues'
import { Row,Col,Container } from 'react-bootstrap'

function App() {
  const [issues, setIssue] = useState([{
    id:"d430255c-0399-4af3-83ef-2f709cd2aedf",
    title:"sample title",
    subTitle:"sample subTitle",
    assignedTo:"Rayhan",
    startDate:"",
    endDate:"",
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
 //deleteIssue
 const deleteIssue =(id)=>{
 //console.log(id)
 const afterDeleteIssue = issues.filter(issue => issue.id !== id)
   setIssue(afterDeleteIssue)
 }
  //update issue filed
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
      <Navigation/>
     
        <Container>
            <AddIssue addIssue={addIssue}/>
            
            <Issues issues={issues}
            totalCount={totalCount}
            newCount={newCount} 
            progressCount={progressCount}
            completedCount={completedCount}
            completedIssue={completedIssue}
            deleteIssue ={deleteIssue}
            />
        </Container>
     
      
      
    </>
  )
}

export default App
