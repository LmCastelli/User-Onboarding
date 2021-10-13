import * as yup from 'yup'

const formSchema = yup.object().shape({
    first_name: yup
        .string()
        .trim()
        .required("first name is required")
        .min(2, "first name should be 2 or more characters long"),
    last_name: yup
        .string()
        .trim()
        .required("last name is required")
        .min(4, "last name is needed as well"),
    email: yup 
        .string()
        .email("must be email")
        .required("email is required"),
    password: yup
        .string()
        .required("need a password"),
    service: yup
        .boolean()
        .oneOf([true], "Need to agree")
});

export default formSchema;