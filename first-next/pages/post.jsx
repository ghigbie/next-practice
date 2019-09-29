import axios from 'axios';
import Comment from './../components/Comment';

const Post = ({ id, comments }) => (
    <div>
        <h1>You are looking a post # {id}</h1>        
        <ul>
        { comments.map( comment => (
            <Comment key={comment.id} {...comment}/>
        ))}
        </ul>
    </div>
);

Post.getInitialProps = async ({query}) => {
    console.log('ID', query.id);
    const reqUrl = `https://jsonplaceholder.typicode.com/comments?postId=${query.id}`;
    const res = await axios.get(reqUrl);
    const { data } = res;
    return {
        ...query,
        comments: data,
    }
}

export default Post