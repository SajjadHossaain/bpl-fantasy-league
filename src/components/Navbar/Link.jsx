import React from 'react';

const Link = ({route}) => {
    return (
      <li className='mr-10 font-semibold text-gray-500'>
        <a href="">{route.name}</a>
      </li>
    );
};

export default Link;