import bcrypt from "bcryptjs"


const users = [
    
{
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync('12345',10),
    isAdmin: true
},

{
    name:"Olivia rock",
    email: "olivia@example.com",
    password:  bcrypt.hashSync('12345',10)
},

{
    name:"jackson rock",
    email: "jackson@example.com",
    password:  bcrypt.hashSync('12345',10) 
}

]

export default users