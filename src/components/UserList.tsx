import React, { useEffect } from 'react'
import { useTypeSelector } from '../hooks/useTypeSelector'
import { useDispatch } from 'react-redux'
import { fetchUsers } from '../store/action-creators/user'
import { UseActions } from '../hooks/useActions'

export default function UserList()  {
    const {error,loading,users} = useTypeSelector(state => state.user)
    const {fetchUsers} = UseActions()

    useEffect(() => {
      fetchUsers()
    }, []);

    if (loading) {
      return <h1>Идет загрузка</h1>
    }
    if(error) {
      return <h1>{error}</h1>
    }
    
  return (
    <div>
      {users.map(user => <div>{user.name}</div>)}
    </div>
  )
}
