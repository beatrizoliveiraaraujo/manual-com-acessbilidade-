import '../../assets/css/css_universal/Navbar.css'
import imgTop from '../../assets/img/imgTopo.png'
import boschLogoFigura from '../../assets/img/logo-p1.svg'
import boschLogo from '../../assets/img/Bosch-logo.png'
import { Translate } from './Translate';
import { ButtonLogoff } from '../screen-crud/ButtonLogoff'
import { useState } from 'react'
import { Navbarsearch } from './Navbarsearch';
import Autocontraste from './autocontraste';

export const Navbar = (props) => {

    return (
        <div className="navbar-div" >
            <div className='navbar-div-1'>
                <img className='navbar-div-img-1' src={imgTop} alt="" />
            </div>
            <div className='navbar-div-2'>
                <span className='navbar-div-2-span'>
                <svg viewBox="0 0 182.431 181.6" xmlns="http://www.w3.org/2000/svg" className='logo-svg' >
                <path d="M90.8 0C40.7 0 0 40.7 0 90.8s40.7 90.8 90.8 90.8 90.8-40.7 90.8-90.8S140.9 0 90.8 0zm0 172.5c-45.1 0-81.7-36.7-81.7-81.7S45.7 9.1 90.8 9.1s81.7 36.7 81.7 81.7-36.6 81.7-81.7 81.7z"/>
                <path d="M123.2 32.6c-.3-.2-.7-.3-1.1-.3-1.2 0-2.1.9-2.1 2.1v28.4c0 1-.8 1.8-1.8 1.8h-55c-1 0-1.7-.8-1.8-1.8V34.4c0-.4-.1-.7-.3-1.1-.6-1-1.9-1.3-2.9-.7-20.3 12.5-32.6 34.2-32.6 58.2s12.3 45.7 32.8 58.2c.3.2.7.3 1.1.3 1.2 0 2.1-.9 2.1-2.1v-28.4c0-1 .8-1.7 1.8-1.8h55c1 0 1.8.8 1.8 1.8v28.4c0 .4.1.7.3 1.1.6 1 1.9 1.3 2.9.7 20.5-12.5 32.8-34.2 32.8-58.2s-12.5-45.7-33-58.2zM51 126.4l.3 3.4-2.2-2.7c-16.9-21.3-16.9-51.4 0-72.7L51 52l.3-.3-.3 3.5c-.3 2.8-.4 5.7-.4 8.6v53.9c0 2.9.2 5.8.4 8.7zm69-22c0 1-.8 1.8-1.8 1.8h-55c-1 0-1.7-.8-1.8-1.8V77.2c0-1 .8-1.8 1.8-1.8h55c1 0 1.8.8 1.8 1.8zm12.4 22.7-2.2 2.7.3-3.4c.3-2.8.4-5.7.4-8.6v-54c0-2.9-.1-5.8-.4-8.6l-.1-1.5-.1-1.6v-.4l2.1 2.7c8.2 10.2 12.7 23.2 12.7 36.3s-4.5 26.2-12.7 36.4z"/>
                </svg>
                <svg viewBox="229.9 20.345 622.535 141.588" xmlns="http://www.w3.org/2000/svg"className='bosch.svg'>
                <path d="M318.6 89.2c-.5-.2-1.1-.4-1.1-1 0-.4.2-.7.6-.9.7-.3 18-6.5 18-26.9 0-22.7-15.3-36.2-41.1-36.2h-62.5v133.4h68.2c19.9 0 41.3-14.1 41.3-36.8 0-21.7-16.4-29.3-23.4-31.6zM264 51.5c0-.5.4-.9.9-.9h24.8c8.2 0 13.8 5.5 13.8 13.7 0 6.4-5 13.3-14.4 13.3h-24.2c-.5 0-.9-.4-.9-.9zm25.7 79.8h-24.8c-.5 0-.9-.4-.9-.9v-26.6c0-.5.4-.9.9-.9h24.2c11.9 0 18.7 5.1 18.7 14.1 0 9.3-6.3 14.3-18.1 14.3zm263.4-54-4.8-1C537.5 74 527 71.1 527 61.8s8.7-13.5 17.3-13.5c10.1 0 20.1 4.5 27.7 12.3L591.8 41c-8.5-9.4-23.6-20.2-48-20.2-29.4 0-49.2 16.7-49.2 41.6 0 26.3 20.7 36.2 38.1 39.9l4.7 1c16.9 3.6 24.9 6.3 24.9 15.9 0 8.6-7.7 14.3-19.1 14.3-13.4 0-25.3-5.9-34.3-17l-20.3 19.9c10.8 12.8 25.1 24.4 55 24.4 25.5 0 51.4-14.8 51.4-43.2-.1-29.1-19.9-35.7-41.9-40.3zm263.5-53.1V73c0 .5-.4.9-.9.9h-41c-.5 0-.9-.4-.9-.9V24.2h-33.6v133.4h33.6v-52.4c0-.5.4-.9.9-.9h41c.5 0 .9.4.9.9v52.4h33.8V24.2zm-144 106.1c-15.1 0-31.4-12.6-31.4-40.3 0-25.3 15.3-38.5 30.4-38.5 11 0 18.7 4.6 24.8 14.8l25.8-17.1C709 29.8 693.3 21 671.4 21c-42.9 0-62.1 34.7-62.1 69 0 41.7 25.4 70.8 61.7 70.8 27 0 39.3-9.9 52.2-28.2l-26-17.5c-5.8 9.4-12.1 15.2-24.6 15.2zM417.5 20.8c-36.7 0-61.3 28.1-61.3 70s24.6 70 61.3 70 61.3-28.1 61.3-70-24.6-70-61.3-70zm0 109.5c-18 0-29.6-15.5-29.6-39.5 0-23.9 11.6-39.3 29.6-39.3 18.1 0 29.8 15.4 29.8 39.3 0 24-11.7 39.5-29.8 39.5z" fill="#f80000"/>
                </svg>
                     {/* <img className='navbar-div-img-2' src={boschLogo} alt="" /> */}
                    <span className={props.search ? 'navbar-div-button-logoff' : 'hide'}>
                            <Navbarsearch/>
                    </span>                    
                </span>
                <div  className={props.logado ? 'navbar-div-buttons' : 'navbar-div-buttons-2'}>
                    <span className={props.logado ? 'navbar-div-button-logoff' : 'hide'}>
                        <ButtonLogoff />
                    </span>
                    <Autocontraste/>
                    <Translate />
                </div>
            </div>

        </div>
    )
}