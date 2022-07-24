import React,{createContext,useState} from 'react'

const cartContext=createContext({});

const checkItem=(list,itemCart)=>{
    const itemFound=list.find(it=>it.productId===itemCart.productId);
    if(itemFound){
        itemFound.count=itemFound.count+itemCart.count;
    }else{
        list.push({
            ...itemCart
        });
    }
    return list;
};

export const CartProvider=({children})=>{
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0)

    const addItem=(item)=>{
        const cartDraft=[...cart];
        const cleanCart=checkItem(cartDraft,item)
        setCart(cleanCart);
        console.log(cleanCart)
    }

    const removeItem=(itemId)=>{
        const cartDraft=[...cart];
        const cleanCart=cartDraft.filter(it=>it.item.id!==itemId);
        setCart(cleanCart);
    }

    const cleanCart=()=>{
        setCart([]);
    }

    const totalCart=(item)=>{
        let totalAux=total
        totalAux=totalAux+item.productPrice
        setTotal(totalAux)
        console.log(totalAux)
    }

    return (
        <cartContext.Provider value={{cart,addItem,removeItem,cleanCart,totalCart,total}}>
            {children}
        </cartContext.Provider>
        )
}

export default cartContext;