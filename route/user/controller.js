const { models: { User } } = require("../../db/connections");

module.exports = {
    list: async (req, res) => {
        try {
            const userList = await User.findAll()
            res.send(userList);
        } catch (error) {
            res.send(error);
        }
    },
    create: async (req, res) => {
        let resMessage = "User created successfully";
        let payload = req.body;
        let data = {};

        if(payload.firstName != undefined) data.firstName = payload.firstName;
        if(payload.lastName != undefined) data.lastName = payload.lastName;
        if(payload.email != undefined) data.email = payload.email;
        if(payload.password != undefined) data.password = payload.password;
        if(payload.OLM != undefined) data.OLM = payload.OLM;

        try {
            await User.create(data);
            resMessage="User created successfully";
        } catch (error) {
            error.parent.parameters=[];
            error.parent.sql="";
            resMessage=error.parent;
        }
        res.send(resMessage);
    },
    update: async (req, res) => {
        let resMessage = "User Updated successfully";
        let payload = req.body;
        let condition = {where : {id : req.params.id}};
        let data = {};

        if(payload.firstName != undefined) data.firstName = payload.firstName;
        if(payload.lastName != undefined) data.lastName = payload.lastName;
        if(payload.password != undefined) data.password = payload.password;
    
        try {
            await User.update(data, condition);
        } catch (error) {
            resMessage = error.message;
        }
        res.send(resMessage);
    },
    delete: async (req, res) => {
        let resMessage = "User Delete successfully";
        let condition = {where : {id : req.params.id}};
        try {
            let result = await User.destroy(condition);
        } catch (error) {
            resMessage = error.message;
        }
        res.send(resMessage);
    }
}