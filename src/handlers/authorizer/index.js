import ApiAuthorizerHandler from './authorizerHandler'
import { getConnection } from '/opt/dbconnection/dbconnector'

const handler = async (event) => {
  console.log(await getConnection())
  try {
    console.log('Auth')
  } catch (error) {
    throw new Error('Unauthorized')
  }
}

export default handler
