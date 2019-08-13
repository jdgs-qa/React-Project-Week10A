import React, { Component } from 'react';
import UserDetails from './userDetails';
import UserTableHeader from './userTableHeader';
import { UserData } from './userData';

class User extends Component {
    render() {
        return (
            <div>
                <div className="container mx-auto">
                    <table className="table table-striped">
                        <UserTableHeader />
                        <tbody className="tableBody">
                            <UserDetails user={UserData} />
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default User;