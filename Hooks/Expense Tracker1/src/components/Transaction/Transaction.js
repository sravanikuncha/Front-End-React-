import React,{useState} from "react";
import styles from "./Transaction.module.css";
import EditImage from "../../images/edit.png";
import DeleteImage from "../../images/trash-bin.png";

// export default class Transaction extends React.Component {
export default function Transaction(props){
  // constructor() {
  //   super();
  //   this.state = {
  //     currentHoverIndex: null
  //   };
  // }

  const {text,Amount}=props.eachTransaction;
  console.log('Transaction')
  console.log(`${text} ${Amount}`);

  const [currentHoverIndex,setCurrentHoverIndex]=useState(null);

  // render() {
    return (
      <li
        key={props.index}
        className={`${styles.transaction} ${
          Amount > 0 ? styles.profit : styles.loss
        }`}
        onMouseOver={() => {
          // this.setState({ currentHoverIndex: this.props.index });
          setCurrentHoverIndex(props.index );
        }}
        onMouseLeave={() => {
          // this.setState({ currentHoverIndex: null });
          setCurrentHoverIndex(null);
        }}
      >
        <div>{text}</div>
        <div className={styles.transactionOptions}>
          <div
            className={`${styles.amount} ${
              currentHoverIndex === props.index &&
              styles.movePrice
            }`}
          >
            ${Amount}
          </div>
          <div
            className={`${styles.btnContainer} ${
              currentHoverIndex === props.index && styles.active
            }`}
          >
            <div className={styles.edit} onClick={() => {}}>
              <img src={EditImage} height="100%" alt="Edit" />
            </div>
            <div className={styles.delete} onClick={() => {}}>
              <img src={DeleteImage} height="100%" alt="Delete" />
            </div>
          </div>
        </div>
      </li>
    );
  // }
}
