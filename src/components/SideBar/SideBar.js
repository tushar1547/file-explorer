import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { sideBarItems } from './SideBarItems';

import './SideBar.scss';

class SideBar extends Component {
  render () {
    return (
      <div className='explorer-sidebar'>
        <div className='sidebar'>
          <div className='window-icons'>
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
                      <p className='domain-label'>Favourites</p>
                      {item.fav.map(itemFav => {
                        return (
                          <div className='sidebar-item' key={itemFav.id}>
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
                      <p className='domain-label'>iCloud</p>
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
}

export default SideBar;
