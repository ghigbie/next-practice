const Index = () => (
    <div>
    Yo!
    </div>
);

Index.getInitialProps = async () => {
    const urlRequest = 'https://jsonplaceholder.typicode.com/todos/';
    console.log("GET INITIAL PROPS CALLED")
    return {};
}

export default Index;