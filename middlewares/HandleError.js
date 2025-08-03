export const handleError = (req,res,next)=>{
res.status(404).json({
    success:false,
    message: 'not found'

})
next()
}