import { SMTPClient } from 'emailjs';
 
function sendEmail(){
const client = new SMTPClient({
    user: 'geral@corvafarmhouse.com',
    password: 'Marreta78',
    host: 'mail.corvafarmhouse.com',
    ssl: true,
});
 
client.send(
    {
        text: 'i hope this works',
        from: `geral@corvafarmhouse.com`,
        to: `geral@corvafarmhouse.com`,
        subject: 'testing emailjs with angular',
    },
    (err, message) => {
        console.log(err || message);
    }
);
}