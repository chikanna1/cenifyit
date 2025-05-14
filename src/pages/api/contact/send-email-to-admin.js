import Mailjet from "node-mailjet";

export default async function handler(req, res) {
  const mailjet = Mailjet.apiConnect(
    process.env.MJ_APIKEY_PUBLIC,
    process.env.MJ_APIKEY_PRIVATE
  );

  const { firstName, lastName, email, phoneNumber, message } = req.body;

  try {
    const request = await mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: "admin@cenifyit.com",
            Name: `Contact Mail`,
          },
          To: [
            {
              Email: "admin@cenifyit.com",
              Name: "Cenify IT Contact",
            },
          ],
          Subject: `Hi Cenify, You have a New Contact Form Submission`,
          TextPart: `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nMessage: ${message}`,
          HTMLPart: `<h3>First Name: ${firstName}</h3><h3>Last Name: ${lastName}</h3><h3>Email: ${email}</h3><h3>Phone Number: ${phoneNumber}</h3><h3>Message: ${message}</h3>`,
        },
      ],
    });

    if (request.response.status === 200) {
      console.log("Successfully Sent Email");
      return res.status(200).json({ message: "Successfully Sent Email" });
    } else {
      console.log("Unexpected response status:", request.response.status);
      return res.status(500).json({ message: "Failed to send email" });
    }
  } catch (err) {
    console.error("Error sending email:", err);
    return res.status(500).json({
      message: "Something Went Wrong Sending Error Email to Cenify IT Admin",
    });
  }
}
