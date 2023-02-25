import useFetch from '../useFetch'

const Login = () => {
    var url: string = "https://api.quarza.online/login"
    const{data, pending, error } =  useFetch(url)
    console.log('Fetching URL: ', url);

    return (
        <div>
            <p> login: {data} </p>
        </div>
    );
}

export default Login;
