import mongoose, {mongo} from "mongoose";

async function conectaNaDatabase() {
    mongoose.connect("mongodb+srv://admin:admin123@cluster0.epee4dn.mongodb.net/livraria?appName=Cluster0");

    return mongoose.connection;
};

export default conectaNaDatabase;
