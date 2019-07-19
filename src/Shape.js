import React, {Component} from "react"; 

class Shape extends Component {
    constructor(props) {
        super(props); 
    }
    render() {
        return (
        <React.Fragment>
            <img 
            name={this.props.name}
            src={this.props.image} 
            style={{width: 100}} 
            className="shape"
            onClick={this.props.click}
           />
        </React.Fragment>
        )
    }
}

export default Shape; 
