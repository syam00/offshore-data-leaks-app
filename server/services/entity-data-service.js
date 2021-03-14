const neo4j = require('neo4j-driver');
const driver = neo4j.driver('bolt://3.92.61.225:7687',
                  neo4j.auth.basic('neo4j', 'tolerance-antenna-price'), 
                  {/* encrypted: 'ENCRYPTION_OFF' */});