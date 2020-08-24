import mongoose from 'mongoose';

import pass from '../config/mongo';

class Database {
  constructor() {
    this.mongo();
  }

  mongo() {
    this.mongoConnection = mongoose.connect(
      `mongodb+srv://hugumoraes:${pass}@clustermain-vl5pc.mongodb.net/mywebsite?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
      }
    );
  }
}

export default new Database();
