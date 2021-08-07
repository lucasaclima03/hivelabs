const db = require('../models')
const {Op} = require("sequelize")

const User = db.users

exports.create = (req,res) => {
    const userToCreate = {
        name: req.body.name,
        lastname: req.body.lastname,
        nickname: req.body.nickname,
        address: req.body.address,
        bio: req.body.bio        
    }  
    User.findAll({
        where: {
            nickname: req.body.nickname
        }
    })
        .then(user=>{
            if(user.length>0){
                return res.status(400).send({message: "Nickname already exists"});
            }else{
                User.create(userToCreate)                   
                .then(data => {
                    return res.status(201).send({
                        message: "User created",
                        user: data
                    })
                })
                .catch(err => {
                    return res.status(500).send({
                        message: err.message
                    })
                })
                
            }
        })

            
}

exports.get = (req, res, next) => {
    
    User.findAll({
        where: {
            [Op.or]: [
                {name: req.body.name},
                {lastname: req.body.lastname}
            ]
        }
    })              
        .then(data => {
            return res.status(200).send(data)
        })
        .catch(err => {
            return res.status(500).send({
                message: err.message
            })
        })
}

exports.getAll = (req, res, next) => {
    User.findAll()
    .then(data=>{
        return res.status(200).send(data)
    })
    .catch(err=> {
        return res.status(500).send({
            message: err.message
        })
    })
}

exports.find = (req, res) => {
    User.findOne({
        where: {
            nickname: req.body.nickname            
        }
    })
        .then(user => {
            return res.status(200).send({                
                name: user.name,
                lastname: user.lastname,
                nickname: user.nickname
            })
        })
        .catch(err => {
            return res.status(500).send({
                message: err.message
            })
        })
}

exports.update = (req, res) => {
    const id_user = req.body.id

    const user = {
        id: id_user,                        
        lastname: req.body.lastname,        
        address: req.body.address        
    }
    
    User.update(user, {
        where: {
            id: id_user
        }
    })
        .then(status => {
            if (status == 1) {
                return res.status(202).send({
                    message: "Updated sucessfully!",                           
                    user: user
                })
            } else {
                return res.status(202).send({
                    message: "Cannot update"
                })
            }
        })
        .catch(err => {
            return res.status(500).send({
                messagem: "Internal error: " + err.message
            })
        })
}
exports.updateNickname = async (req, res) => {   

    const userToUpdate = {
        id: req.body.id,                
        nickname: req.body.nickname      
    }   
    
    User.findAll({
        where: {
            nickname: req.body.nickname
        }        
    })     
        .then(user => {            
            if(user.length > 0 ){
                return res.status(400).send({message: "Nickname already exists"});
            } else {                
                User.update(userToUpdate, {
                    where: {
                        id: req.body.id
                    }
                })
                    .then(status => {
                        if (status == 1) {
                            return res.status(202).send({
                                message: "Updated sucessfully!",                           
                                user: user
                            })
                        } else {
                            return res.status(202).send({
                                message: "Cannot update"
                            })
                        }
                    })
                    .catch(err => {
                        return res.status(500).send({
                            messagem: "Internal error: " + err.message
                        })
                    })
            }
        })
    
    
    
}

exports.delete = (req, res) => {
    User.findByPk(req.body.id)
        .then(data => {
            data.destroy()
        })
        .then(id => {
            return res.status(202).send({
                message: "Deleted sucessfully!",
                data: id
            })
        })
        .catch(err => {
            return res.status(500).send({
                message: "Internal sever error: " + err.message
            })
        })
}