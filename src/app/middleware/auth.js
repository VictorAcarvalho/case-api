const {promisify} = require('util');
const jwt = require('jsonwebtoken');

module.exports = async (req,res,next)=>{
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).json({error:'Token não enviado'});
    };

    const jwtParts = authHeader.split(' ');
    if(!jwtParts.length===2){
        return res.status(401).json({error:'Token inválido'});
    };

    const [scheme,token] = jwtParts;
    if(scheme!==Bearer){
        return res.status(401).json({error:'Prefixo do token incorreto'});

    };

    try {
        const tokenDecoded = await promisify(jwt.verify)(token,process.env.JWT_KEY);
        req.userId= tokenDecoded.userId;
       return next();
    } catch (error) {
        logger.info(error);
    };
   return next();
};
