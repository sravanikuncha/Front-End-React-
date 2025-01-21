// Complete the Form Component and export it
import { name,email } from "./HomePage";
export  const Form = () => (
  <>
    <div >
      <h3>Login Page</h3>
      <form>
        <input className="form" type="text" placeholder="Name" value={name}/><br/>
        <input className="form" type="email" placeholder="Email" value={email}/><br/>
        <button>Login</button>
      </form>
    </div>
  </>
);
