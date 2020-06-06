import React from 'react';

class TextInput extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div class="form-field">
                        <input type="text" class="username" placeholder="Username" name="user" value={this.props.user} onChange={this.props.onChange}/>
                    </div>
        )
    };
}

export default TextInput;