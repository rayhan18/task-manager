import IssueForm from "./Issueform";
import { Container, Row,Col, Form ,Button } from "react-bootstrap"
import {useEffect, useState} from "react"
import {v4 as uuid} from 'uuid'
import {useNavigate ,useParams} from 'react-router-dom'
import { toast } from "react-toastify"

const EditIssue =({issues ,upDateIssue})=>{
    const navigate = useNavigate()
  const {id} = useParams()
const [issue, setIssue]= useState(null)
const [errorIssue, setErrorIssue]= useState({
  title:'',
  subTitle:'',
  assignedTo:'',
  startDate:'',
  endDate:''
})
//edit and update issue
const EditToIssue=()=>{
    const findSingleIssue = issues.find(issue => issue.id === id)
    if(!findSingleIssue){
     toast.warning('Its not correct id ')
     return navigate('/issue')
    }
    setIssue(findSingleIssue)
   }
   
   useEffect(()=>{
     EditToIssue()
   },[id])

   const handleUpdateIssue=(issue)=>{
    console.log(issue)
    upDateIssue(issue)
   }
    return(
       <IssueForm handleUpdateIssue={handleUpdateIssue} issue={issue} />
    )
}
export default EditIssue;