import { useState } from 'react'

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
            <div className="contact">
                <h1 className="contact__heading"> Get in Touch  </h1>
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
                        <a href="/">
                            <svg role="img" xmlns="http://www.w3.org/2000/svg" width="25" height="24">
                                <title id="github">My github profile page</title>
                                <text className="sr__only">All the projects that i have done</text>
                                <path fill="#33323D"
                                    d="M12.5 0C5.594 0 0 5.51 0 12.305c0 5.437 3.581 10.048 8.547 11.674.625.116.854-.265.854-.592 0-.292-.01-1.066-.016-2.092-3.477.742-4.21-1.65-4.21-1.65-.569-1.42-1.39-1.8-1.39-1.8-1.133-.764.087-.748.087-.748 1.255.086 1.914 1.268 1.914 1.268 1.115 1.881 2.927 1.338 3.641 1.024.113-.797.434-1.338.792-1.646-2.776-.308-5.694-1.366-5.694-6.08 0-1.343.484-2.44 1.286-3.302-.14-.31-.562-1.562.11-3.256 0 0 1.047-.33 3.437 1.261 1-.273 2.063-.409 3.125-.415 1.063.006 2.125.142 3.125.415 2.375-1.591 3.422-1.261 3.422-1.261.672 1.694.25 2.945.125 3.256.797.861 1.281 1.959 1.281 3.302 0 4.727-2.921 5.767-5.703 6.07.438.369.844 1.123.844 2.276 0 1.647-.016 2.97-.016 3.37 0 .322.22.707.86.584 5-1.615 8.579-6.23 8.579-11.658C25 5.509 19.403 0 12.5 0z" />
                            </svg>
                        </a>
                    </li>
                    <li className="social__contact__item">
                        <a href="/">
                            <svg role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="20">
                                <title id="twitter">visit me on twitter</title>
                                <text className="sr__only">lets chat here on twitter</text>
                                <path fill="#33323D" d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z" />
                            </svg>
                        </a>
                    </li>
                    <li className="social__contact__item">
                        <a href="/">
                            <svg role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                <title id="linkedin">i am available on linkedin</title>
                                <text className="sr__only">linkedin profile</text>
                                <path fill="#33323D" d="M21.6 0H2.4C1.08 0 0 1.08 0 2.4v19.2C0 22.92 1.08 24 2.4 24h19.2c1.32 0 2.4-1.08 2.4-2.4V2.4C24 1.08 22.92 0 21.6 0zM7.2 20.4H3.6V9.6h3.6v10.8zM5.4 7.56c-1.2 0-2.16-.96-2.16-2.16 0-1.2.96-2.16 2.16-2.16 1.2 0 2.16.96 2.16 2.16 0 1.2-.96 2.16-2.16 2.16zm15 12.84h-3.6v-6.36c0-.96-.84-1.8-1.8-1.8-.96 0-1.8.84-1.8 1.8v6.36H9.6V9.6h3.6v1.44c.6-.96 1.92-1.68 3-1.68 2.28 0 4.2 1.92 4.2 4.2v6.84z" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>

            <form className="form" onSubmit={onSubmit}>
                <h2 className="form__heading"> Contact Me </h2>
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
            </form>

        </main>
    )
}
export default ContactPage