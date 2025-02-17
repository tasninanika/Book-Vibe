const getStoredWishList = () =>{
    const storedListStr = localStorage.getItem('wish-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return [];
    }
};

const addToStoredWishList = (id) =>{
    const storedList = getStoredWishList();
    if(storedList.includes(id)){
        console.log(id);
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('wish-list', storedListStr);
    }
};

export {addToStoredWishList, getStoredWishList};