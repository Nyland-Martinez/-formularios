import { Fragment, useState } from "react";
import styles from "./Formulario.module.css";

const InputComponent = ({ label, type, state, setState }) => {


    return (
        <div className={styles.inputElement}>
            <label htmlFor={`${label}Input`}>{label}</label>
            <input
                type={type}
                id={`${label}Input`}
                value={state}
                onChange={(e) => setState(e.target.value)}
            />
        </div>
    )
}



const Formulario = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    
    return (
        <Fragment>
            <form action="#" className={styles.formulario}>
                <InputComponent label="Nombre" type="text" state={firstName} setState={setFirstName} />
                {
                        (firstName.length < 2 && firstName.length > 0) &&

                        <Fragment>
                            <p>El nombre debe tener 2 caracteres minimo</p>
                        </Fragment>
                }
                <InputComponent label="Apellido" type="text" state={lastName} setState={setLastName} />
                {
                        (lastName.length < 2 && lastName.length > 0) &&

                        <Fragment>
                            <p>El apellido debe tener 2 caracteres minimo</p>
                        </Fragment>
                }
                <InputComponent label="Email" type="email" state={email} setState={setEmail} />
                {
                        (email.length < 5 && email.length > 0) &&

                        <Fragment>
                            <p>El correo electrónico debe tener minimo 5 caracteres</p>
                        </Fragment>
                }
                <InputComponent label="Contraseña" type="password" state={password} setState={setPassword} />
                {
                        password.length > 0 && password.length < 8 ?
                                <p>La contraseña debe de tener minimo 8 caracteres</p>
                        : null
                }
                <InputComponent label="Confirmar Contraseña" type="password" state={confirmPassword} setState={setConfirmPassword} />
                {
                        password !== confirmPassword && confirmPassword.length > 0 &&
                        <p>Las contraseñas no coinciden</p>
                }

            </form>
            <hr />
            <h2>LOS DATOS DE SU FORMULARIO:</h2>
            <ul>
                <li>Nombre: {firstName}</li>
                <li>Apellido: {lastName}</li>
                <li>Email: {email}</li>
                <li>Contraseña: {password}</li>
                <li>Confirmar Contraseña:{confirmPassword}</li>
            </ul>
        </Fragment>
    )
}


export default Formulario;