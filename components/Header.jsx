import css from '../styles/Header.module.css';
import Image from 'next/image';
import Logo from '../assets/Logo.png';
import {UilShoppingBag} from '@iconscout/react-unicons';

export default function Header() {
    return(
        <div className={css.header}>
            {/* Logo side */}
            <div className={css.logo}>
                <Image src={Logo} alt = "" width={50} height={50}/> 
                <span>BiryaniHub</span>
            </div>
            {/* Menu side */}
            <ul className={css.menu}>
                <li>Home</li>
                <li>Menu</li>
                <li>Contact</li>
            </ul>
            {/* Cart side */}
            <div className={css.rightside}>
                <div className={css.cart}>
                    <UilShoppingBag size={35} color="#2E2E2E"/>
                    <div className={css.badge}>5</div>
                </div>
            </div>
        </div>
    );
}