import React from 'react';
import {withRouter} from 'react-router';

class Post extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        // debugger
        this.props.banana()
    }

    update(field) {
        // return e => this.setState({
        //     [field]: e.target.value
        // })
    }

    render(){
        return(
            <div className='mappedPosts'>{Object.values(this.props.posts).map(posts => <div key={posts.id} className="singlePost">{posts.title}</div>)
            
            }</div>
        )
    }


}

export default Post;