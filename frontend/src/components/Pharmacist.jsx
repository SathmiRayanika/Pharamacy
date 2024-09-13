import React from 'react';

export const Pharmacist = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <nav style={styles.navbar}>
        <ul style={styles.navList}>
          <li style={styles.navItem}><a href="#home" style={styles.navLink}>Home</a></li>
          <li style={styles.navItem}><a href="#inventory" style={styles.navLink}>Inventory</a></li>
          <li style={styles.navItem}><a href="#orders" style={styles.navLink}>Orders</a></li>
          <li style={styles.navItem}><a href="#reports" style={styles.navLink}>Reports</a></li>
          <li style={styles.navItem}><a href="#logout" style={styles.navLink}>Logout</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <div style={styles.mainContent}>
        <h1>Welcome to the Pharmacist Dashboard</h1>
        <p>Here you can manage your inventory, process orders, and view reports.</p>
        {/* Additional content for the pharmacist dashboard can be added here */}
      </div>
    </div>
  );
}

// Basic inline styles for the component
const styles = {
  navbar: {
    backgroundColor: '#007BFF',
    padding: '10px 20px',
  },
  navList: {
    display: 'flex',
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  },
  navItem: {
    marginRight: '20px',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
  },
  mainContent: {
    padding: '20px',
  }
};
