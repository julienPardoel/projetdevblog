import React, { useState, useEffect, useRef } from 'react';
import emailjs from 'emailjs-com';
import Navigation from '../components/Navigation';
import { Link } from 'react-router-dom'


const Contact = () => {
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [content, setContent] = useState("");
    const [mail, setMail] = useState({});
    const [submit, setSubmit] = useState(false);

    const serviceID = 'service_0uy3mss';
    const templateID = 'template_otmy828';

    const mailer = emailjs.init('user_3EernjXvKAKV8OTj0GMic');
    const isInitialMount = useRef(true);

    const sendMail = async () => {
        try {
            const mailSent = await emailjs.send(serviceID, templateID, mail);
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmit(true);
        setMail({
            ...{ name },
            ...{ contact },
            ...{ content }
        });
    }

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false
        } else {
            console.log(mail);
            mail && sendMail();
        }
        return () => {

        }
    }, [submit]);
    if (submit) {
        return (
            <>
                <div>Votre message a bien etait envoyé</div>
                <div>
                    <Link to="/blog">Retour aux posts</Link>
                </div>
            </>
        )
    } else {
        return (
            <div className="contact">
                <Navigation />
                <form className="post-form">
                    <label htmlFor="post-name">Votre nom :</label>
                    <input type="text" name="post-name" id="post-name" value={name} onChange={(e) => setName(e.target.value)} />

                    <label htmlFor="post-email">Votre adresse e-mail :</label>
                    <input type="text" name="post-tags" id="post-tags" value={contact} onChange={(e) => setContact(e.contact.value)} />

                    <label htmlFor="post-content">Contenu :</label>
                    <textarea name="post-content" id="post-content" cols="30"
                        rows="10" value={content} onChange={(e) => setContent(e.target.value)}></textarea>

                    <button key="submit" type="primary">Envoyer</button>
                </form>

            </div>
        )
    }

}

export default Contact
