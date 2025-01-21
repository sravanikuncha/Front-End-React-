import tablecss from './Table.module.css';

export function Table(props){

    const eachorder=props.orderData;
    const priceTotal=props.priceTotal;

    return(
        <>
        <div className={tablecss.tabledivStyle}>
            <table class="table table-bordered">
            <thead>
                <tr>
                <th>Title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
                </tr>
            </thead>
            <tbody className={tablecss.tbodyStyle}>
                {eachorder.map((order)=>
                    <tr>
                    <td>{order.title}</td>
                    <td>{order.price}</td>
                    <td>{order.quantity}</td>
                    <td>{order.price * order.quantity}</td>
                    </tr>
                )}
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>{priceTotal}</td>
                    </tr>
            </tbody>
        </table>
        </div>
        </>
    )
}