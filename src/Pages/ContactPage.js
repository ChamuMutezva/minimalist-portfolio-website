import { useState } from 'react'

const ContactPage = () => {
    const initState = {
        name: '',
        email: '',
        message: ''
    }

    const [formData, setFormData] = useState(initState)

    const onChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
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

    const { name, email, message } = formData

    return (
        <main className="main">
            <div className="contact">
                <h1> Get in Touch  </h1>
                <p>
                    I’d love to hear about what you’re working on and how I could help. I’m currently
                    looking for a new role and am open to a wide range of opportunities. My preference
                    would be to find a position in a company in London. But I’m also happy to hear about
                    opportunites that don’t fit that description. I’m a hard-working and positive person
                    who will always approach each task with a sense of purpose and attention to detail.
                    Please do feel free to check out my online profiles below and get in touch using the form.
                </p>
            </div>
            <form className="form" onSubmit={onSubmit}>
                <h2> Contact Me </h2>
                <div className="name__container">
                    <label htmlFor="name">Name</label>
                    <input type="text"
                        id="name"
                        name="fullname"
                        placeholder="Chamu mutezva"
                        value={name}
                        onChange={onChange}
                        required
                    />
                </div>
                <div className="email__container">
                    <label htmlFor="email">Email</label>
                    <input type="email"
                        name="email" id="email"
                        placeholder="ckmutezva@gmail.com"
                        value={email}
                        onChange={onChange}
                        required
                    />
                </div>
                <div className="message__container">
                    <label htmlFor="message">Message</label>
                    <input type="textarea"
                        name="message"
                        id="message"
                        placeholder="message"
                        value={message}
                    />
                </div>

                <button>Send Message</button>
            </form>
        </main>
    )
}
export default ContactPage