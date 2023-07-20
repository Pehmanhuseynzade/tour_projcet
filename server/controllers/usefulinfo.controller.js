const useModel = require("../models/usefulinfo.model")

const useModelController = {
    getAll:async(req,res)=>{
        const {usename} = req.query
        const getuse = await useModel.find()
        if(!usename){
          res.status(200).send(getuse)
        }
        else{
          const searched = get.filter((x)=>
            x.usename.toLowerCase().trim().includes(usename.toLowerCase().trim())
          )
          res.status(200).send(searched)
        }
      },
    getOne:async(req,res)=>{
        const {id} = req.params
        const newuse = await useModel.findById(id)
        res.status(200).send(newuse)
      },
    delete:async(req,res)=>{
        const id = req.params.id
        const deletuse = await useModel.findByIdAndDelete(id)
        res.status(200).send(deletuse)
      },
    post:async(req,res)=>{
        const {useimg,usename,usedesc} = req.body
        const postuse = new useModel({
            useimg:useimg,
            usename:usename,
            usedesc:usedesc
        })
        await postuse.save()
        res.status(200).send({
          message:"Posted succefully!",
          payload:postuse
        })
      },
    edit:async(req,res)=>{
      const id = req.params.id
      const {useimg,usename,usedesc} = req.body
      const putuse = {
        useimg:useimg,
        usename:usename,
        usedesc:usedesc
      }
      await useModel.findByIdAndUpdate(id,putuse)
         res.status(200).send(useModel)
    }
}

module.exports = useModelController;