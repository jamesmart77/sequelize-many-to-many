# sequelize-many-to-many

Simple setup to test out creating sequelize many-to-many database relationships

This repo was created in an effort to complete the setup first sought after in this Medium how-to article: 
[Medium Article](https://medium.com/@THEozmic/how-to-create-many-to-many-relationship-using-sequelize-orm-postgres-on-express-677753a3edb5)

The following guide is super helpful for the nitty gritty basics of setting up a Node, Express, and PG application with Sequelize.
https://scotch.io/tutorials/getting-started-with-node-express-and-postgres-using-sequelize

#Initial Setup Steps
- Run `user-groups-dev` in the terminal. You must have Postgres installed to perform this. This will create the local database
- Modify the server/config file accordingly with your credentials to connect to your local db
- Run `sequelize db:migrate` in the terminal before launching the application. This will perform all the migrations to setup the database
- Run `npm run dev` 
