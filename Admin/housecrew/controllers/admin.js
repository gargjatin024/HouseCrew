const commonModel = require('../models/common.model');
const mongodb = require('mongodb');
const ObjectId = mongodb.ObjectID;

const admin = {
    login: async (req, res) => {
        const { username, password } = { ...req.body };
        
        let params = {
            username: username,
            password:password
        }

      
        let user = await commonModel.login(req.db, params);

        if (user.length > 0) {
            res.json({
                status: true, data: user[0],
            });
        } else {
            res.json({ status: false, msg: 'Invalid Credentials!' });
        }

    },
    addservice: async (req, res) => {
        const { service, include } = { ...req.body };

        let params = {
            service: service,
            include: include,
        }
        let insert = await commonModel.insertData(req.db, params, 'service');
        res.json({ status: true, msg: 'Service Details Added Successfully' });
    },
    addperson: async (req, res) => {
        const { person, email, city, service, phone, age, charges, date } = { ...req.body };

        let params = {
            person: person,
            email: email,
            city: city,
            service: service,
            phone: phone,
            age: age,
            charges: charges,
            date: date,
        }
        let insert = await commonModel.insertData(req.db, params, 'person');
        res.json({ status: true, msg: 'Person Details Added Successfully' });
    },
    listservice: async (req, res) => {
        let params = []

        let service = await commonModel.getDataByQuery(req.db, params, 'service', null, 1);
        
        res.json({ status: true, data: service });
    },
    deleteservice: async (req, res) => {
        let request = await commonModel.deleteDataByQuery(req.db, {_id: ObjectId(req.body._id) }, 'service');
        res.json({ status: true, msg: 'Service Deleted Successfully' });
    },
    listperson: async (req, res) => {
        let params = []

        let person = await commonModel.getDataByQuery(req.db, params, 'person', null, 1);
        
        res.json({ status: true, data: person });
    },
    deleteperson: async (req, res) => {
        let request = await commonModel.deleteDataByQuery(req.db, {_id: ObjectId(req.body._id) }, 'person');
        res.json({ status: true, msg: 'Person Deleted Successfully' });
    },
    
    editperson: async (req, res) => {
        const { _id } = { ...req.body };

        let params = [
            {
                "$match": {
                    "_id": ObjectId(req.body._id),
                }
            }
        ]
        let person = await commonModel.getDataByQuery(req.db, params, 'person');
        res.json({ status: true, persondata: person });
    },
    updateperson: async (req, res) => {
        const { person, email, city, service, phone, age, charges, date } = { ...req.body };
        let where = {
            _id: ObjectId(edit_id)
        };
        let set = {
            $set: {
            person: person,
            email: email,
            city: city,
            service: service,
            phone: phone,
            age: age,
            charges: charges,
            date: date,
            }
        }
       
        let data = await commonModel.updateData(req.db, where, set, 'person');
        res.json({ status: true, msg: 'Data Updated Successfully' });
    }
}

module.exports = admin;