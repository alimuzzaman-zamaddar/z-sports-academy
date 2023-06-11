import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Pages/Providers/AuthProviders';
const useClasses = () => {
    const { user } = useContext(AuthContext);

    const { refetch, data: selectedClass = [] } = useQuery({
        queryKey: ['select', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://zamaddar-sports-club-server.vercel.app/select?email=${user?.email}`)
            return res.json();
        },
    })

    return [selectedClass, refetch]

}
export default useClasses;