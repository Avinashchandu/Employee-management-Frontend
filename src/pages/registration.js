import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form } from 'react-bootstrap';
import { FloatingLabel } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import '../App.css';
import { useState } from 'react';

const Registration = () => {
    const [formData, setFormData] = useState({});
    const [state,seState]=useState(true);

    const newregister = () => {
        seState(true);
        document.getElementById('heading').innerText = 'Registration form';
        const button = document.getElementById('newButton');
        if (button) {
            const buttonContainer = button.parentNode;
            buttonContainer.removeChild(button);
        }
    }
    

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:8080/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (response.ok) {
                console.log('Registration successful');
                seState(false);
                document.getElementById('heading').innerText='registration Sussessful';
                const buttonContainer = document.getElementById('button'); 
                const newButton = document.createElement('button'); 
                 newButton.textContent = 'Register New Employee'; 
                 newButton.addEventListener('click', newregister); 
                 newButton.id='newButton'
                 buttonContainer.appendChild(newButton); 

            } else {
                console.error('Registration failed');
                document.getElementById('heading').innerText='registration failed';
            }
        })
        .catch(error => console.error('Error during registration:', error));
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className='container'>
            <Container fluid>
                <center>
                    <div id='regheading'>
                        <h1 id='heading'> Registration form</h1>
                        <div id='button'></div>
                    </div>
                 {state &&   <Form id='reg' onSubmit={handleSubmit}>
                        
                        <FloatingLabel controlId="firstname" label="First Name">
                            <Form.Control type="input" placeholder="Enter Your lastname" name="firstname" onChange={handleInputChange} />
                        </FloatingLabel>

                        <FloatingLabel controlId="lastname" label="Last Name">
                            <Form.Control type="input" placeholder="Enter Your lastname" name="lastname" onChange={handleInputChange} />
                        </FloatingLabel>

                        <FloatingLabel controlId="middlename" label="Middle Name">
                            <Form.Control type="input" placeholder="Enter Your Middle name" name="middlename" onChange={handleInputChange} />
                        </FloatingLabel>

                        <FloatingLabel controlId="email" label="Email">
                            <Form.Control type="input" placeholder="Enter Your email" name="email" onChange={handleInputChange} />
                        </FloatingLabel>

                        <FloatingLabel controlId="password" label="Password">
                            <Form.Control type="input" placeholder="Enter Your Password" name="password" onChange={handleInputChange} />
                        </FloatingLabel>


                        <FloatingLabel controlId="dob" label="Date Of Birth">
                            <Form.Control type="input" placeholder="Enter Your dob" name="dob" onChange={handleInputChange} />
                        </FloatingLabel>

                        <FloatingLabel controlId="gender" label="Gender">
                            <Form.Control type="input" placeholder="Enter Your Date Of Birth" name="dob" onChange={handleInputChange} />
                        </FloatingLabel>


                        <FloatingLabel controlId="mobileno" label="Mobile Number">
                            <Form.Control type="input" placeholder="Enter Your Mobile No" name="mobileNumber" onChange={handleInputChange} />
                        </FloatingLabel>


                        <FloatingLabel controlId="deptno" label="Dept No">
                            <Form.Control type="input" placeholder="Enter Your Dept" name="deptno" onChange={handleInputChange} />
                        </FloatingLabel>


                        <FloatingLabel controlId="dept" label="dept">
                            <Form.Control type="input" placeholder="Enter Your dept" name="dept" onChange={handleInputChange} />
                        </FloatingLabel>


                        <FloatingLabel controlId="salary" label="Salary">
                            <Form.Control type="input" placeholder="Enter Your Salary" name="salary" onChange={handleInputChange} />
                        </FloatingLabel>


                        <FloatingLabel controlId="skills" label="Skills">
                            <Form.Control type="input" placeholder="Enter Your Skill" name="skiils" onChange={handleInputChange} />
                        </FloatingLabel>
                       
                        <Button variant="primary" type="submit">Submit</Button>
                    </Form> }
                </center>
            </Container>
        </div>
    );
}

export default Registration;
