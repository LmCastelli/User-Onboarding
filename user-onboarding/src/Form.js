import React from "react";

export default function Form(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props

    const onSubmit = e => {
        e.preventDefault()
        submit()
    }

    const onChange = e => {
        const {name, value, checked, type } = e.target
        const valueToUse = type === "checkbox" ? checked : value
        change(name, valueToUse)
    }


    return (
        <form onSubmit={onSubmit}>
            <h2>But does this work too?</h2>

            

            <div className="errorMessages">
                <div>{errors.first_name}</div>
                <div>{errors.last_name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.service}</div>
            </div>

            <div>
                <h2>Please enter your information</h2>

                <button disabled={disabled}>submit</button>
                <br/>

                <label>First Name
                    <input 
                        value={values.first_name}
                        onChange={onChange}
                        name="first_name"
                        type="text"            
                    />
                </label>

                <br/>

                <label>Last Name
                    <input 
                        value={values.last_name}
                        onChange={onChange}
                        name="last_name"
                        type="text"
                    />
                </label>

                <br/>

                <label>Email
                    <input 
                        value={values.email}
                        onChange={onChange}
                        name="email"
                        type="text"
                    />
                </label>

                <br/>

                <label>Password
                    <input 
                        value={values.password}
                        onChange={onChange}
                        name="password"
                        type="password"
                    />
                </label>

                <br/>

                <label>Terms of Service
                    <input 
                        type="checkbox"
                        name="service"
                        onChange={onChange}
                        checked={values.service}
                        value="service"
                    />
                </label>
            </div>
        </form>
        
    )
}