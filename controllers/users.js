import { v4 as uuidv4 } from 'uuid';


let users =[];

export const createUser = (req, res)=>{
    
    const user = req.body;
    users.push({...user, id: uuidv4()});

    res.send(`Request to add ${req.body.firstName} is done`);
};

export const allUsers = (req, res) =>{
    res.send(users);
};

export const userWithId = (req, res)=>{

    const id = req.params.id;
    const user = users.find((user)=> user.id == id);
    res.send(user);
};

export const deleteUser = (req, res)=>{

    const id = req.params.id;
    users = users.filter((user) => { return user.id !==id});
    res.send(`user with ${id} deleted`);
};

export const updateUser = (req, res)=>{
    
    const id = req.params.id;
    const user = users.find((user) => user.id==id);
    const {firstName, lastName, age} = req.body;

    if(firstName)user.firstName = firstName;
    if(lastName)user.lastName =lastName;
    if(age)user.age=age;

    res.send(user);

};
