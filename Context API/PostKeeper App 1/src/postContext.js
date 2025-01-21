// create post context here
import { createContext,useContext ,useState} from "react";

const postContextValue=createContext();

// Create custom hook that returns context value here
export const usepostContextHook=()=>{
    const value=useContext(postContextValue);
    return value;
}
// create a custom saved post provider here with add and reset functions
export function PostCustomProvider(props){
    const [savedPosts, setSavedPosts] = useState([]);

    const [showSavedList, setShowSavedList] = useState(false);

    const handleAdd=(post)=>{
        const isPresent=savedPosts.find((eachPost)=>post.id==eachPost.id);
        if(!isPresent){
            setSavedPosts([...savedPosts,post])
        }
    }

    const handleReset=()=>{
        setSavedPosts([]);
        setShowSavedList(false);
    }

    const handleSaveToggle=() => {
        setShowSavedList(!showSavedList)
    }

    return (
        <postContextValue.Provider value={{handleAdd,handleReset,savedPosts,showSavedList,handleSaveToggle}}>
            {props.children}
        </postContextValue.Provider>
    )
}