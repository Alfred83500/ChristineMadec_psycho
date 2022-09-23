
import sgMail from '@sendgrid/mail'

export default function handler(req, res) {
    if(req.method !== 'POST') {
        res.status(405).json({message: 'INVALID_METHOD'});
        return;
    }

    //variables

    const {name, tel, email, message} = req.body;


    if(!name || !tel || !email || !message) {
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
        .replace(/<(?!br\s*\/?)[^>]+>/, '');


    //Donner la clé API

    sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);


    //creation du message

    const sendGridMail = {
        to:'contact.christine.madec@gmail.com',
        from:'contact.christine.madec@gmail.com',
        templateId: 'd-e11f40a0502c467a881bbcfd6b6b4ca3',
        dynamic_template_data: {
            name: name,
            email: email,
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

        // (async () => {
        //     try {
        //         await sgMail.send(sendGridMail);
        //         res.status(202).json({mesage: 'EMAIL_SENT_SUCCESSFULLY'})
        //
        //     }
        //
        //     catch {
        //         res.status(500).json({message: 'ERROR_WITH_SENDGRID'})
        //
        //     }
        // })();

}
