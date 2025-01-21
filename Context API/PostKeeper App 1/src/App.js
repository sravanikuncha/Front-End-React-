import "./styles.css";
import { Navbar } from "./Navbar";
import { List } from "./List";
import { PostCustomProvider } from "./postContext";

export default function App() {
  return (
    //Add the Context provider here
    <PostCustomProvider>
    <div className="App">
      <Navbar />
      <List />
    </div>
    </PostCustomProvider>
  );
}
