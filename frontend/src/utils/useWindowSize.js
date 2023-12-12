import { useEffect, useState } from "react"



export const useWindowSize = ()=>{
    // Initialize state with undefined width and height so server and client renders match
  // Configure initial state
  const [windowSize, setWindowSize] =useState([window.innerWidth,window.innerHeight])
    useEffect(()=>{
        // Handler to call on window resize
      const handleReSize =()=> {
          // Set window size based on viewport dimensions
          setWindowSize([window.innerWidth, window.innerHeight])
      }
      window.addEventListener('resize',handleReSize)
      //cleanup
      return () => window.removeEventListener("resize", handleReSize);
      
     },[])
   return{
    width: windowSize[0],
    height:windowSize[1]
   }
}



