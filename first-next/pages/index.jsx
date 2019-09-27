import axios from 'axios';

const Index = ({posts}) => (
    <div>
    Yo! {posts[0].userId}
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