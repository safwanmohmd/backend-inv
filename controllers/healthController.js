import dotenv from 'dotenv'

dotenv.config()
const port = process.env.PORT
export const getHealth = (req,res)=> {
  res.status(200).json({
    status: 'ok',
    messge : `Server Is Running on${port}`,
    timestamp: Date.now()
  });
};
