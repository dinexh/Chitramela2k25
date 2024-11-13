import './DashboardNav.css';
import Image from 'next/image';
import logo from '@/app/assets/newlogo.png';
import { FaSignOutAlt } from 'react-icons/fa';

interface DashboardNavProps {
    userName?: string;
    userRole?: string;
    onLogout?: () => void;
}

const DashboardNav = ({ 
    userRole = 'Administrator',
    onLogout 
}: DashboardNavProps) => {
    const handleLogout = () => {
        if (onLogout) {
            onLogout();
        }
    };

    return (
        <nav className="dashboard-nav">
            <div className="dashboard-nav-in">
                <div className="dashboard-nav-in-one">
                <Image src={logo} alt="Chitramela Logo" width={120} height={50} />
                </div>
                <div className="dashboard-nav-in-two">
                    <h2>Chitramela {userRole} Portal</h2>
                </div>
                <div className="dashboard-nav-in-three">
                    <button 
                        className="logout-btn"
                        onClick={handleLogout}
                        aria-label="Logout"
                    >
                        <FaSignOutAlt />
                        <span>Logout</span>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default DashboardNav; 