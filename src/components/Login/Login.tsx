import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validators";
import {Input} from "../common/FormsControls/FormsControls";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={"Login"} name={'login'} validate={[required]} component={Input}/></div>
            <div>  <Field
                placeholder={"password"} name={'password'} validate={[required]} component={'input'}/>
            </div>
            <div><Field type={"checkBox"} name={'rememberMe'} component={'input'}/> remember me</div>
            <div><button>Login</button></div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

export const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData);
    }
    return <><h1>Login</h1>
    <LoginReduxForm onSubmit={onSubmit}/>
        </>
}

export default Login