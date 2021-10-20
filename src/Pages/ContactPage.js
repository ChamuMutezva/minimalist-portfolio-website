import { useState } from 'react'
import { ReactComponent as Github } from "../images/icons/github.svg"
import { ReactComponent as Twitter } from "../images/icons/twitter.svg"
import { ReactComponent as Linkedin } from "../images/icons/linkedin.svg"

const ContactPage = () => {
    const initState = {
        fullName: '',
        email: '',
        message: '',
        touched: {
            fullName: false,
            email: false,
            message: false,
        }
    }
    // TO investigate why: the name value of the input element must be
    // correspond to the names in the initSate object above
    const [formData, setFormData] = useState(initState)

    const onChange = (e) => {
        const { name, value } = e.target
        console.log(name)
        console.log(value)
        setFormData({ ...formData, [name]: value })
    }

    const onBlur = (e) => {
        const { name } = e.target
        setFormData({ ...formData, touched: { ...formData.touched, [name]: true } })
    }

    const onSubmit = (e) => {        /* 
         e.preventDefault()
          stops the default behavior of form element
         specifically refreshing of page
         */
        e.preventDefault()

        /*
         the is the place where we connect backend api 
         to send the data to the database
         */
        console.log(formData)
    }

    const validate = () => {
        const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        // Object to collect error feedback and to display on the form
        const errors = {
            fullName: '',
            email: '',
            message: '',
        }

        //validate fullname
        if (
            (formData.touched.fullName && formData.fullName.length <= 0) ||
            (formData.touched.fullName && formData.fullName.length > 30)
        ) {
            errors.fullName = 'First name must be between 3 and 30'
        }

        //validate email
        if ((formData.touched.email && formData.email.length <= 0)) {
            errors.email = 'Email cannot be empty'
        }

        if ((formData.touched.email && !formData.email.match(validEmail))) {
            errors.email = 'Please use a valid email address'
        }

        //validate message
        if (
            (formData.touched.message && formData.message.length < 5) ||
            (formData.touched.message && formData.message.length > 50)
        ) {
            errors.message = 'Message  must be between 5 and 50'
        }
        return errors
    }

    const errors = validate()

    const { fullName, email, message } = formData

    return (
        <main className="main">
            <div className="contact__social__container">
                <h1 className="contact__heading"> Get in Touch  </h1>
                <div className="contact__social__divider">
                    <div className="contact">
                        <p className="contact__content">
                            I’d love to hear about what you’re working on and how I could help. I’m currently
                            looking for a new role and am open to a wide range of opportunities. My preference
                            would be to find a position in a company in London. But I’m also happy to hear about
                            opportunites that don’t fit that description. I’m a hard-working and positive person
                            who will always approach each task with a sense of purpose and attention to detail.
                            Please do feel free to check out my online profiles below and get in touch using the form.
                        </p>
                    </div>

                    <div className="social__contact">
                        <ul className="social__contact__list">
                            <li className="social__contact__item">
                                <a className="social__link--btn" href="/">
                                    <Github title="My github profile page"
                                        aria-label="All the projects that i have done on my github page" />
                                </a>
                            </li>
                            <li className="social__contact__item">
                                <a className="social__link--btn" href="/">
                                    <Twitter title="visit me on twitter"
                                        aria-label="Lets chat on twitter" />
                                </a>
                            </li>
                            <li className="social__contact__item">
                                <a className="social__link--btn" href="/">
                                    <Linkedin title="linkedin page"
                                        aria-label="Lets chat on linkedin" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <form className="form" onSubmit={onSubmit}>
                <h2 className="form__heading"> Contact Me </h2>
                <div className="form__input__container">
                    <div className="input__container name__container">
                        <label className="label" htmlFor="name">Name</label>
                        <input type="text"
                            className="inputs"
                            id="fullname"
                            name="fullName"
                            placeholder="Chamu mutezva"
                            value={fullName}
                            onChange={onChange}
                            onBlur={onBlur}
                            required
                        />
                        {errors.fullName && <small className="error__alert">{errors.fullName}</small>}
                    </div>

                    <div className="input__container email__container">
                        <label className="label" htmlFor="email">Email</label>
                        <input type="email"
                            className="inputs"
                            id="email"
                            name="email"
                            placeholder="ckmutezva@gmail.com"
                            value={email}
                            onChange={onChange}
                            onBlur={onBlur}
                            required
                        />
                        {errors.email && <small className="error__alert">{errors.email}</small>}
                    </div>

                    <div className="input__container message__container">
                        <label className="label" htmlFor="message">Message</label>
                        <textarea
                            rows="5"
                            cols="10"
                            className="textarea"
                            id="message"
                            name="message"
                            placeholder="message"
                            onChange={onChange}
                            onBlur={onBlur}
                            value={message}>
                        </textarea>
                        {errors.message && <small className="error__alert">{errors.message}</small>}
                    </div>

                    <button className="btnSend">Send Message</button>
                </div>
            </form>

        </main>
    )
}
export default ContactPage