import './DashboardSidenav.css';
import Link from 'next/link';
import { 
    FaHome, 
    FaChartBar, 
    FaUserCircle, 
    FaCog, 
    FaMoneyBill
} from 'react-icons/fa';

interface DashboardSidenavProps {
    userName?: string;
    userRole?: string;
}

const DashboardSidenav = ({ userName = 'Admin User', userRole = 'Administrator' }: DashboardSidenavProps) => {
    return (
        <aside className="dashboard-sidenav">
            <div className="dashboard-sidebnav-in">
                <div className="admin-info">
                    <div className="admin-info-in">
                        <h3>{userName}</h3>
                        <span className="user-role">{userRole}</span>
                    </div>
                </div>
                <div className="dashboard-sidebnav-menu">
                    <div className="dashboard-sidebav-menu-in">
                        <div className="dashboard-nav-links">
                            <Link href="/auth/dashboard" className="dashboard-nav-link">
                                <FaHome /> <span>Home</span>
                            </Link>
                            <Link href="/auth/dashboard/analytics" className="dashboard-nav-link">
                                <FaChartBar /> <span>Analytics</span>
                            </Link>
                            <Link href="/auth/dashboard/payments" className="dashboard-nav-link">
                                <FaMoneyBill /> <span>Payments</span>
                            </Link>
                            <Link href="/auth/dashboard/users" className="dashboard-nav-link">
                                <FaUserCircle /> <span>User Management</span>
                            </Link>
                            <Link href="/auth/dashboard/settings" className="dashboard-nav-link">
                                <FaCog /> <span>Settings</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default DashboardSidenav; 