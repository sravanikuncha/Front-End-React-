import "./styles.css";
import useFetch from "./useFetch";
// import the custom hook to use in this document
export default function App() {
  const url = "https://v2.jokeapi.dev/joke/Programming?type=single";
  // Use the custom hook here

  const {loading,error,data,setLoading,setError,setData,getJoke}=useFetch(url);
  console.log(error)
  // Display loading text here

  // Display something went wrong here
  
  return (
    <div className="App">
      {loading && <p>Loading....</p>}

      {error && error}

      {!error && !loading && <div><h1>Joke Generator</h1>
      {/* Do not modify the below code */}
      <h2>{data.joke}</h2>
      <button className="btn" onClick={()=>getJoke(url)}>New Joke</button></div> }
      
    </div>
  );
}
