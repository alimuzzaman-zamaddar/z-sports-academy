import { useQuery } from '@tanstack/react-query'

const useAllUsers = () => {

    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://zamaddar-sports-club-server.vercel.app/users')
            return res.json();
        },
    })

    return [users, refetch]

}
export default useAllUsers;