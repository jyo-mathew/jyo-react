import React,{Component} from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';
import Shoppinglist from './Shoppinglist.jsx';
import Name from './FunctionComponent.jsx'

class App extends Component {
    render () {
        return (
            <div>
                <p> Hello React!</p>
                <AwesomeComponent />
                 <Shoppinglist />
                <Name name='yes it is working' />
            </div>
        );
    }
}
render(<App/>, document.getElementById('app'));