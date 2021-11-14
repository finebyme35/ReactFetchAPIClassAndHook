import { Component } from "react"


class Comment extends Component {
    state = {
        comments: []
    }
   
    getComment() {
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(data => this.setState({comments: data}))
    }

    componentDidMount() {
        this.getComment()
    }
    render() {
        return(
            <div>
                <h1>Comment Page!</h1>
                <hr />
                {
                    this.state.comments ?
                     this.state.comments.map(comment => 
                     <div key={comment.id}>
                        <h1>{comment.name}</h1>
                        <h3>{comment.email}</h3>
                        <p>{comment.body}</p>
                     </div>
                     ): <h1>Loading...</h1>
                }
            </div>
        )
    }
}
export default Comment;