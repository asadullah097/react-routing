
import { useLoaderData } from "react-router-dom"
function Github() {
    const data = useLoaderData()

    return (
        <div className="text-2xl font-bold bg-gray-400 text-center">Github : {data?.login} Follower :{data?.followers}
            <img src={data?.avatar_url} alt="" className="w-300" />
        </div>
    )
}

export default Github
