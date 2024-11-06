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

const removeFromWishList = (id) =>{
    const storedList = JSON.parse(localStorage.getItem('wise-list'))||[];
  
    const index = storedList.findIndex(i=>i===id);

    if (index !== -1) storedList.splice(index, 1);

    localStorage.setItem('wise-list', JSON.stringify(storedList))

    toast.success('Product removed!!')
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
const removeFromCartList=(id)=>{
    const storedList = JSON.parse(localStorage.getItem('cart-list'))||[];
  
    const index = storedList.findIndex(i=>i===id);

    if (index !== -1) storedList.splice(index, 1);

    localStorage.setItem('cart-list', JSON.stringify(storedList))

    toast.success('Product removed!!')
}
export { addStoredCartList, addWishList, getCartData, getStoredWishListData, removeFromWishList,  removeFromCartList}