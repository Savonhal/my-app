import React, {Component} from 'react';

class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
            count:5,
        };

        
    }
    
    incrementCount = () =>{
        this.setState({
            count: this.state.count + 1
        });
    }
    
    
    

    render(){
        return(
            <div className="Counter">
                <h1>{this.state.count}</h1>
                <button onClick={this.incrementCount}>Increase Me</button>
            </div>
        );
    }
}

export default Counter;