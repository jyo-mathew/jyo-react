import React,{Component} from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';
import Shoppinglist from './Shoppinglist.jsx';
import Name from './FunctionComponent.jsx'
import {Header,Footer} from './NamedExport.jsx'

class App extends Component {
    render () {
        return (
            <div>
                <Header />
                <p> Hello React!</p>
                <AwesomeComponent />
                 <Shoppinglist />
                <Name name='yes it is working' />
                <Footer />
            </div>
        );
    }
}
render(<App/>, document.getElementById('app'));