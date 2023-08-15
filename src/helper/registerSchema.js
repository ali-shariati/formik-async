// import * as yup from 'yup/index'
import * as Yup from 'yup';

const registerSchema = Yup.object().shape({
    username: Yup.string().email("its not proper email").required(),
    password: Yup
        .string()
        .min(8,'Password is too short - should be 8 chars minimum.')
        .max(20,'Password is too long - should be 20 chars maximum.')
        .matches(/^[a-zA-Z0-9_.-]*$/,'password can only contain latin letters.')
        .required(),
    confirmPassword: Yup
        .string()
        .oneOf([Yup.ref('password',null)], 'password must match'),
    name: Yup.string().required(),
    lastname: Yup.string().required(),
});

export default registerSchema