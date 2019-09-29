import React, { Component, Fragment } from 'react'
import './style.css'
import Post from '../../StateLessComp/Post'

class BlogPost extends Component {
    state = {
        post: []
    }
    componentDidMount() {
        fetch('http://localhost:8000/')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    post: json
                })
            })
    }

    render() {
        return (
            <Fragment>
                <p className="section-title">BlogPost</p>
                {

                    this.state.post.map(post => {
                        console.log(post)
                        return <Post img={post.img} title={post.title} desc={post.desc} />
                    })
                }
            </Fragment>
        )
    }
};

export default BlogPost;