require('dotenv').config();
require('./database');

const Category = require('../models/Category');
const Item = require('../models/Item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Business Develpoment', sortOrder: 10},
    {name: 'Finance/accounting', sortOrder: 20},
    {name: 'Sales and Marketing', sortOrder: 30},
    {name: 'QA Testers', sortOrder: 40},
    {name: 'Designers', sortOrder: 50},
    {name: 'Engineering', sortOrder: 60},
    {name: 'Developers', sortOrder: 70},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Julie Taylor', emoji: 'https://i.imgur.com/3HnDU6t.jpg', category: categories[0], price: 50},
    {name: 'Noah Smith', emoji: 'https://i.imgur.com/BdPbBuj.png', category: categories[0], price: 6.95},
    {name: 'Harper Johnson', emoji: 'https://i.imgur.com/MJ5vtOx.png', category: categories[0], price: 3.95},
    {name: 'Logan Williams', emoji: 'https://i.imgur.com/RwZiKdc.png', category: categories[1], price: 14.95},
    {name: 'Brooklyn Walker', emoji: 'https://i.imgur.com/hDufBGT.png', category: categories[1], price: 13.95},
    {name: 'Avery Lee', emoji: 'https://i.imgur.com/s7fG8eT.png', category: categories[1], price: 25.95},
    {name: 'Madison Lewis', emoji: 'https://i.imgur.com/lKny5of.png', category: categories[2], price: 1.95},
    {name: 'Riley Rodriguez', emoji: 'https://i.imgur.com/lP88rMR.png', category: categories[2], price: 4.95},
    {name: 'Jayden Clark', emoji: 'https://i.imgur.com/Y55By1j.png', category: categories[3], price: 3.95},
    {name: 'Arden Robinson', emoji: 'https://i.imgur.com/NGxj9KQ.png', category: categories[3], price: 7.95},
    {name: 'Dakota Thompson', emoji: 'https://i.imgur.com/JNhzsSw.png', category: categories[3], price: 1.95},
    {name: 'Finley Garcia', emoji: 'https://i.imgur.com/NmwNI8y.png', category: categories[4], price: 2.95},
    {name: 'Hayden Martin', emoji: 'https://i.imgur.com/D2fkmJa.png', category: categories[4], price: 3.95},
    {name: 'Lennox Patel', emoji: 'https://i.imgur.com/HbBzsuX.png', category: categories[5], price: 1.95},
    {name: 'Lindsey Sharma', emoji: 'https://i.imgur.com/Mpu4IZa.png', category: categories[5], price: 0.95},
    {name: 'Robin Gupta', emoji: 'https://i.imgur.com/0KhxaRI.png', category: categories[5], price: 2.95},
    {name: 'Rowan Shortcake', emoji: 'https://i.imgur.com/1xKzMLO.png', category: categories[5], price: 3.95},
    {name: 'Sloan Desai', emoji: 'https://i.imgur.com/omTteql.png', category: categories[6], price: 0.95},
    {name: 'Adair Malhotra', emoji: 'https://i.imgur.com/3gOjxPV.png', category: categories[6], price: 0.95},
    {name: 'Chandler Chen', emoji: 'https://i.imgur.com/OCVvFKQ.png', category: categories[6], price: 8.95},
    {name: 'Sinclair Zhao', emoji: 'https://i.imgur.com/3D2yBD0.png', category: categories[6], price: 3.95},
    {name: 'Cheyenne Zhou', emoji: 'https://i.imgur.com/1Fysdg1.png', category: categories[6], price: 7.95},
  ]);

  console.log(items)

  process.exit();

})();
