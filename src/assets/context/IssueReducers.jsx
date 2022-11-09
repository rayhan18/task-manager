import { ADD_ISSUE, DELETE_ISSUE, UPDATE_ISSUE } from "./ActionType"

export const IssueReducers = (state ,action)=>{
  const {type ,payload} =action
  switch(type){
    case ADD_ISSUE:
        return[
            ...state,
            payload
          ]
          case DELETE_ISSUE:
            const afterDeleteIssue = state.filter(issue => issue.id !== payload)
            return [...afterDeleteIssue]

            case UPDATE_ISSUE:
              const issueAfterUpdate = state.map(issue=>{
                if(issue.id === payload.id){
                 return{
                   ...payload,
                   id:issue.id,
                   status: parseInt(payload.completedPercentage ) < 100 ? 'inprogress': payload.status
                 }
                }else{
                 return issue
                }
              })
              return [...issueAfterUpdate]
        default:
            return state
  }
}