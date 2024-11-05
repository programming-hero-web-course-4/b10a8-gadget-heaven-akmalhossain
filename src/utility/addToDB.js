import toast from "react-hot-toast";

// get 
const getStoredWishListData = () => {
    const storedListStr = localStorage.getItem('wise-list');
    if (storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList
    }
    else{
        return []
    }
}

const addWishList = (id) => {
    
   const storedList = getStoredWishListData();
   
   if(storedList.includes(id)){
    toast.error('!!! Already in list')
   }
   else{
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem('wise-list', storedListStr);
    toast.success('Successfully added Wish List')
   }
}

const getCartData=()=>{
    const storedListStr = localStorage.getItem('cart-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList
    }
    else{
        return []
    }
}
const addStoredCartList =(id)=>{
    const storedList = getCartData();
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem('cart-list', storedListStr);
    toast.success('Successfully added to cart')
}

export { addStoredCartList, addWishList, getCartData, getStoredWishListData }