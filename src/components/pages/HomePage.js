import React from 'react';
import{Link} from 'react-router-dom';
import Map from '../maps/Map';
import UserApiBild from '../api/UserApiBild'

const HomePage = () => (
 <div>
     Här är home page<br/>
     <Link to="/Login">Login</Link>
     <Map />
     <UserApiBild/>
</div>
);


export default HomePage;
