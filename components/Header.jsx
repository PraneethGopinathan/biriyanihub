import css from '../styles/Header.module.css';
import Image from 'next/image';
import Logo from '../assets/Logo.png';
import {UilShoppingBag} from '@iconscout/react-unicons';
import { useStore } from "../store/store"
import Link from 'next/link';

export default function Header() {
    const state = useStore((state)=> state)
    // console.log(state)
    const items = useStore((state)=> state.cart.biryanis.length)
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
            <Link href='/cart'>
                <div className={css.cart}>
                    <UilShoppingBag size={35} color="#2E2E2E"/>
                    <div className={css.badge}>{items}</div>
                </div>
            </Link>
            </div>
        </div>
    );
}