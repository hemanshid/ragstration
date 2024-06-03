import React, { useMemo, useState } from 'react'

export const Home = () => {
    
    const [data,setData] = useState(0)
    const [datatwo,setDatatwo] = useState(1)

  const memoizedValue  =  useMemo(()=>{
            return data
        // console.log('hello')
    },[data])
    console.log(memoizedValue)

  return (
    <div>
        <button onClick={()=>{setData(data + 1)}}>save {data}</button>
        <button onClick={()=>{setDatatwo(datatwo + 2)}}>save {datatwo}</button>
    </div>
  )
}
