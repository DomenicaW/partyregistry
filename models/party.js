const party = [
  {
    name: 'Hostess',
    item: 'Pasta Salad',
    quantity: 1,
  },
  {
    name: 'Melissa',
    item: 'Charcuterie Board',
    quantity: 1,
  },
  {
    name: 'Julissa',
    item: 'Assorted Wines',
    quantity: 5,
  },
  {
    name: 'Emily',
    item: 'Chicken Wings',
    quantity: 50,
  },

]

// exporting party object:
module.exports = party

const mongoose = require('mongoose')
const db = mongoose.connection;



mongoose
.connect(process.env.MONGODB_URI)
.then(() => {
  console.log('mongodb connected')
})

.catch((err) => console.log(err))
// 
// module.exports = {
//   post: require('./Post')
// }
