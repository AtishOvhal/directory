import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function SideBard() {
    const location = useLocation();
    const activePath = location.pathname;
  
    // Style for active link
    const activeStyle = {
      color: '#1F6B8D',  // Purple color for the active link
      fontWeight: 'bold',
    }
  return (
    <div className="d-flex flex-column py-3" style={{ height: '100vh', width: '100%' }}>
    <div className="d-flex flex-row align-items-center py-2">
      {/* <img src={imga} alt="Overview" className="me-3" style={{ height: '1.4rem', width: '1.4rem' }} /> */}
      <Link to="/" style={{ textDecoration: 'none', color: activePath === '/' ? '#1F6B8D' : 'inherit', fontWeight: activePath === '/' ? 'bold' : 'normal' }}>
        <div>Overview</div>
      </Link>
    </div>
    <div className="d-flex flex-row align-items-center py-2">
      {/* <img src={imga} alt="People Directory" className="me-3" style={{ height: '1.4rem', width: '1.4rem' }} /> */}
      <Link to="/directory" style={{ textDecoration: 'none', color: activePath === '/directory' ? '#1F6B8D' : 'inherit', fontWeight: activePath === '/directory' ? 'bold' : 'normal' }}>
        <div>People Directory</div>
      </Link>
    </div>
  </div>
  )
}

export default SideBard
