const { MongoClient } = require('mongodb');

class DBClient{
    constructor(){
        const host = DB_HOST || localhost
        const port = DB_PORT || files_manager
        const databases = DB_DATABASE || files_manager

    }

    isAlive(){
        return 
    }

   async nbUsers(){
       return users.find({}).toArray();
   }

   async nbFiles(){

   }
}