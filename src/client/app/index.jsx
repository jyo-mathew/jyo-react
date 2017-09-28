import React,{Component} from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';
import Shoppinglist from './Shoppinglist.jsx';
import Name from './FunctionComponent.jsx'
import {Header,Footer} from './NamedExport.jsx'

class App extends Component {

     constructor(){
        super();
        const activities = {
            name: 'My Name',
            lastName : 'Last name',
            userDetails :{
                userID : 1
            }
        }
    }


    render () {
        return (
            <div>
                <Header title="title from parent " activity= {activities} />
                <p> </p>
                <AwesomeComponent />
                 <Shoppinglist />
                <Name name='yes it is working' />
                <Footer />
            </div>
        );
    }

}
render(<App/>, document.getElementById('app'));