import {useEffect, useState} from 'react';

// Complete the following hook
const useFetch = (url) => {

  const [loading,setLoading]=useState(true);

  const [error,setError]=useState(null);

  const [data,setData]=useState("");


  const getJoke = async (url) => {
    console.log(url)
    try{
      const response=await fetch(url);
      if(!response.ok){
        throw new Error("Something went wrong...");
      }
      const jokeData=await response.json();
      setData(jokeData);
      setLoading(false)
      setError(null)
    }catch(e){
      setError(e.message);
    }
  };

  useEffect(()=>{
    getJoke(url);
  },[])
 

  return {loading,error,data,setLoading,setError,setData,getJoke};

  //It should return data returned from fetch, loading, error and getJoke
};
// export the useFetch hook as a default export
export default useFetch;
