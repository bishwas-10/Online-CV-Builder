
# Online CV Builder

Create a professional resume in a few minutes.

This resume builder features include a user-friendly interface , add ,delete ,edit  information easily, and robust form handling capabilities powered by zod and react form hook. Additionally, users can customize their resumes with any selected resume template, giving them the ability to personalize the appearance of their information even further. If the user wants to finish the task later or wants to edit in future , this feature is also available. All your provided data will be saved in database once you submit the form and OFCOURSE you can print it.


OFFICIAL SITE : 




## SCREENSHOTS

![Landing Page Screenshot](https://drive.google.com/file/d/16QV8CmQQnm1vi4S7Rd8KHuqNIA6vrM0s/view?usp=drive_link)


## Features

It has below core features:

- The resume PDF is updated in real time as you enter your resume information, so you can easily see the final output.

- Each resume template is expertly designed and follows the exact “resume rules” hiring managers look for. Stand out and get hired faster with field-tested resume templates.

- Once user starts editing the resume the user resume information will store as long as user wants.  

- User can edit, update, delete the form feilds also!


## Tech Stack

**Client:** 
- (Next js/ React)
 - Redux Toolkit
 -  TailwindCSS
 - Typescript
 - zod for schema validation
 - react-hook-form

**Server:**
- Node
- Express
- Mongo DB
- zod


## Requirements

node: v18.12.0 and above






## Environment Variables

To run this project, you will need to add the following environment variables to your .env file


-   for server - create a .env file inside the server folder and following key to it:

`MONGO_URI`- from mongodb

`TOKEN_KEY` generate a token running following command in terminal

 `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))" `

 `REFRESH_TOKEN_KEY` generate a refresh token running above command in terminal


 -  for client - .env file inside the client folder and following key to it:

`NEXT_PUBLIC_GOOGLE_OAUTH_CLIENTID`- from google cloud console in order to use google OAUTH verification
## Installation

Method npm

1. clone the repo 

```bash
git clone https://github.com/bishwas-10/Online-CV-Builder.git
```

2.Change the directory

i. For frontend
```bash
cd client
```
ii. For Backend
```bash
cd server
```
iii.Run following command on both powershell
```bash
npm install
```

 

3. Change the cors origin to http://localhost:3000 in server and proxy server in client in package.json to http://localhost:4000 in client.

4. Inside the api/instance.ts file change the baseUrl to http://localhost:4000/api/users

5.Run the client and server

i.For client

  ```bash
npm run dev
``` 
ii.For server

  ```bash
npm start
``` 

Your client and server will be up and running in respective port!!!

ENJOY!!
