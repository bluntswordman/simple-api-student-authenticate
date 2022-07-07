## API SPEC ##
#### Sign Up ####
- Method    : POST
- Endpoint  : `/v1/auth/register`
- Header :
    - Content-Type : application/json
- Body :
```json 
  {
      "firstname" : "string",
      "lastname" : "string",
      "npm" : "string",
      "email" : "string",
      "password" : "string",
      "confirmPassword" : "string"
  }
```
- Response :
```json 
  {
    "status" : 201,
    "msg" : "Register Berhasil"
  }
```
#### Sign In ####
- Method    : POST
- Endpoint  : `/v1/auth/login`
- Header :
    - Content-Type : application/json
- Body :
```json 
  {
      "email" : "string",
      "password" : "string",
  }
```
- Response :
```json 
  {
    "status" : 200,
    "msg" : "Login Berhasil",
    "data" : {
      "accesstoken" : "string"
    }
  }
```
#### GET All data students ####
- Method    : GET
- Endpoint  : `/v1/user`
- Header :
    - Content-Type : application/json
- auth : 
```json
  {
    "type": "bearer",
    "bearer": {
        "key": "accesstoken",
        "type": "string"
    }
  }
```
- Response :
```json 
  {
    "status" : 200,
    "data" : [
      {
        "id" : "integer",
        "firstname" : "string",
        "lastname" : "string",
        "npm" : "string",
        "email" : "string",
      },
      {
        "id" : "integer",
        "firstname" : "string",
        "lastname" : "string",
        "npm" : "string",
        "email" : "string",
      }
    ]
  }
```
#### GET data student by ID ####
- Method    : GET
- Endpoint  : `/v1/user/{id}`
- Header :
    - Content-Type : application/json
- auth : 
```json
  {
    "type": "bearer",
    "bearer": {
        "key": "accesstoken",
        "type": "string"
    }
  }
```
- Response :
```json 
  {
    "status" : 200,
    "data" : {
      "id" : "integer",
      "firstname" : "string",
      "lastname" : "string",
      "npm" : "string",
      "email" : "string"
    }
  }
```
#### Update data student ####
- Method    : PUT
- Endpoint  : `/v1/user/{id}`
- Header :
    - Content-Type : application/json
- auth : 
```json
  {
    "type": "bearer",
    "bearer": {
        "key": "accesstoken",
        "type": "string"
    }
  }
```
- Body :
```json 
  {
      "firstname" : "string",
      "lastname" : "string",
      "npm" : "string",
      "email" : "string",
  }
```
- Response :
```json 
  {
    "status" : 200,
    "msg" : "Data berhasil di perbaharui"
  }
```
#### Delete data student ####
- Method    : DELETE
- Endpoint  : `/v1/user/{id}`
- Header :
    - Content-Type : application/json
- auth : 
```json
  {
    "type": "bearer",
    "bearer": {
        "key": "accesstoken",
        "type": "string"
    }
  }
```
- Response :
```json 
  {
    "status" : 200,
    "msg" : "Data berhasil dihapus"
  }
```
