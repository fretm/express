

const logger = (req,res,next)=>{
    console.log(`${req.protocol} ://${req.get('host')} :npm run de` )
    next();

}

module.exprots = logger;