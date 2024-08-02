// src/components/Profile.jsx
import React, { useContext } from 'react';
import { motion } from 'framer-motion';

import { AuthContext } from '../contect/AuthProvider';

const Profile = () => {
 const {user} = useContext(AuthContext);
  return (
    <motion.div
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 50 }}
      className="max-w-lg mx-auto bg-gray-900 text-white p-8 rounded-lg shadow-lg"
    >
      <h2 className="text-3xl font-bold mb-4 text-center">Profile</h2>
      <div className="flex items-center mb-4">
        <img
          src="https://via.placeholder.com/80"
          alt= {user?.PhotoURL}
          className="w-20 h-20 rounded-full mr-4"
        />
        <div>
          <h3 className="text-xl font-semibold">John Doe</h3>
          <p className="text-gray-400">@johndoe</p>
        </div>
      </div>
      <div className="mb-4">
        <h4 className="text-lg font-medium">Projects</h4>
        <p className="text-gray-300">15</p>
      </div>
      <div className="mb-4">
        <h4 className="text-lg font-medium">Books Visited</h4>
        <p className="text-gray-300">1200</p>
      </div>
      <div className="mb-4">
        <h4 className="text-lg font-medium">Followers</h4>
        <p className="text-gray-300">500</p>
      </div>
      <div className="mb-4">
        <h4 className="text-lg font-medium">Following</h4>
        <p className="text-gray-300">300</p>
      </div>
    </motion.div>
  );
};

export default Profile;
