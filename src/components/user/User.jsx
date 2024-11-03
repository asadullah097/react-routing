import { useParams } from 'react-router-dom'

function User() {
    const { userId } = useParams()
    return (
        <div className='text-2xl font-bold bg-orange-400 text-center'>User :{userId}</div>
    )
}

export default User