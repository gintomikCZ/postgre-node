// import pg from 'pg'
// const { Client } = pg

// const client = new Client({
//   user: 'eggmaster',
//   password: '54fd8890',
//   host: '80.211.208.41',
//   port: 5432,
//   database: 'sda',
// })

// await client.connect()

// const result = await client.query('SELECT * FROM js6persons')

// const personstasks = await client.query(
//   'SELECT *, js6tasks.task, js6tasks.date FROM js6personstasks JOIN js6tasks ON js6tasks.id = js6personstasks.taskid'
// )

// console.log(personstasks.rows)

// process.exit()



const knex = require('knex')({
  client: 'pg',
  connection: {
    host: '80.211.208.41',
    port: 5432,
    user: 'eggmaster',
    password: '54fd8890',
    database: 'sda',
  },
});

knex.select().table('js6persons').then((data) => {
  console.log(data)
})

// const result = await knex.select().table('js6persons')
// console.log(result)

process.exit()


// sdaapi.glabazna.eu/js6tasks?projectid=24 .... všechny tasky, které mají projectid 24
// SELECT * FROM js6tasks WHERE projectid = 24
