import { urlFor } from '../lib/client'
import css from '../styles/Menu.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Menu({biryanis}) {
    return(
        <div className={css.container}>
            <div className={css.heading}>
                <span>OUR MENU</span>
                <span>Let Our Food </span>
                <span>Be The Way To Your <span style={{color: "var(--themeRed)"}}>HEART</span></span>
            </div>

            <div className={css.menu}>
                {/* biryanis */}
                {biryanis.map((biryani,id)=> {
                    const src = urlFor(biryani.image).url()
                    return(
                        <div className={css.biryani} key={id}>
                            <Link href={`./biryani/${biryani.slug.current}`}>
                                <div className={css.ImageWrapper}>
                                    <Image loader = {()=> src} src={src} alt="" objectFit='cover' layout='fill'/>
                                </div>
                            </Link>

                            <span>{biryani.name}</span>
                            <div className={css.price}><span><span style={{color: "var(--themeRed)"}}>₹ </span>{biryani.price[1]}</span></div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}