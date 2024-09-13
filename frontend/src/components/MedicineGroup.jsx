import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MedicineGroup.css';

const MedicineGroup = () => {
  const [showInput, setShowInput] = useState(false);
  const [newGroupName, setNewGroupName] = useState('');
  const [newGroupQuantity, setNewGroupQuantity] = useState('');
  const [groups, setGroups] = useState([
    { name: 'Generic Medicine', count: 2 },
    { name: 'Diabetes', count: 32 },
  ]);

  const navigate = useNavigate();

  const handleAddGroupClick = () => {
    setShowInput(true);
  };

  const handleNameChange = (e) => {
    setNewGroupName(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setNewGroupQuantity(e.target.value);
  };

  const handleAddGroupSubmit = () => {
    if (newGroupName && newGroupQuantity) {
      const newGroup = {
        name: newGroupName,
        count: parseInt(newGroupQuantity, 10),
      };
      setGroups([...groups, newGroup]);
      setNewGroupName('');
      setNewGroupQuantity('');
      setShowInput(false);
    }
  };

  const handleViewDetail = (groupName) => {
    navigate(`/group/${groupName}`); // Corrected template string format with backticks
  };

  return (
    <div className="medicine-group-container">
      <div className="header">
        <h2>Inventory Medicine Groups ({groups.length})</h2>
        <p>List of medicines groups.</p>
      </div>

      <div className="top-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Search Medicine Groups..."
        />
        <button className="add-group-button" onClick={handleAddGroupClick}>
          + Add New Group
        </button>
      </div>

      {showInput && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Add Medicine</h3>
            <input
              type="text"
              placeholder="Enter group name"
              value={newGroupName}
              onChange={handleNameChange}
              className="add-group-input"
            />
            <input
              type="number"
              placeholder="Enter quantity"
              value={newGroupQuantity}
              onChange={handleQuantityChange}
              className="add-group-input"
            />
            <div className="button-container">
              <button
                className="submit-group-button"
                onClick={handleAddGroupSubmit}
              >
                Add Group
              </button>
              <button
                className="cancel-group-button"
                onClick={() => setShowInput(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <table className="medicine-group-table">
        <thead>
          <tr>
            <th>Group Name</th>
            <th>No of Medicines</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {groups.map((group, index) => (
            <tr key={index}>
              <td>{group.name}</td>
              <td>{group.count}</td>
              <td>
                <button
                  className="view-button"
                  onClick={() => handleViewDetail(group.name)}
                >
                  View Full Detail »
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MedicineGroup;
