# Guidr Backend - API & Database

[Product Canvas](https://docs.google.com/document/d/1ns6BMdMOIOjfxtsIzGvBAaxU45Qd_V9YpT-w1JoLRIc/edit?usp=sharing)

Base URL: `https://guidr-backend-api.herokuapp.com/api`

Checking this in a browser or making a `GET` request to it directly should return a `JSON` object like this:  
```
{
    status: "It's Alive!"
}
```

## Authorization  

All endpoints except for `Login` and `Register` will require Authentication by the client. Any client (web or mobile) will need to authenticate their requests by placing a token as the value for the `Authorization` header.
A `token` property is returned in the response on both the `Login` and `Register` requests and does not expire for 7 days.

## Endpoints

### User Accounts  
****
**Login**

Route:  
`/accounts/login`  

Method:  
`POST`  

Description:  
Send user credentials to login to the application  

Expected Body:  
```
{ "username": STRING, "password": STRING }
```  

Returns:  
```
{ "userId": INTEGER, "username": STRING, "token": STRING }
```
****
**Register**  

Route:  
`/api/accounts/register`

Method:  
`POST`  

Description:  
Send user information to register a new user with the application  

Body:  
```
{
    "username": STRING,
    "password": STRING,
    "title": STRING,
    "tagline": STRING,
    "guideSpecialty": STRING,
    "age": INTEGER,
    "yearsExperience": INTEGER
}
```

*NOTE*: only the `username` and `password` properties are required for registration. All other properties can be left out of the object. Any omitted properties will be null in the response and can be updated later.

Returns:  
```
{
  "user": {
    "id": INTEGER,
    "username": STRING,
    "title": STRING,
    "tagline": STRING,
    "guideSpecialty": STRING,
    "age": STRING,
    "yearsExperience": STRING
  },
  "token": STRING
}
```