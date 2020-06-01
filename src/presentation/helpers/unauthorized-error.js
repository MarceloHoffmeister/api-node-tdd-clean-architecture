module.exports = class UnathorizedError extends Error {
  constructor (paramName) {
    super('Unauthorized')
    this.name = 'UnathorizedError'
  }
}
