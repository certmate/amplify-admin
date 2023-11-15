module.exports = {
    invite: async function ({ to, company }) {
        return await new Promise(async (resolve) => {
            const aws = require('aws-sdk');
            const nodemailer = require("nodemailer");
            const transporter = nodemailer.createTransport({
                SES: new aws.SES({ region: 'ap-southeast-2', apiVersion: "2010-12-01" })
            });

            try {
                transporter.sendMail({
                    from: `CertMate <admin@certmate.com.au>`,
                    // to: `${event.organiser.name} <${event.organiser.email}>`,
                    bcc: to,
                    replyTo: `No Reply <no-reply@certmate.com.au>`,
                    subject: `[CertMate] Invitation to join company - ${company}`, // Subject line
                    text: `[CertMate] Invitation to join company - ${company}`, // plaintext version
                    html: `
                        <!doctype html>
                        <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
                            xmlns:o="urn:schemas-microsoft-com:office:office">
                        
                        <head>
                            <title></title>
                            <!--[if !mso]><!-->
                            <meta http-equiv="X-UA-Compatible" content="IE=edge">
                            <!--<![endif]-->
                            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
                            <meta name="viewport" content="width=device-width,initial-scale=1">
                            <style type="text/css">
                                #outlook a {
                                    padding: 0;
                                }
                        
                                body {
                                    margin: 0;
                                    padding: 0;
                                    -webkit-text-size-adjust: 100%;
                                    -ms-text-size-adjust: 100%;
                                }
                        
                                table,
                                td {
                                    border-collapse: collapse;
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                }
                        
                                img {
                                    border: 0;
                                    height: auto;
                                    line-height: 100%;
                                    outline: none;
                                    text-decoration: none;
                                    -ms-interpolation-mode: bicubic;
                                }
                        
                                p {
                                    display: block;
                                    margin: 13px 0;
                                }
                            </style>
                            <!--[if mso]>
                                    <noscript>
                                    <xml>
                                    <o:OfficeDocumentSettings>
                                        <o:AllowPNG/>
                                        <o:PixelsPerInch>96</o:PixelsPerInch>
                                    </o:OfficeDocumentSettings>
                                    </xml>
                                    </noscript>
                                    <![endif]-->
                            <!--[if lte mso 11]>
                                    <style type="text/css">
                                        .mj-outlook-group-fix { width:100% !important; }
                                    </style>
                                    <![endif]-->
                            <!--[if !mso]><!-->
                            <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" rel="stylesheet" type="text/css">
                            <style type="text/css">
                                @import url(https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700);
                            </style>
                            <!--<![endif]-->
                            <style type="text/css">
                                @media only screen and (min-width:480px) {
                                    .mj-column-per-100 {
                                        width: 100% !important;
                                        max-width: 100%;
                                    }
                        
                                    .mj-column-per-33-333333333333336 {
                                        width: 33.333333333333336% !important;
                                        max-width: 33.333333333333336%;
                                    }
                                }
                            </style>
                            <style media="screen and (min-width:480px)">
                                .moz-text-html .mj-column-per-100 {
                                    width: 100% !important;
                                    max-width: 100%;
                                }
                        
                                .moz-text-html .mj-column-per-33-333333333333336 {
                                    width: 33.333333333333336% !important;
                                    max-width: 33.333333333333336%;
                                }
                            </style>
                            <style type="text/css"></style>
                        </head>
                        
                        <body style="word-spacing:normal;">
                            <div>
                                <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
                                <div style="margin:0px auto;max-width:600px;">
                                    <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                                        <tbody>
                                            <tr>
                                                <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                                                    <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
                                                    <div class="mj-column-per-100 mj-outlook-group-fix"
                                                        style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                                                            style="vertical-align:top;" width="100%">
                                                            <tbody>
                                                                <tr>
                                                                    <td style="font-size:0px;word-break:break-word;">
                                                                        <div style="height:50px;line-height:50px;">&#8202;</div>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <!--[if mso | IE]></td></tr></table><![endif]-->
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
                                <div style="margin:0px auto;max-width:600px;">
                                    <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                                        <tbody>
                                            <tr>
                                                <td
                                                    style="border:1px solid black;direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                                                    <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:598px;" ><![endif]-->
                                                    <div class="mj-column-per-100 mj-outlook-group-fix"
                                                        style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                                                            style="vertical-align:top;" width="100%">
                                                            <tbody>
                                                                <tr>
                                                                    <td align="left"
                                                                        style="font-size:0px;padding:10px 25px;padding-bottom:10px;word-break:break-word;">
                                                                        <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:14px;line-height:1;text-align:left;color:#000000;">
                                                                        Hi!<br /><br />
                                                                        You have been invited to join the company ${company} on CertMate.<br /><br />
                                                                        <br /><br />
                                                                        <i>For more information about CertMate, visit <a href="www.certmate.com.au">www.certmate.com.au</a>.</i><br /><br />
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <!--[if mso | IE]></td><td class="" style="vertical-align:top;width:199.33333333333337px;" ><![endif]-->
                                                    <div class="mj-column-per-33-333333333333336 mj-outlook-group-fix"
                                                        style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                                                            style="vertical-align:top;" width="100%">
                                                            <tbody>
                                                                <tr>
                                                                    <td align="center" vertical-align="middle"
                                                                        style="font-size:0px;padding:10px 25px;padding-top:10px;word-break:break-word;">
                                                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                                                                            style="border-collapse:separate;line-height:100%;">
                                                                            <tr>
                                                                                <td align="center" bgcolor="#4703D7" role="presentation"
                                                                                    style="border:none;border-radius:24px;cursor:auto;mso-padding-alt:10px 25px;background:#4703D7;"
                                                                                    valign="middle"><a href="https://admin.certmate.com.au?s=yes"
                                                                                        style="display:inline-block;background:#4703D7;color:#ffffff;font-family:Ubuntu, Helvetica, Arial, sans-serif, Helvetica, Arial, sans-serif;font-size:13px;font-weight:normal;line-height:120%;margin:0;text-decoration:none;text-transform:none;padding:10px 25px;mso-padding-alt:0px;border-radius:24px;"
                                                                                        target="_blank">Join company on CertMate</a></td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
                                <div style="margin:0px auto;max-width:600px;">
                                    <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                                        <tbody>
                                            <tr>
                                                <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                                                    <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
                                                    <div class="mj-column-per-100 mj-outlook-group-fix"
                                                        style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                                                            style="vertical-align:top;" width="100%">
                                                            <tbody>
                                                                <tr>
                                                                    <td style="font-size:0px;word-break:break-word;">
                                                                        <div style="height:50px;line-height:50px;">&#8202;</div>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <!--[if mso | IE]></td></tr></table><![endif]-->
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <!--[if mso | IE]></td></tr></table><![endif]-->
                            </div>
                        </body>
                    </html>
                    `
                }, (err, info) => {
                    console.log(err);
                    console.log(info.envelope);
                    console.log(info.messageId);
                    resolve();
                });
            }
            catch (e) {
                console.log(e);
                resolve();
            }
        });
    },
}