import React from 'react';
import { Link } from "react-router-dom";

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
            sideBarItems.map(item => {
              if (item.fav) {
                return (
                  <div key={Math.random()} className='domain one'>
                    <p className='domain-label left__padding'>Favourites</p>
                    {item.fav.map(itemFav => {
                      return (
                        <div className={`sidebar-item ${itemFav.activeTab && itemFav.activeTab ? 'active': ''}`} key={itemFav.id}>
                          <div className='sidebar-icons'>
                            <img src={require(`../../assets/images/${itemFav.img}`)} alt={itemFav.name} />
                          </div>
                          <Link to={itemFav.path}>{itemFav.name}</Link>
                        </div>
                      )
                    })}
                  </div>
                )
              }
              if (item.icloud) {
                return (
                  <div key={Math.random()} className='domain two'>
                    <p className='domain-label left__padding'>iCloud</p>
                    {item.icloud.map(itemCloud => {
                      return (
                        <div className='sidebar-item' key={itemCloud.id}>
                          <div className='sidebar-icons'>
                            <img src={require(`../../assets/images/${itemCloud.img}`)} alt={itemCloud.name} />
                          </div>
                          <Link to={itemCloud.path}>{itemCloud.name}</Link>
                        </div>
                      )
                    })}
                  </div>
                )
              }
            })
          }
        </div>
      </div>
    </div>
  );
}

export default SideBar;
