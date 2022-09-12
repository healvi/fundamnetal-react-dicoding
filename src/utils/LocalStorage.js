const getAccessToken = () => {
    return localStorage.getItem('accessToken');
  }
  
const putAccessToken = (accessToken) => {
    return localStorage.setItem('accessToken', accessToken);
}

const deleteStorage = () => {
    return localStorage.clear();
}
export {putAccessToken, getAccessToken, deleteStorage}