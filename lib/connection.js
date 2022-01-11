const rest = new (require("rest-mssql-nodejs"))({
  user: process.env.NEXT_PUBLIC_USER,
  password: process.env.NEXT_PUBLIC_PASSWORD,
  server: process.env.NEXT_PUBLIC_HOST,
  database: process.env.NEXT_PUBLIC_DATABASE,
  port: 1433,
  options: {
    encrypt: true,
  },
});

module.exports = {
  rest,
};

// const { Connection } = require("tedious");


// const config = {
//   authentication: {
//     options: {
//       userName: "ponce",
//       password: "com20k%%-",
//     },
//     type: "default",
//   },
//   server: "materiales-vasquez.database.windows.net",
//   options: {
//     database: "Materiales Vasquez",
//     encrypt: true,
//   },
// };

// const connection = new Connection(config);

// connection.on("connect", (err) => {
//   if (err) {
//     console.error(err.message);
//   } else {
//     console.log('Connected');
//     // queryDatabase();
//   }
// });

// connection.connect();

// module.exports = connection;