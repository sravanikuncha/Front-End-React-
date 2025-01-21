import { useEffect } from "react";
import { List } from "../components/List";
// import comments actions here
import { commentActions } from "../redux/reducers/commentsReducer";
import { useDispatch } from "react-redux";

export const Home = () => {
  const commentDispatcher=useDispatch();
  const getComments = async () => {
    
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );
      const data = await response.json();
      commentDispatcher(commentActions.success(data));
      // dispatch fetch success action here
    } catch (e) {
      // dispatch fetch error action here
      commentDispatcher(commentActions.error("failed to fetch comments"))
    }
  };

  useEffect(() => {
    // dispatch fetch start action here
    commentDispatcher(commentActions.loading());
    getComments();
    // execute the getComments function here
  }, []);

  return (
    <div className="home">
      <h3>Internet Comments</h3>
      <List />
    </div>
  );
};
