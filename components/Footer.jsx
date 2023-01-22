import {UilGithub, UilInstagram} from '@iconscout/react-unicons';
import css from '../styles/Footer.module.css';
import Logo from '../assets/Logo.png';
import Image from 'next/image';


export default function Footer() {
    return(
        <div>
            <div className={css.container}>
                <span>ALL RIGHTS RESERVED</span>
                <div className={css.social}>
                    <UilInstagram size={35} />
                    <UilGithub size={35} />
                </div>
                <div className={css.logo}>
                    <Image src={Logo} alt = "" width={50} height={50}/> 
                    <span>BiryaniHub</span>
                </div>
            </div>

             {/* Logo side */}
        </div>
    )
};