/*const config = {
env: process.env.NODE_ENV || 'development', 
port: process.env.PORT || 3000,
jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key", 
mongoUri: process.env.MONGODB_URI ||
process.env.MONGO_HOST ||
'mongodb://' + (process.env.IP || 'localhost') + ':' + 
(process.env.MONGO_PORT || '27017') +
'/mernproject' 
}
export default config*/

const config = {
  env: "development",
  port: 3000,
  jwtSecret: "YOUR_secret_key",
  mongoUri:"mongodb+srv://Comp229G3:Comp229G3@cluster0.3tdemug.mongodb.net/onlinemarketplace?retryWrites=true&w=majority"};
export default config;


// const config = {
//   env: process.env.NODE_ENV || 'development',
//   port: process.env.PORT || 3000,
//   jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
//   mongoUri: process.env.MONGODB_URI ||"mongodb+srv://areebahnadeem91:areebahnadeem91@cluster0.xff7ivj.mongodb.net/onlinemarketplace?retryWrites=true&w=majority"  ||
//   process.env.MONGO_HOST ||
//     'mongodb://' + (process.env.IP || 'localhost') + ':' + 
//     (process.env.MONGO_PORT || '27017') + '/onlinemarketplace'
  
// };

// module.exports = config;