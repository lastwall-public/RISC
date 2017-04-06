![Lastwall Logo](lw-logo.jpg) 


# Integration Steps

The minimal steps needed to integrate with the LastWall API are illustrated below.

## Add script to your login page

The recommended mode of integration is via server-side calls to the API. The data collected by the script can be sent to the LastWall API via appropriate server side modules.


## Server side integration - Recommended

Depending on your server-side stack - setup a module to connect to the LastWall API via HTTPS.

### HMAC authentication

Lastwall API calls using HMAC authentication must be sent using a secret shared on Sign up with Lastwall    

For more information on HMAC Authentication, see [HMAC Authentication](https://en.wikipedia.org/wiki/Hash-based_message_authentication_code)

## API Return Values

All Lastwall API calls will return one of the following status codes:

- **200** - OK: the API call was successful
- **400** - Error: the API call failed due to invalid input or caller error
- **401** - Authorization Error: the API call failed due to an API key authentication failure
- **500** - Fatal: the API call failed due to an internal Lastwall system error (not your fault)

For all successful API calls (code 200), the relevant response data will be returned as JSON in the message body. 


# ![Lastwall Logo](lw-logo.jpg) RISC API Calls

The API call available for a standard RISC service.


---------------------------------------

## POST - /auth


Authenticates a user based on a RISC payload. Returns a trust score indicating the level of RISK associated with the user.


#### Required Parameters

- **username** - Login Id or Username
- **riscdata** - JSON payload of data collected by "script"
- **kvcookie** - Cookie received through headers
- **ipaddress** - Client IP Address


#### Return Values

- **status** - String 'LW_Success' or 'LW_Failure'. If it's an LW_Failure, the specific message is included in the 'error' return value.
- **trust** - Trust Level (HIGH/MEDIUM/LOW).
- **score** - Trust score (0 - 1).
- **digitalcookie** - This needs to be returned back to the browser in json response.
- **securecookie** - This needs to be sent to the browser through Headers.


### Examples

**Request:** `curl -X POST -H "(headers)" "https://risc.lastwall.com/api/auth" -d '{"username":"(username)","riscdata":"(jsonvals_riscdata)", "kvcookie":"(kvcookie)","ipaddress":"(User IP Address)"}'"`    

**Response:** `HTTP/1.1 200 OK`    `{ "status": "LW_Success" , "trust" : "HIGH" , "score" : "0.87538745", "digitalCookie":"2342_kfljsfoeicsldkfjowe234skfj3", "secureCookie":"2435_jl2i3rlkeod3iruwelkf3iuro23jfwe"}`

---------------------------------------

## POST - /authorize

Authorize a transaction with low trust.  This needs to be called for the transaction with low trust, after the verification process.

#### Required Parameters

#### Required Parameters

- **username** - Login Id or Username
- **deviceId** - JSON payload of data collected by "script"


#### Return Values

- **status** - String 'LW_Success' or 'LW_Failure'. If it's an LW_Failure, the specific message is included in the 'error' return value.


### Examples

**Request:** `curl -X POST -H "(headers)" "https://risc.lastwall.com/api/authorize" -d '{"username":"(username)","deviceId":"(deviceId)"}'"`    

**Response:** `HTTP/1.1 200 OK`    `{ "status": "LW_Success" }`

---------------------------------------

## POST - /resetcadence


Resets the cadence of any user whose password is changed.

#### Required Parameters

- **username** - Login Id or Username


#### Return Values

- **status** - String 'LW_Success' or 'LW_Failure'. If it's an LW_Failure, the specific message is included in the 'error' return value.


### Examples

**Request:** `curl -X POST -H "(headers)" "https://risc.lastwall.com/api/resetcadence" -d '{"username":"(username)"}'"`    

**Response:** `HTTP/1.1 200 OK`    `{ "status": "LW_Success" }`

---------------------------------------

## POST - /account


Based on a RISC payload. Returns a trust score indicating the level of RISK associated with the new Sign Up.


#### Required Parameters

- **username** - Login Id or Username
- **riscdata** - JSON payload of data collected by "script"
- **ipaddress** - Client IP Address


#### Return Values

- **status** - String 'LW_Success' or 'LW_Failure'. If it's an LW_Failure, the specific message is included in the 'error' return value.
- **trust** - Trust Level (HIGH/MEDIUM/LOW).
- **score** - Trust score (0 - 1).

### Examples

**Request:** `curl -X POST -H "(headers)" "https://risc.lastwall.com/api/account" -d '{"username":"(username)","riscdata":"(jsonvals_riscdata)","ipaddress":"(Client IP Address)"}'"`    

**Response:** `HTTP/1.1 200 OK`    `{ "status": "LW_Success" , "trust" : "HIGH" , "score" : "0.87538745"}`

---------------------------------------
