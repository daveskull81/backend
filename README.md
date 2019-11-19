# Guidr Backend - API & Database

[Product Canvas](https://docs.google.com/document/d/1ns6BMdMOIOjfxtsIzGvBAaxU45Qd_V9YpT-w1JoLRIc/edit?usp=sharing)

Base URL: `https://guidr-backend-api.herokuapp.com/api`

Checking this in a browser or making a `GET` request to it directly should return a `JSON` object like this:  
```
{
    status: "It's Alive!"
}
```

## Authentication  

All endpoints except for `Login` and `Register` will require Authentication by the client. Any client (web or mobile) will need to authenticate their requests by placing a token as the value for the `Authorization` header.
A `token` property is returned in the response on both the `Login` and `Register` requests and does not expire for 7 days.

## Errors  

When errors occur with the requests a json object will be returned with an `error` property containing information on what error occurred.  
```
{
  error: <ERROR_STRING_TEXT>
}
```

## Endpoints

### Summary  

| Route | Method | Description |
|---|---|---|
| `/accounts/login` | POST | Send user credentials to login to the application | 
| `/accounts/register` | POST | Send user information to register a new user with the application |
| `/users/:userId/trips` | GET | Retrieve all of the trips for a particular user by their userId |
| `/trips/:tripId` | GET | Retrieve data of a specific trip by using its unique id |
| `/trips/:tripId` | PUT | Update the data of a single trip by its unique id |
| `/trips/:tripId` | DELETE | Delete a single trip by its unique id |
| `/trips` | POST | Add data of a new trip for a user |


### User Accounts  
****
**Login**

Route:  
`/accounts/login`  

Method:  
`POST`  

Description:  
Send user credentials to login to the application  

Body:  
```
{ "username": STRING, "password": STRING }
```  

Returns:  
User Login Object
```
{ "userId": INTEGER, "username": STRING, "token": STRING }
```
****
**Register**  

Route:  
`/accounts/register`

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
Registered User Object
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
****
### Trips
****
**Get User Trips**

Route:  
`/users/:userId/trips`

Method:  
`GET`  

Description:  
Retrieve all of the trips for a particular user by their userId 

Returns:  
Array of trip objects. By default the trip objects are sorted in ascending order by the `date` property.
```
[
  {
    "id": INTEGER,
    "title": STRING,
    "isPrivate": BOOLEAN,
    "isProfessional": BOOLEAN,
    "image": STRING, //Image URL to be used as src of the image
    "duration": FLOAT,
    "distance": FLOAT,
    "date": DATE,
    "tripType": STRING
  }
]
```
*NOTE*: If user has not trips this will return an empty array.

****
**Get Trip by Id**

Route:  
`/trips/:tripId`

Method:  
`GET`  

Description:  
Retrieve data of a specific trip by using its unique id

Returns:  
A single trip object
```
{
  "id": INTEGER,
  "title": STRING,
  "isPrivate": BOOLEAN,
  "isProfessional": BOOLEAN,
  "image": STRING, //Image URL to be used as src of the image
  "duration": FLOAT,
  "distance": FLOAT,
  "date": DATE,
  "tripType": STRING
}
```
****
**Update Trip By Id**

Route:  
`/trips/:tripId`

Method:  
`PUT`  

Description:  
Update the data of a single trip by its unique id

Body:  
```
{
    "id": INTEGER,
    "title": STRING,
    "isPrivate": BOOLEAN,
    "isProfessional": BOOLEAN,
    "image": STRING, //Image URL to be used as src of the image
    "duration": FLOAT,
    "distance": FLOAT,
    "date": DATE,
    "tripType": STRING
}
```
*NOTE*: Only the properties of the object that need to be updated should be provided in the body of the request.

Returns:  
The updated trip object
```
{
  "id": INTEGER,
  "title": STRING,
  "isPrivate": BOOLEAN,
  "isProfessional": BOOLEAN,
  "image": STRING, //Image URL to be used as src of the image
  "duration": FLOAT,
  "distance": FLOAT,
  "date": DATE,
  "tripType": STRING
}
```
****
**Delete Trip By Id**

Route:  
`/trips/:tripId`

Method:  
`DELETE`  

Description:  
Delete a single trip by its unique id

Returns:  
The trip object of the deleted trip
```
{
  "id": INTEGER,
  "title": STRING,
  "isPrivate": BOOLEAN,
  "isProfessional": BOOLEAN,
  "image": STRING, //Image URL to be used as src of the image
  "duration": FLOAT,
  "distance": FLOAT,
  "date": DATE,
  "tripType": STRING
}
```
****
**Add Trip**

Route:  
`/trips`

Method:  
`POST`  

Description:  
Add data of a new trip for a user

Body:  
```
{
    "id": INTEGER,
    "title": STRING, // **REQUIRED**
    "isPrivate": BOOLEAN,
    "isProfessional": BOOLEAN,
    "image": STRING, //Image URL to be used as src of the image
    "duration": FLOAT,
    "distance": FLOAT,
    "date": DATE,
    "tripType": STRING,
    "user_id": INTEGER // **REQUIRED** Id of the user the trips belongs to.
}
```
*NOTE*: The only two properties that are required when creating a new trip is the `title` and the `user_id`. Other properties can be omitted and updated later.

Returns:  
The newly created trip object
```
{
  "id": INTEGER,
  "title": STRING,
  "isPrivate": BOOLEAN,
  "isProfessional": BOOLEAN,
  "image": STRING, //Image URL to be used as src of the image
  "duration": FLOAT,
  "distance": FLOAT,
  "date": DATE,
  "tripType": STRING
}
```
****