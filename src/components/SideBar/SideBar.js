import React from 'react';

import { sideBarItems } from './SideBarItems';

import './SideBar.scss';

const SideBar = () => {
  return (
    <div className='explorer-sidebar'>
      <div className='sidebar'>
        <div className='window-icons left__padding'>
          <div className='close' />
          <div className='minimize' />
          <div className='expand' />
        </div>
        <div className='domains-wrapper'>
          {
            sideBarItems.map(item => 
              (
                <div key={Math.random()} className='domain one'>
                  <p className='domain-label left__padding'>{item.label}</p>
                  {item.items.map(sideBarItem => {
                    return (
                      <div className={`sidebar-item ${sideBarItem.activeTab && sideBarItem.activeTab ? 'active': ''}`} key={sideBarItem.id}>
                        <div className='sidebar-icons'>
                          <img src={require(`../../assets/images/${sideBarItem.img}`)} alt={sideBarItem.name} />
                        </div>
                        <p className='sidebar-item-label'>{sideBarItem.name}</p>
                      </div>
                    );
                  })}
                </div>
              )
            )
          }
        </div>
      </div>
    </div>
  );
}

export default SideBar;
