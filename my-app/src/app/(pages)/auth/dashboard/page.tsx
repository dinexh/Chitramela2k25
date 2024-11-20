"use client";
import './dashboard.css'
import DashboardNav from '@/app/components/Dashboard/DashNav/DashboardNav';
import DashboardSidenav from '@/app/components/Dashboard/DashSide/DashboardSidenav';
import DashboardFooter from '@/app/components/Dashboard/DashFooter/DashboardFooter';

const Dashboard = () => {
    return ( 
        <div className='dashboard-container'>
            <div className="dashboard-container-in">
                <div className="dashboard-container-nav">
                    <DashboardNav/>
                </div>
                <div className="dashboard-container-main">
                    <div className="dashboard-container-main-one">
                        <DashboardSidenav/>
                    </div>
                    <div className="dashbaord-container-main-two">

                    </div>
                </div>
                <div className="dashboard-container-footer">
                    <DashboardFooter />
                </div>
            </div>
        </div>
    );
}
 
export default Dashboard;    