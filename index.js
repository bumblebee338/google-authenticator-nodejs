// const generate_secret_key = require("./generate_secret_key");
const verifyOTP = require("./verify");

// const secretKey = generate_secret_key();
// console.log(secretKey);

const userOTP = "263986"; // Replace with the OTP entered by the user

const verificationResult = verifyOTP(userOTP);

if (verificationResult) {
  console.log("OTP verification successful!");
} else {
  console.log("OTP verification failed!");
}
