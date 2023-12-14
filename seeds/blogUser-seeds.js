const { User } = require("../models");

const userData = [
    {
        username: "JohnDoh",
        email: "JohnDoh@gmail.com",
        password: "pass1234",
    },
    {
        username: "JaneDoh",
        email: "JaneDou@gmail.com",
        password: "pass5678",
    },
];

const seedUser = () => User.bulkCreate(userData);
module.exports = seedUser;