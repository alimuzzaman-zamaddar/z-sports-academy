import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Pages/Providers/AuthProviders';
const useAllClasses = () => {
    const { user,loading } = useContext(AuthContext);

    const { refetch, data: AllClasses = [] } = useQuery({
        queryKey: ['class'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/class')
            return res.json();
        },
    })

    return [AllClasses, refetch]

}
export default useAllClasses;