const server = require("./server");
const { PORT, MONGO_URI } = require("./config");
const mongoose = require("mongoose");

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
  .then(() => {
    server.listen(PORT, () => {
      console.log(`CodingApp bakend running on port ${PORT}`);
    });
  })
  .catch(console.log);