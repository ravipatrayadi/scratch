import { useRouteError } from "react-router-dom"

const Error = () => {
    const err = useRouteError();
    return (
        <>
            <h1>Error Page</h1>
            <div> {err.status} : {err.statusText}</div>
        </>
    )
}

export default Error; 