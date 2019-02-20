import React from "react";
import Comments from './Comments';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eachComment: props.eachComment,
            input: "",
            likes: 0
        }
    }
    
    change = event => {
        console.log(event.target.value);
        this.setState({ input: event.target.value });
    }

    submit = event => {
        event.preventDefault();
        const newComment = {username: "iHateReact", text: this.state.input};
        const addComment = [...this.state.eachComment];
        addComment.push(newComment);
        this.setState({ eachComment: addComment, input: "" });
        console.log(this.state.input);
    }

    increase = event => {
        event.preventDefault();
        const plusOne = this.state.likes + 1;
        this.setState({ likes: plusOne })
    }

    render() {
        return (
            <div>
                <div>
                    <i onClick={this.increase} id="icon" class="far fa-heart"></i><i id="icon2" class="far fa-comment"></i>
                    <p className="likes">{this.state.likes} likes</p>
                </div>
                <div>
                    {
                        this.state.eachComment.map((comment, i) => (<Comments returnComment={comment} key={i}/>))
                    }
                </div>
                <form onSubmit={this.submit}>
                    <input 
                        value={this.state.input}
                        name="input"
                        type="text"
                        onChange={ this.change }
                        className="input"
                        placeholder="Add a comment..."
                    />
                </form>
            </div>
        )
    }
}

export default CommentSection;