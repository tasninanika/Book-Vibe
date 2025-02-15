const getStoredWishList = () =>{
    const storedListStr = localStorage.getItem('read-list');
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
        localStorage.setItem('read-list', storedListStr);
    }
};

export {addToStoredWishList};