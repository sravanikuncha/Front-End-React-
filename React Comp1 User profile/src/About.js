// Create About component here to display the a small content here.
// In this component use paragraph tag (p) to display the content
import {Component} from "react";

export class About extends Component{

    constructor(){
        super();
        this.about="NFTium is an American online non-fungible token marketplace headquartered in New York City. The company was founded by Joe smoe in 2017. NFTium offers a marketplace allowing for non-fungible tokens to be sold directly at a fixed price, or through an auction."
    }
    render(){
        return(
            <div className="About">
                <p>{this.about}</p>
            </div>
        );
    }
}