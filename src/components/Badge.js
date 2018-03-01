import React, {Component} from 'react';


class Badge extends Component{
render(){
    
    console.log(this.props)
    return(
        <div>
            <img src={this.props.img}  alt='omg'/>
            <h1>Name:{this.props.name}</h1>
        </div>
    );
}
}
export default Badge;