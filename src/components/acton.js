export const increment = (v) =>(
    {
        type:'increment',
        payload: v
    }
)

export const decrement = () =>(
    {
        type:'decrement',
        payload: null
    }
)