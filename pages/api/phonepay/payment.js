import crypto from "crypto";
import axios from "axios";
import { useRouter } from "next/router";

export default async function handler(req, res) {
  try {
    console.log("start initiating payment");
    const merchantTransactionId = "Tr-" + Date.now();
    const merchantUserId = "MUID" + Date.now();

    const data = {
      merchantId: process.env.PHONEPE_MERCHANT_ID,
      merchantTransactionId: merchantTransactionId,
      merchantUserId: merchantUserId,
      name: req.body.name,
      amount: req.body.amount * 100,
      redirectUrl: `${process.env.NEXTAUTH_URL}/api/phonepay/status/${merchantTransactionId}`,
      redirectMode: "POST",
      callbackUrl: `${process.env.NEXTAUTH_URL}/api/phonepay/status/${merchantTransactionId}`,
      mobileNumber: req.body.number,
      paymentInstrument: {
        type: "PAY_PAGE",
      },
    };

    const payload = JSON.stringify(data);
    console.log(payload);
    const payloadMain = Buffer.from(payload).toString("base64");
    const keyIndex = 1;
    const string =
      payloadMain + "/pg/v1/pay" + process.env.PHONEPE_MERCHANT_SALT_KEY;
    const sha256 = crypto.createHash("sha256").update(string).digest("hex");
    const checksum = sha256 + "###" + keyIndex;
    console.log("c===", checksum);

    //this is dev url
    const prod_URL =
      "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay";

    const options = {
      method: "POST",
      url: prod_URL,
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        "X-VERIFY": checksum,
      },
      data: {
        request: payloadMain,
      },
    };

    // const redirect = response.data.data.instrumentResponse.redirectInfo.url;
    // router.push(redirect);

    //   console.log(options);

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        res.status(200);
        //working

        //yt : https://www.youtube.com/watch?v=PBuka_8-qIk
        //github: https://github.com/waleed-shaikh/phonepe-nodejs/blob/main/controller/phonepe/paymentController.js
        //phonepe: https://developer.phonepe.com/v1/reference/pay-api-1

        return res.redirect(
          response.data.data.instrumentResponse.redirectInfo.url
        );
      })
      .catch(function (error) {
        // console.error(error);
        res.status(500).send({
          message: error.message,
          success: false,
        });
      });
  } catch (error) {
    console.log(error);
  }
}
