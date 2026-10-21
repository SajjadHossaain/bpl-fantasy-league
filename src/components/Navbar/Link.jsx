import React from 'react';

const Link = ({route}) => {
  // console.log(route.path)
    return (
      <li className='mr-10 font-semibold text-gray-500'>
        <a href={route.path}>{route.name}</a>
      </li>
    );
};

export default Link;