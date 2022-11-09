import { useContext } from "react";
import { Table } from "react-bootstrap";
import { FaEdit,FaCheckSquare,FaTrash, FaChalkboardTeacher, FaTicketAlt, FaTwitch } from "react-icons/fa";
import { IssueContext } from "../assets/context/IssueContext";
import Issue from "./Issue";
import IssueBar from "./IssueBar"

const Issues =({
  //issues ,
  totalCount,
  newCount,
  progressCount ,
  completedCount,
  completedIssue ,
  //deleteIssue
})=>{
   
  const {issues} = useContext(IssueContext)
  //console.log(issues ,'issues') 
  return(
        <div>
            
   <h3>All Issues...</h3>
   <IssueBar
            totalCount={totalCount}
             newCount={newCount} 
             progressCount={progressCount}
             completedCount={completedCount}
              />
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>priority</th>
          <th>assigned To</th>
          <th>Status</th>
          <th>Deu Date</th>
          
          <th>Completed</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        
    {issues.map(issue =><Issue key={issue.id}
     issue={issue} completedIssue={completedIssue} />)} 
   
       
      </tbody>
    </Table>
  



        </div>
    )
}
export default  Issues ;
