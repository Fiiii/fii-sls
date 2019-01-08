const dotenv = require('dotenv')
const result = dotenv.config({ path: './config/.env' })

if (result.error) {
  throw result.error
}

console.log(result.parsed)

module.exports.getEnvVariables = () => ({
  FOO: process.env.FOO,
  BAR: process.env.BAR,
  AWS_ACCOUNT_ID: process.env.AWS_ACCOUNT_ID,
  AWS_KMS_KEY_ARN: process.env.AWS_KMS_KEY_ARN
})
