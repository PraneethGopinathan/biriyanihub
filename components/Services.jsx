import css from '../styles/Services.module.css'
import Image from 'next/image'
import s1 from '../assets/s1.png'
import s2 from '../assets/s2.png'
import s3 from '../assets/s3.png'

export default function Services() {
    return(
        <>
        <div className={css.heading}>
            <span>YOUR TOP CHOICES</span>
            <span>Delivered Fresh</span>
            <span>By Us</span>
        </div>

        <div className={css.services}>
            
            <div className={css.feature}>
                <div className={css.ImageWrapper}>
                    <Image src={s1} alt="" objectFit='cover' layout="intrinsic"/>
                </div>
                <span>Easy to Order</span>
                <span>Few steps away, delivered to your doorstep</span>
            </div>

            <div className={css.feature}>
            <div className={css.ImageWrapper}>
                    <Image src={s2} alt="" objectFit='cover' layout="intrinsic"/>
                </div>
                <span>A Click Away </span>
                <span>Fast delivery, your meals just a click away</span>
            </div>

            <div className={css.feature}>
            <div className={css.ImageWrapper}>
                    <Image src={s3} alt="" objectFit='cover' layout="intrinsic"/>
                </div>
                <span>Fine Dining</span>
                <span>Elevated cuisine, conveniently delivered to you</span>
            </div>

        </div>
        </>
    )
};