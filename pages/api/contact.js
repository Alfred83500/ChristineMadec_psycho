
import sgMail from '@sendgrid/mail'

export default function handler(req, res) {
    if(req.method !== 'POST') {
        res.status(405).json({message: 'INVALID_METHOD'});
        return;
    }

    //variables

    const {name, tel, email, message} = req.body;


    if(!name || !tel || !email ||name || !message) {
        res.status(400).json({message: 'INVALID_PARAMETER'});
    }

    const pattern =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!pattern.test(email)) {
        res.status(400).send({
            message: "EMAIL_SYNTAX_INCORRECT",
        });
        return;
    }


    //Transformer le retour à la ligne pour le HTML
    const messageModif = message.replace(/\r/g, '<br>')
        .replace(/\n/g, '<br>')
        .replace(/\t/g, '<br>')
        .replace(/<(?!br\s*\/?)[^>]+>/, '<br>');


    //Donner la clé API

    sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);


    //creation du message

    const sendGridMail = {
        to:'tbonnardel@gmail.com',
        from:'tbonnardel@gmail.com',
        templateId: 'd-60295468fea748139f4095c949483d8a',
        dynamic_template_data: {
            name: name,
            Email: email,
            tel: tel,
            message: messageModif,

        }

    }

    //sendgrid

    sgMail
        .send(sendGridMail)
        .then((response) => {
            console.log(response[0].statusCode)
            console.log(response[0].headers)
        })
        .catch((error) => {
            console.error(error)
        })


}
