const { StatusCodes }=require('http-status-codes')
const path=require('path')


const homeController= async(req, res)=>{
  try {
    res.sendFile(path.resolve(__dirname , '../view/index.html'))
    
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({status:false, msg: err.msg})
  }
}

const createController= async(req, res)=>{
  try {
    res.sendFile(path.resolve(__dirname , '../view/create.html'))

  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({status:false, msg: err.msg})
  }
}

const updateController= async(req, res)=>{
  try {
    res.sendFile(path.resolve(__dirname , '../view/update.html'))

  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({status:false, msg: err.msg})
  }
}

module.exports={ createController
  , updateController, homeController }