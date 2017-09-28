import React,{Component} from 'react';

export class Header extends Component {
    render(){
        const {activity} = this.props;
        return(
            <div> Header named (no default)
                <span>{this.props.title} </span>

                {this.props.lastName};
                </div>

        );

    }
}

export class Footer extends Component{
    render(){
        return(
            <div> Footer named (no default)</div>
        );

    }
}