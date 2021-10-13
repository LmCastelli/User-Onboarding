import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import * as yup from "yup"
import Form from "./Form"
import schema from "./formSchema"
import React, {useState, useEffect } from 'react'


const initialFormValues = {
  first_name: "", 
  last_name: "",
  email: "",
  password: "",
  service: false,
}

const initialFormErrors = {
  first_name: "",
  last_name: "",
  email: "", 
  password: "",
  service: ""
}

const userList = [
  {first_name: "bob", last_name: "bobby", email: "bob@bob.com", password: "no way", service: true}
];
const initialDisabled = true;

function App() {
  const [users, setUsers] = useState(userList);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  // Post new person
  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
    .then(res => {
      setUsers([res.data, ...users]);
    }).catch(err => {
      console.error(err)
    }).finally(() => {
      setFormValues(initialFormValues);
    })
  }


  //Event Handlers 


  //Validate
  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors( { ...formErrors, [name]: ""}))
      .catch(err => setFormErrors( { ...formErrors, [name]: err.errors[0]}))
  }
  //Change

  const change = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues, [name]: value
    })
  }

  const formSubmit = () => {
    const newUser = {
      first_name: formValues.first_name.trim(),
      last_name: formValues.last_name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      service: !!formValues.service
    }

    postNewUser(newUser);
  }

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])


  return (
    <div className="App">
      <h1>Do it work</h1>

      <Form 
        values={formValues}
        change={change}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
      
      <h2>List of Users!</h2>
      {
        users.map(user => {
          return (
            <div>
              First Name:{user.first_name} <br/>
              Last Name:{user.last_name}  <br/>
              Email:{user.email}      <br/>
              Password??{user.password}   <br/>
              Do you agree to service: {user.service === true ? "Yes" : "No"}     <br/>
            
            </div>
            
          )
        })
      }

    </div>
  );
}

export default App;
