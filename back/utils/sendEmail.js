const nodemailer = require("nodemailer")

const sendEmail = async options => {
  const transport = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    auth: {
      user: "paula.ramirez@outlook.com",
      pass: "contraseñasecreta"
    }
  });
  const mensaje = {
    from: "Meritas Store <paula.ramirez@outlook.com>",
    to: options.email,
    subject: options.subject,
    text: options.mensaje
  }

  await transport.sendMail(mensaje)
}

module.exports = sendEmail;