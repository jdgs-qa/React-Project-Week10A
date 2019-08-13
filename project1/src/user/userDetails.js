import React, { Component } from 'react';

export default class UserDetails extends Component {
    render() {
        return this.props.user.map((user, index) => {
            return (<tr key={index}>
                <td>{user.userId}</td>
                <td>{user.userName}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
            </tr>)
        }
        )
    }
}