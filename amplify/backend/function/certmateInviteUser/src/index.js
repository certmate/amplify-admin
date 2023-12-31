
const { invite } = require('./helpers');
/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    const { to, company } = JSON.parse(event.body);

    await invite({ to, company });
    /**
     * Epecting
     * to
     * code
     * company { name, owner, email }
     */
    return {
        statusCode: 200,
        //  Uncomment below to enable CORS requests
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*"
        },
        body: "Invite sent",
    };
};
