import React, { useEffect } from 'react'
import { deleteData, getData } from '../../redux/actions/user';
import { useDispatch, useSelector } from 'react-redux';
import AddUser from '../forms/AddUser';
import FormikAddUser from '../forms/FormikAddUser';

function UserList() {

    let dispatch = useDispatch();
    let data = useSelector(state => state.user.users);


    useEffect(() => {
        dispatch(getData());
    }, []);


    return (
        <>
            <AddUser />
            <FormikAddUser />
            <table>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>College</th>
                        <th>Company</th>
                        <th>Age</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.college}</td>
                            <td>{user.company}</td>
                            <td>{user.age}</td>
                            <td>{user.ph}</td>
                            <td><button onClick={() => dispatch(deleteData(index + 1))}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default UserList;