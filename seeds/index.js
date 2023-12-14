const sequelize = require('../config/connection');
const seedPost = require('./blogPost-seeds');
const seedUser = require('./blogUser-seeds');
const seedComment = require('./blogComment-seeds');
//const seedComment = require('./product-tag-seeds');


const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedPost();
  console.log('\n----- POST SEEDED -----\n');

  await seedUser();
  console.log('\n----- USER SEEDED -----\n');

  await seedComment();
  console.log('\n----- COMMENT SEEDED -----\n');
  
  process.exit(0);
};

seedAll();