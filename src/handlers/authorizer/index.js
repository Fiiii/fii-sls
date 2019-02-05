import ApiAuthorizerHandler from './authorizerHandler'

const handler = async (event) => {
  try {
    console.log('Auth')
  } catch (error) {
    throw new Error('Unauthorized')
  }
}

export default handler
