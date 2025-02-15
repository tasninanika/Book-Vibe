const getStoredReadList = () =>{

}

const addToStoredReadList = (id) =>{
    const storedList = getStoredReadList();
    if(storedList.includes(id)){

    }
    else{
        storedList.push(id);
    }
}