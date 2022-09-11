// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from 'nodemailer'

const contactapi = (req, res) => {
    const {Nom, Email, tel, message, rappeler} = req.body;

    const transporter = nodemailer.createTransport({

        host: 'smtp-relay.sendinblue.com',
        port: 587,

        auth: {
            user: process.env.user,
            pass: process.env.pass

        }
    });

    try {
        const emailRes = transporter.sendMail({
            from: Email,
            to: 'chrismade@orange.fr',
            subject: `Prise de contact de ${Nom}`,
            html: `<p>Vous avez une nouvelle prise de contact</p><br>
                <p><strong>Name:</strong> ${Nom} </p><br>
                <p><strong>Email:</strong> ${Email} </p><br>
                <p><strong>Tel:</strong> ${tel} </p><br>
                <p><strong>Demande a être rappelé:</strong> ${rappeler} </p><br>
                <p><strong>Message:</strong> ${message} </p><br>`
        });
        console.log('Message Sent', emailRes.message)
    } catch (err) {

    }
    console.log(req.body)
    res.status(200).json(req.body)
}

export default contactapi;