import React from 'react';

import Layout from '../../components/Layout/Layout';

import './LayoutContainer.scss';

const LayoutContainer = () => {
  return (
    <div className='explorer-layout-container screen-container'>
      <div className='explorer-layout'>
        <Layout />
      </div>
    </div>
  );
}

export default LayoutContainer;
