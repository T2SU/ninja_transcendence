import { useEffect } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useParams,
    useSearchParams,
  } from "react-router-dom";
import './index.scss';

function IntraLogin() {
    const url = process.env.REACT_APP_INTRA42_LOGIN_API_URL as string;

    useEffect(() => console.log(url), []);
    function handleClick() {
        window.location.href = url;
    }

    return (
        <button type="submit" className="btn btn-primary" onClick={handleClick}>42 Login</button>
    );
}

function IntraLoginRedirect() {
    const [searchParams, setSearchParams] = useSearchParams();

    const code = searchParams.get("code");
    return (
        <>
            <h1>Login...</h1>
            <p>Code: {code}</p>
        </>
    );
}

export default () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<IntraLogin />} />
                <Route path="/redirect" element={<IntraLoginRedirect />} />
            </Routes>
        </Router>
    );
};
