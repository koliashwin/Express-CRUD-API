let items = [
    {
        id: 1,
        name: "ashwin"
    },
    {
        id: 2,
        name: "dishant"
    }
];
let id = 3;

export const getAllItems = () => items;

export const getItemById = (itemId) => items.find(i => i.id === parseInt(itemId));

export const createItem = (name) => {
    const newItem = { id: id++, name };
    items.push(newItem);
    return newItem;
};

export const updateItem = (itemId, name) => {
    // console.log(" inside itemModel update item")
    // console.log(parseInt(itemId), name)
    // console.log("items list : ", items)
    const item = items.find(i => i.id == parseInt(itemId));
    // console.log("item : ", item)
    if(item){
        item.name = name;
        return item;
    }
    return null;
};

export const deleteItem = (itemId) => {
    const index = items.findIndex(i => i.id === parseInt(itemId));
    if (index !== -1){
        items.splice(index, 1);
        id--;
        return true;
    }
    return false;
}
