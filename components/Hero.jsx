import css from '../styles/Hero.module.css';
import Image from 'next/image';
import Tasty from "../assets/Tasty.png";
import HeroImage from "../assets/HeroImage.png";
import {UilPhone} from "@iconscout/react-unicons";
import Biryani1 from '../assets/p1.jpg'

export default function Hero() {
    return(
        <div className={css.container}>
            {/* left side */}
            <div className={css.left}>
                <div className={css.cherryDiv}>
                    <span>Biryani Bliss</span>
                    <Image src={Tasty} alt="" width={30} height={30}/>
                </div>
            <div className={css.heroText}>
                <span>Biryani Delivered</span>
                <span>Faster Than You</span>
                <span>
                    Can Say <span style={{color: "var(--themeRed)"}}>'Yum!'</span>
                </span>
            </div>
            <span className={css.miniText}> Our mission is to filling you tummy with delicious food and with fast and free delivery</span>
            <button className={`btn ${css.btn}`}>Order Now</button>
        </div>
            {/* right side */}
            <div className={css.right}>
                <div className={css.imageContainer}>
                    <Image src={HeroImage} alt="" layout="intrinsic"/>
                </div>
                <div className={css.ContactUs}>
                    <span>Contact Us</span>
                    <div>
                        <UilPhone color='white'/>
                    </div>
                </div>

                <div className={css.Biryani}>
                    <div>
                        <Image src={Biryani1} alt="" object="cover" layout="intrinsic"/>
                    </div>
                    <div className={css.details}>
                        <span>Thalassery Dum Biryani</span>
                        <span>
                            <span style={{color: "var(--themeRed)"}}>₹</span> 149</span>
                    </div>
                </div>
            </div>
        </div>
    )
};