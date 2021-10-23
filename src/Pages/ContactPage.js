import ContactSocials from '../Components/ContactSocials'
import FormSocials from '../Components/FormSocials'

const ContactPage = () => {

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

                    <ContactSocials />
                </div>
            </div>

            <FormSocials />
        </main>
    )
}
export default ContactPage