import React from 'react';
import ListElement from '../ListElement';

class LifecycleExample extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:null,
            
        }

    }
    // componentWillMount(){
    //     console.log("component Will Mount")
    // }
    componentDidMount(){
        // console.log('component Did Mount');
        const url = 'https://jsonplaceholder.typicode.com/todos/';
        fetch(url)
            .then( res => res.json())
            .then(data =>{
                
                this.setState({
                    data:data
                })
             })
    }
    componentWillUnmount(){
        console.log('Bye')
    }
    render(){
        return(
            <div>
                LifecycleExample
                <h2>
                   {this.state.data ? 
                   <ul>
                       {this.state.data.map(element =>{
                           const {id, title} = element;
                           return <ListElement key={id} title={title}/>
                       })}
                   </ul> : "Loading..."} 
                </h2>
                
            </div>
        )
    }
}
export default LifecycleExample;