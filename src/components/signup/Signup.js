import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../index.css'
import logoimg from "../../images/lo.svg"
import useForm from './useForm'
import validation from './validation'
import usePassword from './usePassword'
import usePassword2 from './usePassword2'
import { faSignInAlt, faUser, faEnvelope, faLock, faUserTag, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
library.add(fab)

const Signup = ({ submitForm }) => {

    const { handleChange, handleSubmit, values, errors } = useForm(
        submitForm,
        validation
      );
        const [PassInputType, ToggleIcon] = usePassword();
        const [PassInputType2, ToggleIcon2] = usePassword2();
    return (
        <div className="signup-container">
            <div className="left-contain">
                <div className="logo-contain">
                    <img src={logoimg} height="80" className="lg"/>
                </div>
                <div className="card-txt">
                    <h1>Bienvenue !</h1>
                    <p>
                        pour rester en contact avec<br/>
                        nous, veuillez vous connecter<br/>
                        avec vos informations<br/>
                        personnelles.
                    </p>
                    <button className="btn-signin">
                        <a href="/login">
                            Se connecter <FontAwesomeIcon icon={faSignInAlt} className="fasign" />
                        </a>
                    </button>
                </div>
                <div>
                    
                </div>

            </div>
            <div className="right-contain">
                <div className="sign-contain">
                    <div className="icons">
                        <h1> Creer un nouveau compte</h1>
                        <div className="logos">
                            <div className="fa-google f">
                                <FontAwesomeIcon icon={['fab', 'google']} />
                            </div>
                            <div className="fa-linkedin f">
                                <FontAwesomeIcon icon={['fab', 'linkedin']} />
                            </div>
                            <div className="fa-facebook f">
                                <FontAwesomeIcon icon={['fab', 'facebook']} />
                            </div>

                            
                        </div>
                       
                        <p>ou utilisez votre email pour l'inscription</p>
                    </div>
                    <form onSubmit={handleSubmit} className="signup-form" noValidate>
                        <div className="cont nom-container">
                            <div className=" contain">
                                <FontAwesomeIcon icon={faUser} className="icn icna" />
                                <input 
                                    type="text"
                                    name="username"
                                    value={values.username}
                                    onChange={handleChange}
                                    placeholder="Nom" 
                                    className="nom" 
                                    autocomplete="off" 
                                    required/>
                            </div>
                            {errors.username && <p className="err-txt">{errors.username}</p>}
                        </div>
                        <div className="cont prenom-container">
                            <div className=" contain">
                                <FontAwesomeIcon icon={faUser} className="icn icna" />                            
                                <input 
                                    type="text"
                                    name="userprenom"
                                    value={values.userprenom}
                                    onChange={handleChange}
                                    placeholder="Prenom" 
                                    className="prenom" 
                                    autocomplete="off" required/>
                            </div>
                            {errors.userprenom && <p className="err-txt">{errors.userprenom}</p>}
                        </div>
                        <div className="cont email-container">
                            <div className=" contain">
                                <FontAwesomeIcon icon={faEnvelope} className="icnb icn" />
                                <input 
                                    type="email" 
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    placeholder="Email" 
                                    className="email" 
                                    autocomplete="off" required/>
                                
                            </div>
                            {errors.email && <p className="err-txt">{errors.email}</p>}
                        </div>
                        <div className="cont service-container">
                            <div className=" contain">
                                <FontAwesomeIcon icon={faUserTag} className="icn icna" />
                                <select name="Service" name="role" value={values.role} onChange={handleChange}>
                                    <option value='' disabled selected className="none">Select role</option> 
                                    <option value="admin"> Administrateur </option>
                                    <option value="marche"> Service Marché </option>
                                    <option value="commande"> Service Commandes </option>
                                    <option value="budget"> Service Budget </option>
                                    <option value="comptable"> Agence comptable </option>
                                </select>
                            </div>
                            {errors.role && <p className="err-txt">{errors.role}</p>}
                        </div>
                        <div className="cont type-container">
                            <div className=" contain">
                                <FontAwesomeIcon icon={faUserTag} className="icn icna" />
                                <select name="type" name="type" value={values.type} onChange={handleChange}>
                                    <option value='' disabled selected className="none">Select type</option>
                                    <option value="consulter" className="opt"> Consultation </option>
                                    <option value="modifier"> Modification </option>	
                                </select>
                            </div>
                            {errors.type && <p className="err-txt">{errors.type}</p>}
                        </div>
                        <div className="cont password-container">
                            <div className="contain">
                                <FontAwesomeIcon icon={faLock} className="icnb icn" />                            
                                <input 
                                    type= {PassInputType}
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    placeholder="Password" 
                                    className="password" required/>
                                {ToggleIcon}
                                
                            </div>
                            {errors.password && <p className="err-txt">{errors.password}</p>}
                        </div>
                        <div className="cont ch-password-container">
                            <div className="contain">
                                <FontAwesomeIcon icon={faLock} className="icnb icn" />
                                <input 
                                    type= {PassInputType2}
                                    name="password2"
                                    value={values.password2}
                                    onChange={handleChange} 
                                    placeholder="Confirm Password" 
                                    className="password" required/>
                                {ToggleIcon2}
                            </div>
                            {errors.password2 && <p className="err-txt">{errors.password2}</p>}
                        </div>
                        
                        <div className="btn-signup">
                            <button type="submit" className="btn-sign"> S'inscrire <FontAwesomeIcon icon={faSignInAlt} /> </button>
                        </div>
                       
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Signup
