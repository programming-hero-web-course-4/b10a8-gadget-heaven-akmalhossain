const getStoredCartList = () => {
    const storedListStr = localStorage.getItem('cart');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr)
        return storedList;
    }
    else {
        return []
    }
}

const addStoredCartList = (id) => {
    const storedList = getStoredCartList();
    if (storedList.includes(id)) {
        alert('alredy added')
    }
    else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('cart', storedListStr)
    }
}

export { addStoredCartList }