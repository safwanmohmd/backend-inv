export const reqLogs = (req,res,next)=>{
console.log(`[new incoming req] ${req.method} on ${req.url}`);
 next()
}