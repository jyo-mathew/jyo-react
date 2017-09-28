import React from 'react';
import {render} from 'react-dom';
class AwesomeComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {likesCount : 0,dislikeCount : 2};
        this.onLike = this.onLike.bind(this);
        this.onDisLike = this.onDisLike.bind(this);
    }

    onLike () {
        alert(this.state.dislikeCount);
        let newLikesCount = this.state.likesCount + 1;
        this.setState({likesCount: newLikesCount});
    }
    onDisLike(){
        let newLikesCount = this.state.likesCount - 1;
        this.setState({likeCount: 5 });
    }

    render() {
        return (
            <div>
                Likes : <span>{this.state.likesCount}</span>
                <div><button onClick={this.onLike}>Like Me</button></div>
                <div><button  onClick={this.onDisLike}> Dis like</button></div>
            </div>
        );
    }

}

export default AwesomeComponent;