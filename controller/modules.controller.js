import Module from "../models/Module.model.js";

export const getAllModules = async (req, res) => {
  const modules = await Module.find({},"name title description imageUrl");
  if (!modules) {
    return res.status(404).json({ msg: "No data" });
  }
  else return res.status(200).send(modules)
};

export const addNewModule = async (req,res) => {
    console.log(req.body)
    const newModule = new Module(req.body)
    const saved = await newModule.save()
    //console.log(req.body)
    if(saved){
       return res.status(200).send(saved) 
    }
    else return res.status(400).json({msg:"Error in adding module"})
}

export const getModuleCategoires = async (req, res) => {

    console.log(req.params.module)

    const moduleFound = await Module.findOne({name:req.params.module})

    if(!moduleFound){
        return res.status(404).json({msg:"Not found"})
    }

    //const categoryList = moduleFound
    console.log(moduleFound)

//   const categoryList = Module.find({ name: req.module })
//     .select("name title description image")
//     .populate({
//       path: "assessments",
//       select: "title description image",
//     });

    return res.status(200).send({categories: moduleFound.assessments, title: moduleFound.title})
};
