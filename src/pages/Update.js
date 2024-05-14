import { useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

const Update = () => {
    const [id, setId] = useState(null);
    const [data, setData] = useState(null);
    const [formData, setFormData] = useState({});

    useEffect(() => {
        if (id !== null) {
            fetch(`http://localhost:8080/api/update?id=${id}`, {
                method: 'GET',
                mode: 'cors'
            })
            .then(res => res.json())
            .then(data => {
               if(data.id!=null)
                {
                setData(data);
                setFormData(data); 
                document.getElementById('heading').innerText='';
                }
                else
                {
                    setData(null);
                    document.getElementById('heading').innerText='No Id Present';
                }
            })
            .catch(error => {console.error('Error fetching data:', error)
            document.getElementById('heading').innerText='No Id Present'
            });

        }
    }, [id]);

    function handleIdChange(event) {
        setId(event.target.value);
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    function handleSubmit(event) {
        event.preventDefault();
        fetch(`http://localhost:8080/api/updatebyid/{formData.id}`, {
            method: 'PUT',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(res => {
            if (res.ok) {
                console.log('Data updated successfully!');
                document.getElementById('heading').innerText='updated succesfully';
                setData(formData);
            } else {
                console.error('Failed to update data');
            }
        })
        .catch(error => console.error('Error updating data:', error));
    }

    return (
        <Container>

            <h1 id='heading'></h1>
            <input 
                type="text"
                value={id || ''}
                onChange={handleIdChange}
                placeholder="Enter The id"
                id='update'
            />
            {data && (
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="firstname">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="firstname"
                            value={formData.firstname}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="lastname">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="lastname"
                            value={formData.lastname}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="middlename">
                        <Form.Label>Middle Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="middlename"
                            value={formData.middlename}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="mobileno">
                        <Form.Label>Mobile No</Form.Label>
                        <Form.Control
                            type="text"
                            name="mobileno"
                            value={formData.mobileNumber}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="dob">
                        <Form.Label>Date of BIRTH</Form.Label>
                        <Form.Control
                            type="text"
                            name="dob"
                            value={formData.dob}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="gender">
                        <Form.Label>Gender</Form.Label>
                        <Form.Control
                            type="text"
                            name="gender"
                            value={formData.gender}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="deptno">
                        <Form.Label>Dept No.</Form.Label>
                        <Form.Control
                            type="text"
                            name="deptno"
                            value={formData.deptno}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="dept">
                        <Form.Label>dept</Form.Label>
                        <Form.Control
                            type="text"
                            name="dept"
                            value={formData.dept}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="salary">
                        <Form.Label>Salary</Form.Label>
                        <Form.Control
                            type="text"
                            name="salary"
                            value={formData.salary}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="skills">
                        <Form.Label>Skills</Form.Label>
                        <Form.Control
                            type="text"
                            name="skills"
                            value={formData.skills}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Update
                    </Button>
                </Form>
            )}
        </Container>
    );
}

export default Update;
