// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Dashboard.css';
import { FaBell, FaInfoCircle, FaDollarSign, FaExclamationTriangle, FaListUl, FaBoxes } from 'react-icons/fa'; // Import additional icons

const Dashboard = () => {
  const [dateTime, setDateTime] = useState(new Date());
  const [greeting, setGreeting] = useState('');
  const [totalMedicines, setTotalMedicines] = useState(0);
  const [expiringMedicines, setExpiringMedicines] = useState([]);
  const [showExpiringAlert, setShowExpiringAlert] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the total number of medicines
    axios.get('http://localhost:3000/auth/medicines/count')
      .then(response => {
        if (response.data.status) {
          setTotalMedicines(response.data.totalMedicines);
        }
      })
      .catch(error => {
        console.error('Error fetching medicine count:', error);
      });

    // Fetch expiring medicines
    axios.get('http://localhost:3000/auth/medicines/expiring-soon')
      .then(response => {
        if (response.data.status) {
          setExpiringMedicines(response.data.expiringMedicines);
          setShowExpiringAlert(response.data.expiringMedicines.length > 0);
        }
      })
      .catch(error => {
        console.error('Error fetching expiring medicines:', error);
      });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const currentTime = new Date();
      setDateTime(currentTime);
      setGreeting(getGreeting(currentTime));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getGreeting = (currentTime) => {
    const hour = currentTime.getHours();
    if (hour < 12) {
      return 'Good Morning!';
    } else if (hour < 15) {
      return 'Good Afternoon!';
    } else {
      return 'Good Evening!';
    }
  };

  const handleLogout = () => {
    console.log("Logged out");
    navigate('/login');
  };

  const handleNotificationClick = () => {
    setShowExpiringAlert(!showExpiringAlert);
  };

  const handleTechnicalHelpClick = () => {
    navigate('/technical');
  };

  const handleInventoryClick = () => {
    navigate('/inventory');
  };

  const handleMedicineListClick = () => {
    navigate('/medlist');
  };

  const handleMedicineGroupClick = () => {
    navigate('/medgroup');
  };

  const handleContactManagementClick = () => {
    navigate('/contact');
  };

  const handleSupplierDetailsClick = () => {
    navigate('/supplierDetails');
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>Union Pharmacy</h2>
        </div>
        <ul className="sidebar-menu">
          <li><a href="#" onClick={(e) => e.preventDefault()}>Dashboard</a></li>
          <li>
            <a href="#" onClick={(e) => { e.preventDefault(); handleInventoryClick(); }}>Inventory</a>
            <ul className="submenu">
              <li><a href="#" onClick={(e) => { e.preventDefault(); handleMedicineListClick(); }}><FaListUl /> List of Medicines</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); handleMedicineGroupClick(); }}><FaBoxes /> Medicine Groups</a></li>
            </ul>
          </li>
          <li><a href="#">Reports</a></li>
          <li><a href="#" onClick={handleContactManagementClick}>Contact Management</a></li>
          <li><a href="#">Notifications</a></li>
          <li><a href="#" onClick={handleTechnicalHelpClick}>Get Technical Help</a></li>
          <li><a href="#" onClick={handleSupplierDetailsClick}>Supplier Details</a></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Top Bar */}
        <div className="top-bar">
          <input type="text" placeholder="Search for anything here..." className="search-bar" />
          <div className="top-bar-right">
            <span>{greeting}</span>
            <span>{dateTime.toLocaleDateString()} · {dateTime.toLocaleTimeString()}</span>
            <FaBell className="notification-icon" onClick={handleNotificationClick} />
            <button onClick={handleLogout} className="logout-button">Logout</button>
          </div>
        </div>

        {/* Notification Alert */}
        {showExpiringAlert && (
          <div className="expiring-alert">
            <h3>Medicines Expiring Soon:</h3>
            <ul>
              {expiringMedicines.map((medicine) => (
                <li key={medicine.medicineID}>
                  {medicine.medicineName} - Expires on {new Date(medicine.expireDate).toLocaleDateString()}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Dashboard Overview */}
        <div className="dashboard-overview">
          <div className="card">
            <FaInfoCircle size={40} />
            <h3>Good</h3>
            <p>Inventory Status</p>
            <button>View Detailed Report</button>
          </div>
          <div className="card">
            <FaDollarSign size={40} />
            <h3>Rs. 8,55,875</h3>
            <p>Revenue: Jan 2022</p>
            <button>View Detailed Report</button>
          </div>
          <div className="card">
            <FaExclamationTriangle size={40} />
            <h3>01</h3>
            <p>Medicine Shortage</p>
            <button>Resolve Now</button>
          </div>
        </div>

        {/* Inventory Section with Three Selections */}
        <div className="dashboard-sections">
          {/* Inventory List of Medicines */}
          <div className="section">
            <h4><FaListUl /> Inventory List of Medicines</h4>
            <p>total medicines</p>
            <button onClick={handleMedicineListClick}>View List</button>
          </div>
          {/* Medicine Group */}
          <div className="section">
            <h4><FaBoxes /> Medicine Group</h4>
            <p>24 total groups</p>
            <p>11 medicines</p>
            <button onClick={handleMedicineGroupClick}>View Groups</button>
          </div>
          {/* Inventory Overview */}
          <div className="section">
            <h4>Inventory Overview</h4>
            <p>{totalMedicines} Total Medicines</p>
            <p>24 Medicine Groups</p>
            
            <button onClick={handleInventoryClick}>Go to Inventory</button>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Dashboard;
