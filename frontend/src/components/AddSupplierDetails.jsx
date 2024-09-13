/*import React, { useState } from 'react';
import axios from 'axios';
import './AddSupplierDetails.css';

const AddSupplierDetails = () => {
  const [supplierID, setSupplierID] = useState('');
  const [supplierName, setSupplierName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleAddSupplier = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/auth/addSupplier', {
      supplierID,
      supplierName,
      contactNumber,
      email
    }).then((response) => {
      alert(response.data.message);
    }).catch((error) => {
      console.error('There was an error adding the supplier:', error);
    });
  };

  const handleUpdateSupplier = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/auth/updateSupplier/${supplierID}`, {
      supplierName,
      contactNumber,
      email
    }).then((response) => {
      alert(response.data.message);
    }).catch((error) => {
      console.error('There was an error updating the supplier:', error);
    });
  };

  const handleDeleteSupplier = () => {
    axios.delete(`http://localhost:3000/auth/deleteSupplier/${supplierID}`)
      .then((response) => {
        alert(response.data.message);
      }).catch((error) => {
        console.error('There was an error deleting the supplier:', error);
      });
  };

  return (
    <div className="add-supplier-container">
      <h2>Add Supplier Details</h2>
      <form className="supplier-form" onSubmit={handleAddSupplier}>
        <div className="form-group">
          <label>Supplier ID</label>
          <input 
            type="text" 
            placeholder="Enter Supplier ID" 
            value={supplierID} 
            onChange={(e) => setSupplierID(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <label>Supplier Name</label>
          <input 
            type="text" 
            placeholder="Enter Supplier Name" 
            value={supplierName} 
            onChange={(e) => setSupplierName(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <label>Contact Number</label>
          <input 
            type="text" 
            placeholder="Enter Contact Number" 
            value={contactNumber} 
            onChange={(e) => setContactNumber(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input 
            type="email" 
            placeholder="Enter Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <div className="form-buttons">
          <button type="submit" className="loading-button">Add Supplier</button>
          <button type="button" className="update-button" onClick={handleUpdateSupplier}>Update Details</button>
          <button type="button" className="delete-button" onClick={handleDeleteSupplier}>Delete Details</button>
        </div>
      </form>
    </div>
  );
};

export default AddSupplierDetails;*/

import React, { useState } from 'react';
import axios from 'axios';
import './AddSupplierDetails.css';

const AddSupplierDetails = () => {
  const [supplierID, setSupplierID] = useState('');
  const [supplierName, setSupplierName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleAddSupplier = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/auth/addSupplier', {
      supplierID,
      supplierName,
      contactNumber,
      email
    }).then((response) => {
      alert(response.data.message);
    }).catch((error) => {
      console.error('There was an error adding the supplier:', error);
    });
  };

  const handleUpdateSupplier = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/auth/updateSupplier/${supplierID}`, {
      supplierName,
      contactNumber,
      email
    }).then((response) => {
      alert(response.data.message);
    }).catch((error) => {
      console.error('There was an error updating the supplier:', error);
    });
  };

  const handleDeleteSupplier = (e) => {
    e.preventDefault();

    if (!supplierID) {
        alert('Please enter a valid Supplier ID to delete.');
        return;
    }

    axios.delete(`http://localhost:3000/auth/deleteSupplier/${supplierID}`)
        .then((response) => {
            alert(response.data.message);
            setSupplierID(''); // Clear the input after deletion
            setSupplierName('');
            setContactNumber('');
            setEmail('');
        })
        .catch((error) => {
            console.error('There was an error deleting the supplier:', error);
            alert('Failed to delete the supplier. Please try again.');
        });
};

  return (
    <div className="add-supplier-container">
      <h2>Add Supplier Details</h2>
      <form className="supplier-form" onSubmit={handleAddSupplier}>
        <div className="form-group">
          <label>Supplier ID</label>
          <input 
            type="text" 
            placeholder="Enter Supplier ID" 
            value={supplierID} 
            onChange={(e) => setSupplierID(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <label>Supplier Name</label>
          <input 
            type="text" 
            placeholder="Enter Supplier Name" 
            value={supplierName} 
            onChange={(e) => setSupplierName(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <label>Contact Number</label>
          <input 
            type="text" 
            placeholder="Enter Contact Number" 
            value={contactNumber} 
            onChange={(e) => setContactNumber(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input 
            type="email" 
            placeholder="Enter Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <div className="form-buttons">
          <button type="submit" className="loading-button">Add Supplier</button>
          <button type="button" className="update-button" onClick={handleUpdateSupplier}>Update Details</button>
          <button type="button" className="delete-button" onClick={handleDeleteSupplier}>Delete Details</button>
        </div>
      </form>
    </div>
  );
};

export default AddSupplierDetails;

