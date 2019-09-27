import axios from 'axios';
import Link from 'next/link'

const Index = ({ posts }) => (
    <div>
        <ul>
        {posts.map( post => (
            <li key={post.id}>
                <Link href={`/post/?id=${post.id}`}>
                    <a>{post.title}</a>
                </Link>
            </li>))
        }
        </ul>
    </div>
);

Index.getInitialProps = async () => {
    const urlRequest = 'https://jsonplaceholder.typicode.com/todos/';
    const res = await axios.get(urlRequest);
    const {data} = await res;
    console.log(data);
    return {
        posts: data
    };
}

export default Index;