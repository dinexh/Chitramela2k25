"use client";
import './dashboard.css'
import DashboardNav from '@/app/components/Dashboard/DashNav/DashboardNav';
import DashboardSidenav from '@/app/components/Dashboard/DashSide/DashboardSidenav';
import DashboardFooter from '@/app/components/Dashboard/DashFooter/DashboardFooter';

const Dashboard = () => {
    return ( 
        <div className='dashboard-container'>
            <DashboardNav />
            <div className="dashboard-content">
                <DashboardSidenav />
                <h1>Welcome to Admin Portal</h1>
            </div>
            <DashboardFooter />
        </div>
    );
}
 
export default Dashboard;    