// import "./list.css";
import Item from "./components/Item";
import { data } from "./data";
import listCompStyles from './list.module.css'

export default function List() {

  console.log(listCompStyles);
  return (
    <>
      <h3 className={listCompStyles.title}>Items Listed for Sale</h3>
      <div className={listCompStyles.container}>
        {data.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}
