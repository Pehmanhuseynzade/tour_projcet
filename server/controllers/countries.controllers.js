const countriesModel = require("../models/countries.model")

const countriesModelController = {
    getAll:async(req,res)=>{
        const {countriesname} = req.query
        const getcountries = await countriesModel.find()
        if(!countriesname){
          res.status(200).send(getcountries)
        }
        else{
          const searched = get.filter((x)=>
            x.countriesname.toLowerCase().trim().includes(countriesname.toLowerCase().trim())
          )
          res.status(200).send(searched)
        }
      },
    getOne:async(req,res)=>{
        const {id} = req.params
        const newcountries = await countriesModel.findById(id)
        res.status(200).send(newcountries)
      },
    delete:async(req,res)=>{
        const id = req.params.id
        const deletecountries = await countriesModel.findByIdAndDelete(id)
        res.status(200).send(deletecountries)
      },
    post:async(req,res)=>{
        const {countriesname,countriesimg} = req.body
        const postcountries = new countriesModel({
            countriesname:countriesname,
            countriesimg:countriesimg
        })
        await postcountries.save()
        res.status(200).send({
          message:"Posted succefully!",
          payload:postcountries
        })
      },
    edit:async(req,res)=>{
      const id = req.params.id
      const {countriesname,countriesimg} = req.body
      const putcountries = {
        countriesname:countriesname,
        countriesimg:countriesimg
      }
      await countriesModel.findByIdAndUpdate(id,putcountries)
         res.status(200).send(countriesModel)
    }
}

module.exports = countriesModelController;