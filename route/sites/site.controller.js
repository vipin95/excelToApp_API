const db = require("../../db/connections");
const sites = db.models.Site;
const Op = db.Sequelize.Op;


module.exports = {
    list : async (req, res)=>{
        try {
            let key = Object.keys(req.body)[0];
            let condition = {where:{
                [key]:{
                    [Op.like]:`%${req.body[key]}%`
                }
            },limit: 10}

            let siteLists;
            if(key?.length > 0){
                siteLists = await sites.findAll(condition);
            }else{
                siteLists = await sites.findAll({limit: 10});
            }
            // res.setHeader('Access-Control-Allow-Origin', '*');
            res.send(siteLists);
        } catch (error) {
            console.log(error);
            res.send(error);
        }
    },
    upload : async (req, res)=>{
        try {
            let siteLists = await sites.bulkCreate(req.body, {returning: true});
            res.send("Sites Uploaded successfully");
        } catch (error) {
            console.log(error);
            res.send(error);
        }
    },
    create : async (req, res)=>{
        const requestdata = req.body;
        const data = {};
        if(requestdata.siteId) data.siteId = requestdata.siteId;
        if(requestdata.siteName) data.siteName = requestdata.siteName;
        if(requestdata.toco) data.toco = requestdata.toco;
        if(requestdata.tocoId) data.tocoId = requestdata.tocoId;
        if(requestdata.latLong) data.latLong = requestdata.latLong;
        if(requestdata.zone) data.zone = requestdata.zone;
        if(requestdata.ms1Ms2) data.ms1Ms2 = requestdata.ms1Ms2;
        if(requestdata.siteType) data.siteType = requestdata.siteType;
        if(requestdata.towerType) data.towerType = requestdata.towerType;
        if(requestdata.DG) data.DG = requestdata.DG;
        if(requestdata.DG_rating) data.DG_rating = requestdata.DG_rating;
        if(requestdata.technicianName) data.technicianName = requestdata.technicianName;
        if(requestdata.technicianPhone) data.technicianPhone = requestdata.technicianPhone;
        
        console.log(data);
        try {
            await sites.create(data);
            res.send("Create of Sites. #UPDATED");
        } catch (error) {
            res.send(error);
        } 
    },
    update : async (req, res)=>{
        let resMessage;
        const condition = {where : {id:req.params.id}};
        const requestdata = req.body;
        const data = {};
        if(requestdata.siteName) data.siteName = requestdata.siteName;
        if(requestdata.toco) data.toco = requestdata.toco;
        if(requestdata.tocoId) data.tocoId = requestdata.tocoId;
        if(requestdata.latLong) data.latLong = requestdata.latLong;
        if(requestdata.zone) data.zone = requestdata.zone;
        if(requestdata.ms1Ms2) data.ms1Ms2 = requestdata.ms1Ms2;
        if(requestdata.siteType) data.siteType = requestdata.siteType;
        if(requestdata.towerType) data.towerType = requestdata.towerType;
        if(requestdata.DG) data.DG = requestdata.DG;
        if(requestdata.DG_rating) data.DG_rating = requestdata.DG_rating;
        if(requestdata.technicianName) data.technicianName = requestdata.technicianName;
        if(requestdata.technicianPhone) data.technicianPhone = requestdata.technicianPhone;

        try {
            await sites.update(data, condition);
            resMessage = "Sites details Updated successfully.";
        } catch (error) {
            resMessage= error.message;
        }
        res.send(resMessage);
    },
    delete : async (req, res)=>{
        let resMessage;
        const condition = {where : {id:req.params.id}}
        try {
            await sites.destroy(condition);
            resMessage = "Site deleted";
        } catch (error) {
            resMessage = error.message;
        };
        res.send(resMessage);
    }
}