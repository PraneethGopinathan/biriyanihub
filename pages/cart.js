import { ColorInput } from "@mantine/core"
import Image from "next/image"
import toast, {Toaster} from "react-hot-toast"
import Layout from "../components/Layout"
import { urlFor } from "../lib/client"
import { useStore } from "../store/store"
import css from "../styles/Cart.module.css"

export default function Cart() {
    const CartData = useStore((state)=> state.cart)
    const removeBiryani = useStore((state)=>state.removeBiryani)
    const handleRemove = (i) => {
        removeBiryani(i);
        toast.error('Item Removed!')
    }
    // const total = ()=> CartData.biryanis.reduce((a,biryani)=> a+biryani.size === 0 ? biryani.price[0] * biryani.quantity: a+biryani.size === 1 ?  biryani.price[1] * biryani.quantity:  a+biryani.price[2] * biryani.quantity, 0)
    const total = () => {
        let sum = 0;
        CartData.biryanis.forEach((biryani) => {
          let price;
          switch (biryani.size) {
            case 0:
              price = biryani.price[0];
              break;
            case 1:
              price = biryani.price[1];
              break;
            case 2:
              price = biryani.price[2];
              break;
            default:
              price = 0;
              break;
          }
          sum += price * biryani.quantity;
        });
        return sum;
      };
      
    return(
        <Layout>
            <div className={css.container}>
                {/* Details */}
                <div className={css.details}>
                    <table className={css.table}>
                        <thead>
                            <tr>
                                <th>Biryani</th>
                                <th>Name</th>
                                <th>Size</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className={css.tbody}>
                            {CartData.biryanis.length > 0 && CartData.biryanis.map((biryani, i)=> {
                                const src = urlFor(biryani.image).url()
                                // console.log(CartData)
                                return (
                                <tr key={i}>
                                    <td className={css.imageTd}>
                                        <Image loader = {()=> src} src={src} alt="" objectFit="cover" width={85} height={85}/>
                                    </td>
                                    <td>{biryani.name}</td>
                                    <td>{biryani.size === 0 ? "Single": biryani.size === 1 ? "Full": "Bucket" }</td>
                                    <td>{biryani.size === 0 ? biryani.price[0]: biryani.size === 1 ?  biryani.price[1]:  biryani.price[2] }</td>
                                    <td>{biryani.quantity}</td>
                                    <td>{biryani.size === 0 ? biryani.price[0] * biryani.quantity: biryani.size === 1 ?  biryani.price[1] * biryani.quantity:  biryani.price[2] * biryani.quantity}</td>
                                    <td style={{color: "var(--themeRed)", cursor:"pointer"}} onClick={()=>handleRemove(i)}>x</td>
                                </tr>
                            )})
                            } 
                        </tbody>
                    </table>
                    {/* Summary */}
                <div className={css.cart}>
                    <span>Cart</span>
                    <div className={css.CartDetails}>
                        <div>
                            <span>Items</span>
                            <span>{CartData.biryanis.length}</span>
                        </div>
                        <div>
                            <span>Total</span>
                            <span>₹ {total()}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Toaster/>
        </Layout>
    )
}