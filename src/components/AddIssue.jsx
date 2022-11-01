import IssueForm from "./Issueform"



const AddIssue =({addIssue})=>{

    const handleIssue=(issue)=>{
        console.log(issue)
        addIssue(issue)
    }
   
    return(
       <IssueForm addIssue={handleIssue} />
    )
}
export default AddIssue;