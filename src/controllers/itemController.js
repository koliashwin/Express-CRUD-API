import {
    getAllItems as getAll,
    getItemById as getById,
    createItem as create,
    updateItem as update,
    deleteItem as remove
} from '../models/itemModel.js';

export const getAllItems = (req, res) => {

    // console.log("get all items : ", req);
    const items = getAll();
    res.json(items);
};

export const getItemById = (req, res) => {

    // console.log("get item by id: ", req.params);
    const item = getById(req.params.id);
    if(item){
        res.json(item)
    } else {
        res.status(404).send('Item not found');
    }
};

export const createItem = (req, res) => {

    // console.log("create item : ", req.body);
    const newItem = create(req.body.name);
    res.status(201).json(newItem);
};

export const updateItem = (req, res) => {
    // console.log('inside item controller updateItem : ')
    // console.log('req.param.id : ',req.params.id)
    const updaatedItem = update(req.params.id, req.body.name);
    if (updateItem){
        res.json(updaatedItem);
    } else {
        res.status(404).send("Item not found");
    }
}

export const deleteItem = (req, res) => {
    const deletedItem = remove(req.params.id);
    if (deleteItem){
        res.status(200).send("Item deleted successfull");
    } else {
        res.status(404).send("Item not found");
    }
}

export default {
    getAllItems,
    getItemById,
    updateItem
}