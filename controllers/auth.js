import request from "request"
import querystring from "querystring"
import logger from "logger"

const stateKey = "spotify_auth_state"

const buffer = Buffer.from(process.env.SECRET_KEY + process.env.SECRET_KEY)

let env = {}

if ( process.env.NODE_ENV !=='production') {
  env = require('../.env')
}
