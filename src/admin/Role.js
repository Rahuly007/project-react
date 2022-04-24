import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


export const Role = () => {

    const [State, setState] = useState([]);

    const getRole = () => {
        axios.get('/roles').then(res => {
            // console.log(res.data.data);
            setState(res.data.data);
        })

    }

    useEffect(() => {
        getRole();

    });

    return (
        <React.Fragment>

            <table class="table table-striped table-dark">
                <thead>
                    <tr>
                        <th scope="col">_id</th>
                        <th scope="col">Roles</th>
                    </tr>
                </thead>
                <tbody>


                    {
                        State.map((item) => {
                            return (
                                <tr> 
                                    <td>{item._id}</td>
                                    <td>{item.roleName}</td>
                                </tr>
                            )
                        })
                    }



                </tbody>
            </table>
        </React.Fragment>
    )
}
