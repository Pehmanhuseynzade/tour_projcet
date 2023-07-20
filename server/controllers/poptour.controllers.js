const poptourModel = require("../models/poptour.model")

const poptourModelController = {
    getAll:async(req,res)=>{
        const {poptoursname} = req.query
        const getuse = await poptourModel.find()
        if(!poptoursname){
          res.status(200).send(getuse)
        }
        else{
          const searched = get.filter((x)=>
            x.poptoursname.toLowerCase().trim().includes(poptoursname.toLowerCase().trim())
          )
          res.status(200).send(searched)
        }
      },
    getOne:async(req,res)=>{
        const {id} = req.params
        const newpoptour = await poptourModel.findById(id)
        res.status(200).send(newpoptour)
      },
    delete:async(req,res)=>{
        const id = req.params.id
        const deletpoptour = await poptourModel.findByIdAndDelete(id)
        res.status(200).send(deletpoptour)
      },
    post:async(req,res)=>{
        const {poptoursimg,poptoursname,poptoursprice,poptoursdesc,poptoursdate} = req.body
        const postuse = new poptourModel({
            poptoursimg:poptoursimg,
            poptoursname:poptoursname,
            poptoursprice:poptoursprice,
            poptoursdesc:poptoursdesc,
            poptoursdate:poptoursdate
        })
        await postuse.save()
        res.status(200).send({
          message:"Posted succefully!",
          payload:postuse
        })
      },
    edit:async(req,res)=>{
      const id = req.params.id
      const {poptoursimg,poptoursname,poptoursprice,poptoursdesc,poptoursdate} = req.body
      const putpoptour = {
        poptoursimg:poptoursimg,
        poptoursname:poptoursname,
        poptoursprice:poptoursprice,
        poptoursdesc:poptoursdesc,
        poptoursdate:poptoursdate
      }
      await poptourModel.findByIdAndUpdate(id,putpoptour)
         res.status(200).send(poptourModel)
    }
}

module.exports = poptourModelController;