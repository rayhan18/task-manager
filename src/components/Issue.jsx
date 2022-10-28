import { Badge ,ProgressBar ,Modal ,Button } from "react-bootstrap";
import { FaEdit,FaTrash, FaTwitch } from "react-icons/fa";
import { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
const Issue=({issue ,completedIssue ,deleteIssue})=>{
  const [show, setShow] = useState(false);

  const handleClose = (evn) => {
    //deleteIssue setup 
    //console.log(evn.target.dataset.action)
    if(evn.target.dataset.action === "delete"){
      deleteIssue(id)
    }
    setShow(false)};
    const handleShow = () => setShow(true);

        const {id ,title,assignedTo,startDate, endDate,priority,status,completedPercentage}= issue
       const lowClass = priority === 'low'? 'warning' :""
       const mediumClass = priority === 'medium'? 'primary' :""
       const highClass = priority === 'high'? 'danger' :""
       const highPercentage = completedPercentage >= 80 ? 'success' :""
       const mediumPercentage = completedPercentage > 50? 'info' :""
       const lowPercentage = completedPercentage < 50 ? 'danger' :""
       const completedStatue = status === 'completed' ? <span style={{textDecoration:'line-through',color:'red'}}>completed</span>:status
       
       const modal = 
       <Modal show={show} onHide={handleClose}>
       
        <Modal.Body>Are you sure to delete issue ?</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" data-action='delete' onClick={handleClose}>
            Delete
          </Button>
          <Button variant="info" onClick={handleClose}>
           Cancel
          </Button>
        </Modal.Footer>
      </Modal>
       
       return(
        <>
         {modal}
       
    <tr key={id}>
      <td>{id}</td>
      <td>{title}</td>
      <td><Badge bg={`${lowClass}${mediumClass}${highClass}`} pill> {priority}</Badge></td>
      <td>{assignedTo}</td>
      <td>{completedStatue}</td>
      <td>{endDate}</td>
      <td><ProgressBar 
      variant={`${lowPercentage}${mediumPercentage}${highPercentage}`}
      level = {completedPercentage}
      now ={completedPercentage}
      striped
      animated
      /></td>
      <td className="justify-content-between">
        <FaEdit className="text-info "/>
        <FaTwitch className="text-success mx-3 courser-pointer" onClick={()=>completedIssue(id)}/>
        <FaTrash className="text-danger" onClick={handleShow}/>
      </td>
    </tr>
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
export default Issue;