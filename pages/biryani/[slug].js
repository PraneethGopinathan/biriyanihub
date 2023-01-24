import Image from "next/image";
import Layout from "../../components/Layout";
import { client, urlFor } from "../../lib/client";
import css from '../../styles/Biryani.module.css'
import LeftArrow from '../../assets/arrowLeft.png'
import RightArrow from '../../assets/arrowRight.png'
import { useState } from "react";
import { useStore } from "../../store/store";
import toast, {Toaster} from 'react-hot-toast'

export default function Biryani({ biryani }) {
    const src = urlFor(biryani.image).url()
    const [Size, setSize] = useState(1)
    const [Quantity, setQuantity] = useState(1)

    // Handling the Quantity increment and decrement
    const handlQuan = (type) => {
        type === 'inc' 
        ? setQuantity((prev)=>prev+1) 
        : Quantity === 1
        ? null 
        : setQuantity((prev)=>prev-1)
    }

    //add to cart
    const addBiryani = useStore((state)=> state.addBiryani)
    const addToCart = () => {
        addBiryani({...biryani, pirce: biryani.price[Size], quantity: Quantity, size: Size})
        toast.success("Added to cart!")
    }
    return (
        <Layout>
            <div className={css.container}>
                <div className={css.imageWrapper}>
                    <Image loader={()=> src} alt="" src={src} layout="fill" unoptimized objectFit="cover"/>
                </div>

                {/* right side */}
                <div className={css.right}>
                        <span>{biryani.name}</span>
                        <span>{biryani.details}</span>
                        <span><span style={{color: "var(--themeRed)"}}>₹ </span>{biryani.price[Size]}</span>
                    <div className={css.size}>
                        <span>Size</span>
                        <div className={css.sizeVariants}>
                            <div onClick={() => setSize(0)} className={Size === 0 ? css.selected : ""}>Single</div>
                            <div onClick={() => setSize(1)} className={Size === 1 ? css.selected : ""}>Full</div>
                            <div onClick={() => setSize(2)} className={Size === 2 ? css.selected : ""}>Bucket</div>
                        </div>
                    </div>

                    {/* Quantity Counter */}
                    <div className={css.quantity}>
                        <span>Quantity</span>
                        <div className={css.counter}>
                            <Image src={LeftArrow} height={20} width={20} alt="" objectFit="contain" onClick={()=>handlQuan("dec")}/>
                            <span>{Quantity}</span>
                            <Image src={RightArrow} height={20} width={20} alt="" objectFit="contain" onClick={()=>handlQuan("inc")}/>
                        </div>
                    </div>

                    {/* Button */}
                    <div className={`btn ${css.btn}`} onClick={addToCart}>
                        Add to Cart
                    </div>
                </div>
                    <Toaster/>
            </div>
        </Layout>
    )
}


export async function getStaticPaths(){
    const paths = await client.fetch(
        `*[_type=="biryani" && defined(slug.current)][].slug.current`
    );

    return{
        paths: paths.map((slug)=> ({params: {slug}})),
        fallback: 'blocking',
    }
}

export async function getStaticProps(context){
    const { slug = "" } = context.params
    const biryani = await client.fetch(
        `*[_type=="biryani" && slug.current == '${slug}'][0]`
    )
    return{
        props: {
            biryani, 
        },
    }
}