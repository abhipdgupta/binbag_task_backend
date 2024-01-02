const dotenv=require('dotenv')
dotenv.config()
const express = require('express')
const cookieParser = require('cookie-parser')
const cors=require('cors')
const swaggerUi=require('swagger-ui-express')
const app=express()

const {connectDB}=require('./src/connect/connectDb')
const {errorMiddleware}=require('./src/middleware/error')
const userRouter=require('./src/routes/user.route')
const reimbursementRouter=require('./src/routes/reimbursement.route')
const { swaggerDocs } = require('./src/docs/docs')


connectDB()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: ["*"],
    credentials: true,
  }))
app.use(cookieParser())

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
app.use('/user',userRouter)
app.use('/r_request',reimbursementRouter)


const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`server is running on port http://localhost:${port}`);
});

app.use(errorMiddleware)