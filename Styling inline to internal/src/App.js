import "./styles.css";

//create a object to store all the styles.

const internalStyle={
  form:{
      width: "60%",
      margin: "50px auto",
      display: "flex",
      flexDirection: "column",
      gap: 20
  },
  signUp:{
     fontSize: "2rem", 
     letterSpacing: 2 },
  padding:{ padding: 10 },
  outerDiv:{
    display: "flex",
    justifyContent: "center",
    gap: 20
  },
  button:{
    outline: "none",
    paddingBlock: 5,
    width: 100,
    backgroundColor: "red",
    color: "white",
    cursor: "pointer"
  }
}


export default function App() {
  return (
    <div className="App">
      {/* Refactor the inline style to use the internal style. */}
      <form
        style={internalStyle.form}
      >
        {/* Refactor the inline style to use the internal style. */}
        <h3 style={internalStyle.signUp}>Sign Up</h3>
        <input style={internalStyle.padding} placeholder="Username" />
        <input style={internalStyle.padding} placeholder="Email" />
        <input style={internalStyle.padding} placeholder="Password" />
        {/* Refactor the inline style to use the internal style. */}
        <div
          style={internalStyle.outerDiv}
        >
          {/* Refactor the inline style to use the internal style. */}
          <button
            style={internalStyle.button}
          >
            Cancel
          </button>
          {/* Refactor the inline style to use the internal style. */}
          <button
            style={internalStyle.button}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
