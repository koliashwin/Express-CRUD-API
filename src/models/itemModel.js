import { conn } from "../config/db.js";

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

export const getAllItems = async () => {
    const [rows] = await conn.query('SELECT * FROM items');
    console.log(rows);
    return rows;
};

export const getItemById = async (itemId) => {
    const [rows] = await conn.query('select * from items where id = ?', [itemId]);
    return rows;
}

export const createItem = async (name) => {
    const [result] = await conn.query('insert into items (name) values (?)', [name]);
    const newItem = { id: result.insertId, name };
    return newItem;
};

export const updateItem = async (itemId, name) => {
    const [result] = await conn.query('update items set name = ? where id = ?', [name, itemId]);

    if (result.affectedRows === 0){
        return null
    }
    const updatedItem = await getItemById(itemId);
    return updatedItem;
};

export const deleteItem = async (itemId) => {
    const [result] = await conn.query('delete from items where id = ?', [itemId]);
    return result.affectedRows > 0;
}
