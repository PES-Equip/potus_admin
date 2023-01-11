

export default async function APIService(endpoint, method, body){
  try{
    const options = {
      method: method,
      headers: getHeader(),
    };

    if(body)
     options['body'] = JSON.stringify(body)

    const response = await fetch(API_URL+endpoint, options);

    if(response.status === 401 || response.status === 204)
      return response;

    return response.json();
  }
  catch (e) {
    console.log(e)
    const err = new Error(`Error fetching ${endpoint}`);
    err.status = 500;
    throw err;
  }
}

const API_URL = import.meta.env.VITE_API_URL;

function getHeader(){

    const token = JSON.parse(localStorage.getItem('token'));
    const header = {'Content-Type': 'application/json'}
    
    if(token)
        header['Authorization'] = `Bearer ${token}`;

    return header;
}

