const client = require("@sendgrid/client");

function sendEmail(client, recipientEmail, senderEmail, senderName, subject, message) {
    return new Promise((fulfill, reject) => {
        const data = {
            from: {
                email: senderEmail,
                name: senderName
            },
            reply_to: {
                email: senderEmail
            },
            personalizations: [
                {
                    to: [
                        {
                            email: recipientEmail,
                            name: "Gitpod Team"
                        }
                    ],
                    subject
                }
            ],
            content: [
                {
                    type: "text/plain",
                    value: message
                }
            ]
        }

        const request = {
            method: "POST",
            url: "/v3/mail/send",
            body: data
        };

        client
            .request(request)
            .then(([response, body]) => {
                console.log(response.statusCode);
                console.log(body);
                fulfill(response);
            })
            .catch(error => reject(error));
    });
}

exports.handler = function (event, context, callback) {
    const {
        SENDGRID_API_KEY,
        SENDGRID_TO_EMAIL
    } = process.env;
    const body = JSON.parse(event.body);
    const email = body.email;
    const name = body.name;
    const subject = body.subject;
    const message = body.message;

    client.setApiKey(SENDGRID_API_KEY);
    sendEmail(
        client,
        SENDGRID_TO_EMAIL,
        email,
        name,
        subject,
        message + '\n\n' + event.body
    ).then(response => callback(null, { statusCode: response.statusCode, body: email + " added" }))
     .catch(err => callback(err, null));
};
