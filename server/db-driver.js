// npm install --save neo4j-driver
// node example.js
const neo4j = require('neo4j-driver');
const driver = neo4j.driver('bolt://3.92.61.225:7687',
                  neo4j.auth.basic('neo4j', 'tolerance-antenna-price'), 
                  {/* encrypted: 'ENCRYPTION_OFF' */});

const query =
  `
  MATCH (a:Officer {name:$name})-[r:OFFICER_OF|INTERMEDIARY_OF|REGISTERED_ADDRESS*..10]-(b) 
  RETURN b.name as name LIMIT 20
  `;

const params = {"name": "Ross, Jr. - Wilbur Louis"};

const session = driver.session({database:"neo4j"});

// session.run(query, params)
//   .then((result) => {
//     result.records.forEach((record) => {
//         console.log(record.get('name'));
//     });
//     session.close();
//     driver.close();
//   })
//   .catch((error) => {
//     console.error(error);
//   });
