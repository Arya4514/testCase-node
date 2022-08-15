To start code follow below steps

to start project in dev environment change .env.dev credentials.
This are microservices so need to start both the services first start the statsCounter because it has demo data script binded with the db connection. 

To start statsCounter service
```
cd statsCounter
npm install 
npm run dev
```

To start stats service
```
cd stats
npm install 
npm run dev
```

or if you want to start it in to production create .env.prod file 

```
npm run prod
```

For the test cases of api we have used Mocha to test the api run below command

```
npm run test
```

For the api documents we have used the swagger documentation to which you can find on `baseUrl/doc`.

to generate documents run below command

```
npm run gendoc
```

