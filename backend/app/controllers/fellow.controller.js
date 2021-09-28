const db = require("../models");
const Fellow = db.fellows;

exports.create = (req, res)=>{
    const { name, age, cohort } = req.body;
    if(!name || !cohort){
        res.status(400).send({
            message: "Name and Cohort data is required"
        });
        return;
    }
    Fellow.create({
        name,
        age,
        cohort
    }).then((data)=>{
        res.send(data); // req.body
    }).catch(err=>{
        res.status(500).send({
            message: err.message || "Something broke, fix me!"
        })
    })
}

exports.getAll = (req, res)=>{
    // let { query } = req;

    // Fellow.findAll({
    //     where: query || {}
    // }).then((data)=>{
    //     res.status(200).send(data);
    // });

    let { cohort } = req.query;
    
    Fellow.findAll({
        where: cohort ? { cohort } : {}
    }).then((data)=>{
        res.status(200).send(data);
    });
}

exports.getOne = async (req, res)=>{
    let { id } = req.params;
    let fellow = await Fellow.findByPk(id);
    res.status(200).send(fellow);
}

exports.updateOne = async(req, res)=>{
    let { id } = req.params;
    let fellow = await Fellow.findByPk(id);

    if(!fellow){
        res.status(400).send({
            message: `Fellow with ${id} id not found`
        });
        return;
    }

    await fellow.update(req.body);

    res.status(200).send({
        message: "Update completed successfully",
        fellow
    })
}

exports.deleteOne = async (req, res, next)=>{
    let { id } = req.params;
    try{
        let result = await Fellow.destroy({
            where: {
                id
            }
        });
        console.log(result);
    }catch(err){
        res.send({ message: err });
        next();
    }
    res.send({message: "Yay!!!"});
}