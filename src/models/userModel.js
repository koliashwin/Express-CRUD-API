let users = [
    {
        id: 1,
        name: 'ashwin Koli',
        email: 'ashwinkoli01@gamil.com',
    },
    {
        id: 2,
        name: 'dishant Koli',
        email: 'dishantkoli02@gamil.com',
    }
];
let id = 3;

export const getAllUsers = () => users;

export const getUserById = (userId) => users.find(i => i.id === parseInt(userId));

export const createUser = (data) => {
    const newUser = {
        id: id++,
        name: data.name,
        email: data.email
    };
    users.push(newUser);
    return newUser;
};

export const updateUser = (userId, data) =>{
    const user = users.find(i => i.id === parseInt(userId));
    if (user){
        user.name = data.name;
        user.email = data.email;
        return user
    }
    return null
};

export const deleteUser = (userId) => {
    const user_index = users.findIndex(i => i.id === parseInt(userId));
    console.log("user index : ", user_index)
    if (user_index !== -1){
        users.splice(user_index,1);
        // id--;
        return true;
    }
    return false;
}