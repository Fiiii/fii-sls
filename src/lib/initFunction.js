export function init() {
  return async (event, context, cb) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))

      const response = {
        body: JSON.stringify({
          message: 'Hi SLS!'
        })
      }

      cb(null, response)
    } catch (err) {
      cb(err, null)
    }
  }
}
