import axios, { AxiosRequestConfig } from 'axios'; 
import { handleError, handleResponse } from './response';
 
const getAll = async (apiUrl:string | undefined, endpoint:string | undefined) => 
{ 
  return await axios
                .get(`${apiUrl}/${endpoint}`)
                .then(handleResponse)
                .catch(handleError)
}

const getSingle = async (apiUrl:string | undefined, endpoint:string | undefined, id:AxiosRequestConfig<any>) => 
{ 
  return await axios
                .get(`${apiUrl}/${endpoint}/${id}`)
                .then(handleResponse)
                .catch(handleError)
}

const post = async (apiUrl:string | undefined, endpoint:string | undefined, model:object) => 
{ 
  const headers = {'Content-Type': 'application/json'}

  return await axios
                .post(`${apiUrl}/${endpoint}`, model, {headers: headers})
                .then(handleResponse)
                .catch(handleError)
}

const put = async (apiUrl:string | undefined, endpoint:string | undefined, id: string, model:object) => 
{ 
  const headers = {'Content-Type': 'application/json'}

  return await axios
                .put(`${apiUrl}/${endpoint}/${id}`, model, {headers: headers})
                .then(handleResponse)
                .catch(handleError)
}

const patch = async (apiUrl:string | undefined, endpoint:string | undefined, model:object) => 
{ 
  return await axios
                .patch(`${apiUrl}/${endpoint}`, model)
                .then(handleResponse)
                .catch(handleError)
}

const remove = async (apiUrl:string | undefined, endpoint:string | undefined, id:any) => 
{ 
  return await axios
              .delete(`${apiUrl}/${endpoint}/${id}`)
              .then(handleResponse)
              .catch(handleError)
}

export const apiProvider = 
{ 
  getAll, 
  getSingle, 
  post, 
  put, 
  patch, 
  remove 
}