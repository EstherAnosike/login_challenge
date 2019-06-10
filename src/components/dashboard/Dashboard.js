import React from 'react';

import './Dashboard.css';
import logo from './../../images/user.png';

const Dashboard = () => {
    return ( 
        <div>
            <aside className="side-nav">
                <div className="heading">
                    <img src={logo} alt="userPic" />
                    <div className="info">
                        <h3><a href="dashboard.html">Esther Anosike</a></h3>
                        <p>Lorem ipsum dolor sit amet co nsectetur.</p>
                    </div>
                </div>
                    <ul className="categories">
                        <li><a href="dashboard"> Page views</a>
                        </li>
                        <li><a href="dashboard"> Registered users</a>
                        </li>
                        <li><a href="dashboard"> Product sales</a>
                        </li>
                        <li><a href="dashboard"> Transactions</a>
                        </li>
                        <li><a href="dashboard"> User testimonials</a>
                        </li>
                    </ul>
            </aside>
            <section className="body-bg">
                <div className="main">
                    <p>Admin Dashboard</p>
                </div>

                <div className="welcome">
                    <h2>Welcome to Dashboard</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor. sed do eiusmod tempor</p>
                </div>

                <div className="stats">
                    <div className="box">
                        <div className="info">
                            <h1>1,245  <small>Emails</small></h1>
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>    
                    </div>
                    <div className="box">
                        <div className="info">
                            <h1>34 <small>Projects</small></h1> 
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="info">
                            <h1>5,245 <small>Users</small></h1> 
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                </div>

                <div className='dashboard text-center'>
                    <div className="box">
                        <h3>35,154</h3>
                        <p className="lead">Page views</p>
                    </div>
                    <div className="box jaune">
                        <h3>3,245</h3>
                        <p className="lead">Registered users</p>
                    </div>
                    <div className="box salmon">
                        <h3>7,154</h3>
                        <p className="lead">Product sales</p>
                    </div>
                    <div className="box sweet-blue">
                        <h3>10,174</h3>
                        <p className="lead">Transactions</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Dashboard;