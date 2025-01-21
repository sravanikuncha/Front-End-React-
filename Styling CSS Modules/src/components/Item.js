import itemCompStyles from './item.module.css';

export default function Item({ item }) {
  console.log(itemCompStyles);
  return (
    <div className={itemCompStyles.container}>
      <h3 className={itemCompStyles.title}>{item.title}</h3>
      <img src={item.image} alt={item.title} className="image" />
      <p>
        <strong className={itemCompStyles.price}>${item.price}</strong>
      </p>
      <p>{item.description}</p>
    </div>
  );
}
