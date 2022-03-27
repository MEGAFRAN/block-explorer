import { ALGORAND } from "../api/variables"
import { ApiCore } from "../utils/core"



export const algorandService = new ApiCore({
  getAll: false,
  getSingle: true,
  post: false,
  put: false,
  patch: false,
  remove: false,
  apiUrl: ALGORAND.url,
  endpoint: ALGORAND.endpoint
})