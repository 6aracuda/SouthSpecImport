import React from 'react';
import logo from '../../assets/logo.svg';
import map from '../../assets/map-ico.svg';
import phone from '../../assets/phone-ico.svg';
import login from '../../assets/user-ico.svg';
import './Header.scss';
export default () => {
   return (
      <div className="header-container">
         <header className="header">
            <div className="logo-wrapper">
               <img src={logo} alt="logo" />
               <h1>PTOR.SU</h1>
            </div>
            <div className="input-wrapper">
               <input
                  type="text"
                  placeholder="Введите номер запчасти или VIN"
               />
            </div>
            <div className="map-wrapper">
               <img src={map} alt="map" />
               <a href="https://yandex.ru/maps/-/CDVP70OG">Ставрополь</a>
            </div>
            <div className="phone-wrapper">
               <img src={phone} alt="phone-ico" />
               <p>+7 967 821-64-92</p>
            </div>
            <div className="user-wrapper">
               <img src={login} alt="login-ico" />
               <a href="#">Авторизация</a>
            </div>
         </header>
      </div>
   );
};
