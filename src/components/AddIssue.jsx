import { useContext } from "react"
import { IssueContext } from "../assets/context/IssueContext"
import IssueForm from "./Issueform"



const AddIssue =()=>{

   const {addIssue}= useContext(IssueContext)
    const handleIssue=(issue)=>{
        //console.log(issue)
        addIssue(issue)
    }
   
    return(
       <IssueForm addIssue={handleIssue} />
    )
}
export default AddIssue;