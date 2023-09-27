const { port } = require('./config/index.config')

const app = require('./app')

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
})