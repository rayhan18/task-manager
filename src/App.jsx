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
    completedPercentage:0
  }])
  const [totalCount,setTotalCount] = useState(0)
  const [newCount,setNewCount] = useState(0)
  const [progressCount,setProgressCount] = useState(0)
  const [completedCount,setCompletedCount] = useState(0)


  const addIssue=(issue)=>{
    
     setIssue([...issues ,issue])
     console.log(issue)
  }

  return (
    <>
      <Navigation/>
     
        <Container>
            <AddIssue addIssue={addIssue}/>
            <IssueBar
             totalCount={totalCount}
              newCount={newCount} 
              progressCount={progressCount}
              completedCount={completedCount}
              />
            <Issues issues={issues}/>
        </Container>
     
      
      
    </>
  )
}

export default App
