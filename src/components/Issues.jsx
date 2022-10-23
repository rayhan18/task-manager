import { Table } from "react-bootstrap";
import { FaEdit,FaCheckSquare,FaTrash } from "react-icons/fa";
const Issues =({issues})=>{
    return(
        <div>
            
   <h3>All Issues...</h3>
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
        
     
   
        {issues.map((issue)=>{
            const {id ,title,assignedTo,startDate, endDate,priority,status,completedPercentage}= issue
            return(
        <tr key={id}>
          <td>{id}</td>
          <td>{title}</td>
          <td>{priority}</td>
          <td>{assignedTo}</td>
          <td>{status}</td>
          <td>{endDate}</td>
          <td>{completedPercentage}</td>
          <td>
            <FaEdit className="text-inof"/>
            <FaCheckSquare className="text-success m-3"/>
            <FaTrash className="text-danger"/>
          </td>
        </tr>
            )
        })}
      </tbody>
    </Table>
  



        </div>
    )
}
export default  Issues ;
