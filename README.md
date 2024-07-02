# Express-CRUD-API

## workflow
### model -> controller -> router
1. **create a model:** this contains a dataset(could be a database table or api data). define and write a logic to the operations you are going to perform on that perticular dataset.
2. **create a controller:** this contains the request and responce based functions for almost every function you've define in model. basic purpos of this is to read the request params or body and provide the proper responce.
3. **create a router:** this contains the endpoint and the parameter to indentify incoming request.
