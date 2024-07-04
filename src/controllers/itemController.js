import {
    getAllItems as getAll,
    getItemById as getById,
    createItem as create,
    updateItem as update,
    deleteItem as remove
} from '../models/itemModel.js';

export const getAllItems = async (req, res) => {

    // console.log("get all items : ", req);
    try {
        const items = await getAll();
        res.json(items);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

export const getItemById = async (req, res) => {

    // console.log("get item by id: ", req.params);
    try {
        const item = await getById(req.params.id);
        if (item) {
            res.json(item)
        } else {
            res.status(404).json({ message: 'Item not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

export const createItem = (req, res) => {

    // console.log("create item : ", req.body);
    try {
        const newItem = create(req.body.name);
        res.status(201).json(newItem);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

export const updateItem = (req, res) => {
    // console.log('inside item controller updateItem : ')
    // console.log('req.param.id : ',req.params.id)
    try {
        const updaatedItem = update(req.params.id, req.body.name);
        if (updateItem) {
            res.json(updaatedItem);
        } else {
            res.status(404).json({ message: 'Item not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const deleteItem = (req, res) => {
    try {
        const deletedItem = remove(req.params.id);
        if (deletedItem) {
            res.status(204).end();
        } else {
            res.status(404).json({ message: 'Item not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export default {
    getAllItems,
    getItemById,
    updateItem
}