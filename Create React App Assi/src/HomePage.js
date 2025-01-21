// Complete the HomePage Component and export it
import { Form } from "./Form";

export const name="sravani";
export const email="ks@gmail.com";

export function HomePage() {
  return (
    <div className="Homepage">
      <h1>Home Page</h1>
      <Form/>
    </div>
  );
}
