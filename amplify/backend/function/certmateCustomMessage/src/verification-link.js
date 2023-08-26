/**
 * @type {import('@types/aws-lambda').CustomMessageTriggerHandler}
 */
exports.handler = async (event) => {
  // Define the URL that you want the user to be directed to after verification is complete
  if (event.triggerSource === 'CustomMessage_SignUp') {
    const { codeParameter } = event.request;
    const { region, userName } = event;
    const { clientId } = event.callerContext;
    const redirectUrl = `${process.env.REDIRECTURL}/?username=${userName}`;
    const resourcePrefix = process.env.RESOURCENAME.split('CustomMessage')[0];

    const hyphenRegions = [
      'us-east-1',
      'us-west-1',
      'us-west-2',
      'ap-southeast-1',
      'ap-southeast-2',
      'ap-northeast-1',
      'eu-west-1',
      'sa-east-1',
    ];

    const separator = hyphenRegions.includes(region) ? '-' : '.';

    const payload = Buffer.from(
      JSON.stringify({
        userName,
        redirectUrl,
        region,
        clientId,
      }),
    ).toString('base64');
    // eslint-disable-next-line spellcheck/spell-checker
    const bucketUrl = `http://${resourcePrefix}verificationbucket-${process.env.ENV}.s3-website${separator}${region}.amazonaws.com`;
    const url = `${bucketUrl}/?data=${payload}&code=${codeParameter}`;
    const message = `${process.env.EMAILMESSAGE}. \n ${url}`;
    event.response.smsMessage = 'Verify your account';
    event.response.emailSubject = `CertMate - Verify your account`;
    event.response.emailMessage = `<table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';background-color:#edf2f7;margin:0;padding:0;width:100%">
    <tbody><tr>
    <td align="center" style="box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'">
    <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';margin:0;padding:0;width:100%">
    <tbody><tr>
    <td style="box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';padding:25px 0;text-align:center">
    <a href="https://certmate.com.au" style="box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';color:#3d4852;font-size:19px;font-weight:bold;text-decoration:none;display:inline-block" >CertMate
    </a>
    </td>
    </tr>
    
    
    <tr>
    <td width="100%" cellpadding="0" cellspacing="0" style="box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';background-color:#edf2f7;border-bottom:1px solid #edf2f7;border-top:1px solid #edf2f7;margin:0;padding:0;width:100%">
    <table class="m_-1409504138391161621inner-body" align="center" width="570" cellpadding="0" cellspacing="0" role="presentation" style="box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';background-color:#ffffff;border-color:#e8e5ef;border-radius:2px;border-width:1px;margin:0 auto;padding:0;width:570px">
    
    <tbody><tr>
    <td style="box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';max-width:100vw;padding:32px">
    <p style="box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';font-size:16px;line-height:1.5em;margin-top:0;text-align:left">Welcome to CertMate!<br>
    To start using the app, please  your email by clicking on the link below.<br>
    <a href="${url}" style="box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';color:#3869d4">Verify Now</a>
    </p>
    <p style="box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';font-size:16px;line-height:1.5em;margin-top:0;text-align:left">Regards, <br>
    CertMate Team
    <br></p>
    
    
    
    </td>
    </tr>
    </tbody></table>
    </td>
    </tr>
    
    <tr>
    <td style="box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'">
    <table class="m_-1409504138391161621footer" align="center" width="570" cellpadding="0" cellspacing="0" role="presentation" style="box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';margin:0 auto;padding:0;text-align:center;width:570px">
    <tbody><tr>
    <td align="center" style="box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';max-width:100vw;padding:32px">
    <p style="box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';line-height:1.5em;margin-top:0;color:#b0adc5;font-size:12px;text-align:center">© 2023 CertMate. All rights reserved.</p>
    
    </td>
    </tr>
    </tbody></table>
    </td>
    </tr>
    </tbody></table>
    </td>
    </tr>
    </tbody></table>
    `;
    console.log('event.response', event.response);
  }

  return event;
};
