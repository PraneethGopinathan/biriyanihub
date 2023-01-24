import  create  from 'zustand'

export const useStore = create(
    (set) => (
        {
            //cart
            cart: {
                biryanis : []
            },
            // add biryani in cart
            addBiryani: (data) =>
            set((state) => ({
                cart: {
                    biryanis: [...state.cart.biryanis, data]
                }
            })),

            //Remove Biryani
            removeBiryani: (index)=>
            set((state)=> ({
                cart :{
                    biryanis: state.cart.biryanis.filter((_,i)=> i !=index)
                }
            }))
        }
    )
)