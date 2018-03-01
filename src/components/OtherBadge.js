import React, {Component} from 'react';

class OtherBadge extends Component{
render(){
    return(
      <div>
          <img src={this.props.user.img} alt='omg'/>
         <h1> Name: {this.props.user.name}</h1>
     </div>
    );
}
}
export default OtherBadge;