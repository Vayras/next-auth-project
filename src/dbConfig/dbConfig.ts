import mongooose from 'mongoose'

export async function  connect() {
    try{
      mongooose.connect(process.env.MONGO_URI!);
      const connection = mongooose.connection;

      connection.on('connected',()=>{
        console.log('MongoDB connected successfully');
      })

      connection.on('error',(err)=>{
        console.log('MongoDB connection error. Please make sure mongoDb is runnign' + err);
        process.exit();
      })
    }
    catch(error){
        console.log('something went wrong!');
        console.log(error);
    }
}