import { 
    createUser,
    deleteUser,
    getAllUsers, 
    getUserById, 
    updateUser
} from "../models/userModel.js"


export const getUsersList = (req, res) => {
    const userList = getAllUsers();
    res.json(userList);
};

export const getSingleUser = (req, res) => {
    const user = getUserById(req.params.id);
    console.log("user by id : ", user)
    if (user){
        res.json(user)
    }else{
        res.status(404).send("User not found.")
    }
};

export const createNewUser = (req, res) => {
    // console.log(req.body)
    const newUser = createUser(req.body);
    res.status(201).send(newUser)
};

export const updateExistingUser = (req, res) => {
    const updatedUser = updateUser(req.params.id, req.body);
    if (updatedUser){
        res.json(updatedUser);
    } else {
        res.status(404).send("User Not Found");
    }
};

export const removeUser = (req, res) => {
    const deletedUser = deleteUser(req.params.id);
    if (deletedUser){
        res.status(200).send("User deleted successfull");
    } else {
        res.status(404).send("User Not Found")
    }
}