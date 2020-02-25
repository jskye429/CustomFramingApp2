
// var mysql = require("mysql");
// var fs = require("fs"); 
// var parse = require("csv-parse");
// var async = require("async-hooks");


// var connection = mysql.createConnection({
//   host: "localhost",

//   // Your port; if not 3306
//   port: 3306,

//   // Your username
//   user: "root",

//   // Your password
//   password: "Lena1006",
//   database: "frames_db"
// });

// connection.connect(function(err) {
//   if (err) throw err;
  
//   quoteSearch();
// });


// var parser = parse({delimiter: ','}, function (err, data) {
//     async.eachSeries(data, function (line, callback) {
//       const [sku,series,finish,height,width,catalog_page,price_per_foot] = line;
//       const tableData = {
//           position,
//         sku,
//         series,
//         finish,
//         height,
//         width,
//         catalog_page,
//         price_per_foot,
//       }
//       const query = connection.query("INSERT INTO frame_db SET ?", tableData, function(err, res) {
//         if (err) throw err;
//         console.log(res.affectedRows + " product inserted!\n");
//         callback();
//       })
//       console.log(query.sql);
//     })
//   });
//   fs.createReadStream(inputFile).pipe(parser);