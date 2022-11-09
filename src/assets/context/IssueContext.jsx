import { createContext } from "react";
import { useReducer } from "react";
import {  useContext } from "react";
import { IssueReducers } from "./IssueReducers";
import {ADD_ISSUE ,DELETE_ISSUE ,UPDATE_ISSUE} from './ActionType'
export const IssueContext = createContext()

const initialState=[{
    id:"d430255c-0399-4af3-83ef-2f709cd2aedf",
    title:"sample title",
    subTitle:"sample subTitle",
    assignedTo:"Rayhan",
    startDate:new Date(),
    endDate: new Date(),
    priority:'low',
    status:'new',
    completedPercentage:1
}]

export const IssueProvider =({children})=>{
    const [issues ,dispatch] = useReducer(IssueReducers, initialState)

    const addIssue=(issue)=>{
    
        dispatch({type:ADD_ISSUE ,payload:issue})
        //console.log(issue)
        // if(issue.status === 'new'){
        //  setNewCount(prevValue=>prevValue + 1)
        // }
        // if(issue.status === 'inProgress'){
        //  setProgressCount(prevValue =>prevValue + 1)
        // }
        // if(issue.status === 'completed'){
        //  setCompletedCount(prevValue =>prevValue + 1)
        // }
        // if(issues.status === 'new'){
        //  setTotalCount(prevValue=>prevValue + 1)
        // }
     }

     const upDateIssue=(issueUpdate)=>{
       // console.log(issueUpdate ,'update')
       dispatch({type:UPDATE_ISSUE ,payload:issueUpdate})

    //    const issueAfterUpdate = issues.map(issue=>{
    //       if(issue.id === issueUpdate.id){
    //        return{
    //          ...issueUpdate,
    //          id:issue.id,
    //          status: parseInt(issueUpdate.completedPercentage ) < 100 ? 'inprogress': issueUpdate.status
    //        }
    //       }else{
    //        return issue
    //       }
    //     })
        //console.log(issueAfterUpdate)
       // setIssue(issueAfterUpdate)
       }


      //deleteIssue
      const deleteIssue =(id)=>{
        dispatch({type:DELETE_ISSUE ,payload:id})
      //console.log(id)
     // const afterDeleteIssue = issues.filter(issue => issue.id !== id)
        //setIssue(afterDeleteIssue)
      }


    const value={
        issues,
        addIssue,
        upDateIssue,
        deleteIssue,
        
    }
    return(
        <IssueContext.Provider value={value}>

            {children}
        </IssueContext.Provider>
    )
}

