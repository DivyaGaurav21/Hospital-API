
  # Hospital Rest-API
## Description
 We’re going to design an API for the doctors of a Hospital which has been allocated by the
govt for testing and quarantine + well being of COVID-19 patients
- There can be 2 types of Users
- Doctors
- Patients
- Doctors can log in
- Each time a patient visits, the doctor will follow 2 steps
- Register the patient in the app (using phone    number, if the patient already exists, just
return the patient info in the API)
- After the checkup, create a Report
- Patient Report will have the following fields
- Created by doctor
- Status (patient status like:- fever , malaria etc):

The Routes here used in project
- /doctors/register → with username and password
- /doctors/login → returns the JWT to be used
- /patients/register
- /patients/:id/create-report
- /patients/:id/all_reports → List all the reports of a patient oldest to latest
- /reports/:status → List all the reports of all the patients filtered by a specific status
  
## Tech stack
 Node.js , Express , Mongo-DB , passport-JWT
  
## How to setup the project on local system
  1. Clone this project
  2. Start by installing npm if you don't have it already.
  3. Navigate to Project Directory by : Using
  ```
  cd Hospital-API
  
  ```
  
  After reaching to the this preoject directory yo have to run this following command :
  ```
  $ npm install
  $ nodemon index.js or npm start
  ```

 
  ## Operation check route end point on postman
  * http://localhost:8000/doctors/register
  * here doctors register themselves on this request end point
  ![Alt text](https://github.com/DivyaGaurav21/Hospital-API/blob/master/postman_screenshot/Screenshot%20(53).png?raw=true)
  * http://localhost:8000/doctors/login
  * now doctor login on this request.
  ![Test Image 4](https://github.com/DivyaGaurav21/Hospital-API/blob/master/postman_screenshot/Screenshot%20(54).png?raw=true)
  * by using doctor login jwt bearer jwt token , patient will be creatatd.
  * http://localhost:8000/patients/register
  ![test5](https://github.com/DivyaGaurav21/Hospital-API/blob/master/postman_screenshot/Screenshot%20(55).png?raw=true)
  * now creating of patient report edpoint by taking patient id (63f8b34ecf8cd598d92bfd44) reference.
  * http://localhost:8000/patients/:id/create-report 
  ![test6](https://github.com/DivyaGaurav21/Hospital-API/blob/master/postman_screenshot/Screenshot%20(56).png?raw=true)
  * now showing all report of patient by patient id(63f8b34ecf8cd598d92bfd44).
  * http://localhost:8000/patients/:id/all_reports

  ![test5](https://github.com/DivyaGaurav21/Hospital-API/blob/master/postman_screenshot/Screenshot%20(57).png?raw=true)
  * route endpoints :- /reports/:status
  ![test5](https://github.com/DivyaGaurav21/Hospital-API/blob/master/postman_screenshot/Screenshot%20(58).png?raw=true)
 

  ## Folder Structure
```bash

Hospital-API
    |               
    |
    |               |--->mongoose.js
    |--->config---->|
    |               |--->passport-jwt-strategy.js
    |
    |                  |-->doctor_controoler.js
    |--->controllers-->|-->patient_controller.js
    |                  |-->report_controller.js
    |
    |               |-->Doctor.js
    |--->models---->|-->Patient.js
    |               |-->Report.js
    |
    |              
    |               |-->doctor.js
    |--->routes---->|-->patient.js
    |               |-->index.js
    |               |-->report.js
    |
    |
    |              
    |
    |-->index.js
    |
    |-->node_modules
    |-->.gitignore
    |-->package.json
    |
``` 
 
## 🚀 About Me
I'm a junior full stack developer...

who enjoye and love to work on web developement and learning new technology in my free times.
## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://divyagaurav21.github.io/my-portfolio/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/divya-gaurav-917889215/)


