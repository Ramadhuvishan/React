import React from 'react';
import data from '../data/data';

class Restraunt extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div class="restPic">
                    <img src={this.props.feature_image} height="200" width="300"/>
                    <p><b>{this.props.name}</b><br/>{this.props.cuisines}</p>
            </div>
        )
    };
}

export default Restraunt;