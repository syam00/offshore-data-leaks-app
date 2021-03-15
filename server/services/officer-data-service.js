const neo4j = require('neo4j-driver');
const driver = neo4j.driver('bolt://3.92.61.225:7687',
    neo4j.auth.basic('neo4j', 'tolerance-antenna-price'),
    {/* encrypted: 'ENCRYPTION_OFF' */ });


function getOfficer(inputText) {

    return new Promise(function (resolve, reject) {

        try {

            const query = `MATCH p=(n:Officer)-[r]-(m) WHERE n.name CONTAINS $name
            RETURN p LIMIT 10`;

            const params = { "name": inputText };

            const session = driver.session({ database: "neo4j" });


            session.run(query, params)
                .then((result) => {
                    session.close();
                    driver.close();
                    resolve(result.records);
                })
                .catch((error) => {
                    console.error(error);
                    reject(error);
                });

        } catch (error) {
            console.log(error);
            reject(error);
        }
    });
}

module.exports = {
    getOfficer
}