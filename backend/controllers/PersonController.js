const Person = require('../models/Person');

class PersonController{
    static async create(req, res){
        const { name, lastname, salary } = req.body;
        if(!name || !lastname || !salary)
            return res.status(400).send({ message: "Dados inválidos" })
        
        const person = {
            name: name,
            lastname: lastname,
            salary: salary
        }
        
        const p = await Person.create(person);
        return res.status(201)
            .send({ message: "Pessoa inserida com sucesso", body: p});
    }

    static async getAll(req, res){
        try {
            const people = await Person.find();
            return res.status(200).send({ data: people });
        } catch (error) {
            return res.status(500).send({ error: error });
        }
    }

    static async getPersonById(req, res){
        const { id } = req.params;
         
        try {
            const person = await Person.findById(id);
            if(!person) 
                return res.status(404).send({ message: "person not found " })
            return res.status(200).json(person);   
        } catch (error) {
            return res.status(500).json({ error: error })
        }
    }

    static async updatePerson(req, res){
        const { id } = req.params;
        if(!id)
            return res.status(400).send({ message: "No id provider" })
             
        const person = req.body;
        if(!person.salary)
            return res.status(400).send({ message: "No salary provider" })
     
        try {
            const newPerson = await Person.findByIdAndUpdate(
                id,
                { salary: person.salary }
            );
            return res.status(201).send(newPerson);
        } catch (error) {
            return res.status(500).send({ error: error });
        }
    }

    static async deleteById(req, res){
        const { id } = req.params;
        if(!id)
            return res.status(400).send({ message: "No id provider" });
 
        try {
            await Person.findByIdAndRemove(id);
            return res.status(200).send({ message: "Person deleted successfully" })
        } catch (error) {
            console.log(error);
            return res.status(500).send({ message: "Something failled"})
        }
    }
}
module.exports = PersonController;