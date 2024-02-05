import crypto from "crypto";
import axios from "axios";

export default async function handler(req, res) {
  //   const merchantId = res.req.body.merchantId;
  //   const merchantTransactionId = res.req.body.merchantTransactionId;

  const {
    code,
    merchantId,
    transactionId: merchantTransactionId,
  } = await req.body;

  const keyIndex = 1;
  const string =
    `/pg/v1/status/${merchantId}/${merchantTransactionId}` +
    process.env.PHONEPE_MERCHANT_SALT_KEY;
  const sha256 = crypto.createHash("sha256").update(string).digest("hex");
  const checksum = sha256 + "###" + keyIndex;

  const prod_URL = `https://api.phonepe.com/apis/hermes/pg/v1/status/${merchantId}/${merchantTransactionId}`;

  const options = {
    method: "GET",
    url: prod_URL,
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      "X-VERIFY": checksum,
      "X-MERCHANT-ID": `${merchantId}`,
    },
  };

  const response = await axios.request(options);
  console.log({ res: response.data });
  if (response.data.success) {
    console.log("first");
    return res.redirect(`${process.env.NEXTAUTH_URL}/account`);
  } else {
    return res.redirect(`${process.env.NEXTAUTH_URL}/`);
  }
}
