import React, { useState } from 'react';

const DeleteButton = () => {
  const [isDeleted, setIsDeleted] = useState(false);
  const [id,setid]=useState(0);


  function handleIdChange(event) {
    document.getElementById('heading').innerText='';

    setid(event.target.value);
}

  const handleDelete = () => {
    fetch(`http://localhost:8080/api/employees/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        document.getElementById('heading').innerText='delete successful';
        console.log('Employee deleted successfully');
      } else {
        console.error('Failed to delete employee');
        document.getElementById('heading').innerText='failed';
      }
    })
    .catch(error => console.error('Error deleting employee:', error));
  };

  return (
    <div>
        <h1 id='heading'></h1>
    <input 
                type="text"
                value={id || ''}
                onChange={handleIdChange}
                placeholder="Enter The id"
                id='delete'
            />
    <center>
        <button onClick={handleDelete}>Delete</button>
      </center>
    
    </div>
  );
};

export default DeleteButton;
