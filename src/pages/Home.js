import { useState,useEffect } from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import { Button, Container } from "react-bootstrap";

const Home = ()=>
    {
        const [emp,setEmp]=useState([]);

        

        useEffect(() => {
            let isMounted = true; // Flag to track if the component is mounted
            
            fetch('http://localhost:8080/api/employees', {
                method: 'GET',
                mode: 'cors'
            })
            .then(res => res.json())
            .then(data => {
                if (isMounted) {
                    setEmp(data);
                }
            })
            .catch(error => console.error('Error fetching data:', error));
        
            
            return () => {
                isMounted = false; 
            };
        }, [emp]);
        

           

            const map1 = (
                <Table striped bordered hover id='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Middle Name</th>
                            <th>D.O.B</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Dept No.</th>
                            <th>Dept Name</th>
                            <th>Salary</th>
                            <th>Skills</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {emp.map((employee) => (
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstname}</td>
                                <td>{employee.lastname}</td>
                                <td>{employee.middlename}</td>
                                <td>{employee.dob}</td>
                                <td>{employee.email}</td>
                                <td>{employee.gender}</td>
                                <td>{employee.deptNo}</td>
                                <td>{employee.dept}</td>
                                <td>{employee.salary}</td>
                                <td>{employee.skills}</td>

                            </tr>
                        ))}
                    </tbody>
                </Table>
            );
            
            
            
        return(

            
                <Container fluid>

             <center><h1>Employee Table</h1>
             {map1}
             </center>
             </Container>
             
            
        );
    }
    export default Home;