import React, {Component} from 'react';

class Popular extends Component{
    constructor (props){
        super(props);
        this.state = {
            selectedLanguage: 'All'
        };
        this.updateLanguage = this.updateLanguage.bind(this);
    }
    updateLanguage(lang){
        this.setState(function(){
            return{
                selectedLanguage: lang
            }
        });
    }
    render(){
        var languages = ['All', 'Javascript', 'Java', 'JavaScript'];
     return (

     
     <div className="titletab">
         {this.state.selectedLanguage}
       <ul className='lang'>
           {languages.map(function(lang){
               return (
                   <li 
                   key={lang}
                   onClick={this.updateLanguage.bind(null, lang)}>
                       {lang}
                    </li>
               )
           }, this)}
        </ul>
    </div>
    );
    }
}
export default Popular;