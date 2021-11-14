import { useEffect, useState } from "react";


function Post() {
    const [posts, setPost] = useState(null);
    const getPost = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPost(data))
    }
    useEffect(() => {
        getPost()
    }, [])
    return(
        <>
            <h1>Post Page!</h1>
            <hr />
            { posts ? 
                posts.map(post => 
                <>
                    
                    <h1>{post.id} - {post.title}</h1>
                    <p>{post.body}</p>
                </>)
                     :
                <h1>Loading...</h1>}
        </>
    )
}

export default Post;