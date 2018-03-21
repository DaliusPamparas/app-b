import React, { Component } from 'react';

class UserApiBild extends Component {

    constructor(){
        super();
        this.state = {
            pictuers: [],
        };
    }
    componentDidMount(){
        fetch('https://randomuser.me/api/?results=500')
        .then(results => {
            return results.json();
        }).then(data => {
            let pictures = data.results.map((pic) => {
                return(
                    <div key={pic.results} >
                        <img src={pic.picture.medium}  />
                    </div>
                )
            })
            this.setState({pictures: pictures});
            console.log("state---", this.state.pictures);
        })
    }
    render(){
        return(
            <div>
                {this.state.pictures}
            </div>
        )
    }
};
export default UserApiBild;