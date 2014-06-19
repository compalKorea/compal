var generic_pool = require('generic-pool');
var mysql = require('mysql');
var pool = generic_pool.Pool({
        name: 'mysql',
        create: function(callback) {
                var config = {
            			host: "14.63.171.159",
            	        port: "3306",
            	        user: "compal",
            	        password: "compal",
            	        database: "compal"
                };
                var client = mysql.createConnection(config);
                client.connect(function (error){
                  if(error){
                    console.log(error);
                  }
                  callback(error, client);
                });
        },
        destroy: function(client) {
          client.end();
        },
        max: 10,
        idleTimeoutMillis : 300000,
        log : false
});
 
process.on("exit", function() {
  pool.drain(function () {
    pool.destroyAllNow();
  });
});
 
 
module.exports = pool;