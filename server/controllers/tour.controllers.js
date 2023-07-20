const tourModel = require("../models/tour.model")

const tourModelController = {
    getAll:async(req,res)=>{
        const {toursname} = req.query
        const getuse = await tourModel.find()
        if(!toursname){
          res.status(200).send(getuse)
        }
        else{
          const searched = get.filter((x)=>
            x.toursname.toLowerCase().trim().includes(toursname.toLowerCase().trim())
          )
          res.status(200).send(searched)
        }
      },
    getOne:async(req,res)=>{
        const {id} = req.params
        const newtour = await tourModel.findById(id)
        res.status(200).send(newtour)
      },
    delete:async(req,res)=>{
        const id = req.params.id
        const delettour = await tourModel.findByIdAndDelete(id)
        res.status(200).send(delettour)
      },
    post:async(req,res)=>{
        const {toursimg,toursname,toursprice,toursdesc,toursdate} = req.body
        const postuse = new tourModel({
            toursimg:toursimg,
            toursname:toursname,
            toursprice:toursprice,
            toursdesc:toursdesc,
            toursdate:toursdate
        })
        await postuse.save()
        res.status(200).send({
          message:"Posted succefully!",
          payload:postuse
        })
      },
    edit:async(req,res)=>{
      const id = req.params.id
      const {toursimg,toursname,toursprice,toursdesc,toursdate} = req.body
      const puttour = {
        toursimg:toursimg,
        toursname:toursname,
        toursprice:toursprice,
        toursdesc:toursdesc,
        toursdate:toursdate
      }
      await tourModel.findByIdAndUpdate(id,puttour)
         res.status(200).send(tourModel)
    }
}

module.exports = tourModelController;