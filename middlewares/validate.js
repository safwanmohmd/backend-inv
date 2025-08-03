export const validate = (req,res,next)=>{

    const {name,quantity,price} = req.body

    if(!name || !quantity || !price){
        return res.json({error : 'Name || quantity || price - are required !!'})
    }
    next()
}