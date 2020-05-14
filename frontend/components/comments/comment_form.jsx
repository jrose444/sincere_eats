import React from 'react';

class Comment extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            body: "",
            post_id: this.props.postId,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput() {
        debugger;
        return e => (this.setState({ body: e.target.value }));
    }
    handleSubmit(e) {
        debugger;
        e.preventDefault()
        const comment = Object.assign({}, { comment: this.state })
        this.props.addComment(comment).then(() => {
            this.setState({ body: "" })
        })
    }
    
    render() {
        return (
            <div>
    //             <form onSubmit={this.handleSubmit} >
    //                 <input id={`comment-input-${this.props.postId}`} type="text" placeholder="Add a comment..." onChange={this.handleInput()} />
    //                 <input type="submit" value="Post" />
    //             </form>
            </div>
        )
    }
}

export default Comment;