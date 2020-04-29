import React from 'react';

class Likes extends React.Component {
    constructor(props) {
        super(props)
        const likeCount = Object.keys(this.props.likes).length;
        this.likeHash = {}
        Object.values(this.props.likes).forEach(el => this.likeHash[el.userId] = true)
        this.state = {
            likes: likeCount,
            updated: false
        }
        this.updateLikes = this.updateLikes.bind(this);
        
    }
    
    componentDidMount() {
        const likeCount = Object.keys(this.props.likes).length;
        debugger;
        this.props.fetchPostLikes(this.props.postId, 'Post')
            .then(
                this.likeHash[this.props.currentUser.id] ?
                    () => this.setState({ likes: likeCount, updated: true })
                    :
                    () => this.setState({ likes: likeCount, updated: false }))

    }

    updateLikes() {
        if (!this.state.updated) {
            let like = {
                user_id: this.props.currentUser.id,
                likeable_id: this.props.postId,
                likeable_type: "Post"
            }
            debugger;
            this.props.addPostLike(like)
                .then(() => this.setState((prevState, props) => {
                    return {
                        likes: prevState.likes + 1,
                        updated: true
                    }
                }))

        } else {
            this.props.removePostLike(this.props.postId, this.props.currentUser.user_id)
            this.setState((prevState, props) => (
                {
                    likes: prevState.likes - 1,
                    updated: false
                }
            ))
        }
    }

    render() {
        // let likeIcon = this.state.updated ?
        //     <img onClick={this.updateLikes} src="/002-like.png" />
        //     : <img onClick={this.updateLikes} src="/001-like-1.png" />
        <button onClick={this.updateLikes}>like or unlike button</button>


        if (!this.props.likes) return null;
        return (
            <div className="likes-div">
                <button onClick={this.updateLikes}>like or unlike button</button>

                {/* {likeIcon} */}
                {console.log(this.state)}
                <p>liked by {this.state.likes} others</p>
            </div>
        )
    }
}

export default Likes;