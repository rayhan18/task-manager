import { useState } from 'react'
import reactLogo from './assets/react.svg'

import Navigation from './components/Navigation'
import AddIssue from './components/AddIssue'
import IssueBar from './components/IssueBar'
import Issues from './components/Issues'
import { Row,Col,Container } from 'react-bootstrap'

function App() {
  const [issues, setIssue] = useState([])
  const addIssue=(issue)=>{
     console.log(issue)
  }

  return (
    <>
      <Navigation/>
     
        <Container>
            <AddIssue addIssue={addIssue}/>
            <IssueBar/>
            <Issues />
        </Container>
     
      
      
    </>
  )
}

export default App
