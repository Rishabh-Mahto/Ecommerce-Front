import crypto from "crypto";
import axios from "axios";

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
      redirectMode: "POST",
      redirectUrl: `${process.env.NEXTAUTH_URL}/api/phonepay/status/${merchantTransactionId}`,
      callbackUrl: `${process.env.NEXTAUTH_URL}/api/phonepay/status/${merchantTransactionId}`,
      paymentInstrument: {
        type: "PAY_PAGE",
      },
    };

    const payload = JSON.stringify(data);
    const payloadMain = Buffer.from(payload).toString("base64");
    const keyIndex = 1;
    const string =
      payloadMain + "/pg/v1/pay" + process.env.PHONEPE_MERCHANT_SALT_KEY;
    const sha256 = crypto.createHash("sha256").update(string).digest("hex");
    const checksum = sha256 + "###" + keyIndex;

    const prod_URL = "https://api.phonepe.com/apis/hermes/pg/v1/pay";

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

    const paymentResponse = await axios.request(options);

    if (paymentResponse.data.success) {
      return res.redirect(
        paymentResponse.data.data.instrumentResponse.redirectInfo.url
      );
    }

    return;
  } catch (error) {
    console.log(error);
  }
}
