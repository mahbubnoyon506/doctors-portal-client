import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../Hook/UseAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user)
    return (
        <div className="drawer drawer-mobile">
            <input id="my-dashboard" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content pl-7">
                {/*Page content here */}
                <h2 className='text-2xl text-secondary ml-44 lg:ml-0'>Welcome to your dashboard</h2>
                <Outlet></Outlet>
                {/* <label htmlFor="my-dashboard" className="btn btn-primary drawer-button lg:hidden">DashBoard</label> */}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-dashboard" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* Sidebar content here */}
                    <li><Link to='/dashboard'>My Appointment</Link></li>
                    <li><Link to='/dashboard/reviews'>My Reviews</Link></li>
                    <li><Link to='/dashboard/history'>My History</Link></li>
                    { admin && <li><Link to='/dashboard/users'>All Users</Link></li>}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;