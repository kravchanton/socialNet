import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validators";
import {Input} from "../common/FormsControls/FormsControls";
import {connect} from "react-redux";
import {login} from "../../redux/auth_reducer";
import {Redirect} from "react-router-dom";
import {RootStateType} from "../../redux/store";
import styles from '../common/FormsControls/FormsControls.module.css'
type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={"Login"} name={'login'} validate={[required]} component={Input}/></div>
            <div><Field
                placeholder={"password"} name={'password'} type={'password'} validate={[required]} component={'input'}/>
            </div>
            <div><Field type={"checkBox"} name={'rememberMe'} component={'input'}/> remember me</div>
            <div>
                <button>Login</button>
            </div>
            {props.error && <div className={styles.FormSummaryError}>{props.error}</div>}
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

export const Login = (props: any) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.login, formData.password, formData.rememberMe)
    }
    if (props.isAuth) <Redirect to={'/profile'}/>
    return <><h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </>
}
const mapStateToProps = (state: RootStateType) => {
    return {
        isAuth: state.auth.isAuth
    }
}
export default connect(mapStateToProps, {login})(Login)