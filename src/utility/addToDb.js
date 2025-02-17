const getStoredReadList = () =>{
    const storedListStr = localStorage.getItem('read-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return [];
    }
};

const addToStoredReadList = (id, toast) =>{
    const storedList = getStoredReadList();
    if(storedList.includes(id)){
        console.log(id);
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr);
        // ideally trigger toast from the component
        toast('This book is added to your read list.');
    }
};

export {addToStoredReadList, getStoredReadList};