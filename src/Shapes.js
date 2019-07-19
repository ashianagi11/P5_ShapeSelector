import React, {Component} from "react"; 
import "./index.css";
import Shape from "./Shape";  


class Shapes extends Component {
    state= {
        selected : "Place Select a Shape",
        shapes: [
            { name:"Square", image: "https://etc.usf.edu/clipart/21900/21988/square_21988_md.gif" },
            { name: "Circle", image: "https://i.stack.imgur.com/cr4Sj.png"},
            { name: "Rectangle", image: "https://d2jmvrsizmvf4x.cloudfront.net/INNT6RHNTaYMwuI1yWA4_rectangle.png"} 
        ]
    }; 

    shapeSelector = (e) => {
        this.setState({
            selected: e.target.name 
        })
    }
    render() {
        return (
        <div className="container">
            <div className="top">
                <h4> Shape : {this.state.selected} </h4>
            </div> 
             <div className="bottom">
                {this.state.shapes.map(shape => 
                <Shape 
                className='color'
                key={shape.name} 
                name={shape.name}
                image= {shape.image} 
                click={this.shapeSelector} 
                />)}
             </div>
        </div>
        )
    }
}

export default Shapes; 