
// exports.ensureAuth = function(req, res, next){
//     if(!req.headers.authorization){
//       return res.status(403).send({ message: 'La petición no tiene la cabecera de autenticación.' });
//     }
  
//     var token = req.headers.authorization.replace(/['"]+/g, '');
  
//     try{
//       var payload = jwt.decode(token, secret);
//       if (payload.exp <= moment().unix()){
//         return res.status(401).send({ message: 'token has expired.' })
//       }
  
//     }catch(ex){
//       return res.status(404).send({ message: 'token not valid' })
//     }
  
//     req.user = payload;
  
//     next();
  
//   };
  