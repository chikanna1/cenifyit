import Mailjet from "node-mailjet";

export default function handler(req, res) {
  const mailjet = Mailjet.apiConnect(
    process.env.MJ_APIKEY_PUBLIC,
    process.env.MJ_APIKEY_PRIVATE
  );

  const { subject, message } = req.body;

  const request = mailjet.post("send", { version: "v3.1" }).request({
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
        Subject: subject,
        TextPart: message,
      },
    ],
  });

  request
    .then((result) => {
      if (result.response.status == 200) {
        console.log("Successfully Sent Email");
        return res.status(200).json({ message: "Successfully Sent Email" });
      }
    })
    .catch((err) => {
      console.log(err);
      console.log(err.statusCode);
      console.log(
        "Something Went Wrong Sending Error Email to Cenify IT Admin"
      );
      return res.status(500).json({
        message: "Something Went Wrong Sending Error Email to Cenify IT Admin",
      });
    });
}
