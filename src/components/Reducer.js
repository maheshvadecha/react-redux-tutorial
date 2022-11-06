const myState = {
    count:0
}
const MyReducer = (state = myState, action) =>{
console.log('******************',state, action)
    switch (action.type) {
      case "increment":
        return {count: state.count + 1}
      case "decrement":
        return {count: state.count - 1}
      default:
        return state
    }
} 
export default MyReducer;