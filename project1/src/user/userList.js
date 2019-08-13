import React from 'react';
import UserData from './userData'

export function UserList(props) {
    return (
        <tbody className="tableBody">
            { return ( while(i<UserData.length) {
                <UserDetails user={UserData[i]} />
            })}
        </tbody>
    )
}