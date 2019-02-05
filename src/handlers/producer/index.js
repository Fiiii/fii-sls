import EventProducerHandler from './EventProducerHandler'

const handler = async (event) => {
  try {
    const eventProducerHandler = new EventProducerHandler()
    return eventProducerHandler._process()
  } catch (error) {
    console.log(error)
    throw new Error('Unauthorized')
  }
}

export default handler
