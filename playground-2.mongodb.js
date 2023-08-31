/*//Criar um banco de dados sobre academia


//Código SQL:
//CREATE DATABASE bdacademia


//Para criar utilizando o mongodb usamos
use("bdacademia");
db.dropDatabase();
use("bdacademia");


//Para criar uma tabela "personal" em sql
//CREATE TABLE personal(
    // id INT PRIMARY KEY,
    // nome VARCHAR(45),
    // salario decimal(2)
//);


//Como criar uma tabela no mongodb?
db.createCollection("personal");
//Inserir dados no mongodb
db.personal.insertOne(
    {_id:1,nome:"Júlio",salario:3000}
);
db.personal.insertOne(
    {_id:2,nome:"Jorge",salario:1000}
);
db.personal.insertOne(
    {_id:3,nome:"Pedro",salario:2000}
);


//Consultando no mongodb
use("bdacademia");
db.personal.find();
*/





use("mypet");
db.createCollection("dono");


db.dono.insertMany([
  {_id:1,
  nome: "José",
  idade: 30,
  animal:[
    {_id:1, nome:"Sindy", valor: 900, raca: "gata siamesa"},
    {_id:2, nome:"Toby", valor: 100, raca: "cachorro vira-lata"},
    {_id:3, nome: "Paçoca", valor: 1000, raca: "cachorro maltes"}
  ]},


  {_id:2,
  nome: "Maria",
  idade: 16,
  animal:[
    {_id:4, nome: "Lua", valor: 300, raca: "cachorra pinscher"},
    {_id:5, nome: "Palin", valor: 500, raca: "periquito australiano"},
    {_id:6, nome: "Mali", valor: 300, raca: "gata persa"}
  ]},


  {_id:3,
  nome: "João",
  idade: 20,
  animal:[
    {_id:7, nome: "Peixonauta", valor: 50, raca: "peixe colisa"},
    {_id:8, nome: "Blue", valor: 50, raca: "peixe colisa"},
    {_id:9, nome: "Eva", valor: 3000, raca: "cobra branca"}
  ]},


  {_id:4,
  nome: "Teresa",
  idade: 50,
  animal:[
    {_id:10, nome: "Laica", valor:200, raca: "cachorra basset"},
    {_id:11, nome: "Dora", valor: "1500", raca: "golden retriever"},
    {_id:12, nome: "Sparkle", valor: 1800, raca: "chihuahua"}
  ]},


])




//4-Faça uma consulta que liste o nome e animal do dono com _id 2
use("mypet");
db.dono.find({_id:2},{nome:true, animal:true})


//5-Faça uma consulta que apague o dono com id 2
db.dono.deleteMany({_id:2})


//6-Faça uma consulta que liste todos os dono
db.dono.find({});


//7-Faça uma consulta que apague todos os dados da collection dono
db.dono.deleteMany({})


//8-Faça uma consulta que exclua a collection dono
db.dono.drop();


//9-Faça uma consulta que exclua o banco de dados mypet  
use("mypet");
db.dropDatabase()


