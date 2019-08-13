import React, { Component } from 'react';

export default class UserTableHeader extends Component {
    render() {
        return (
            <thead className="thead-light" >
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Username</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
        )
    }
}