const SaveSession = (key, value) => {
    sessionStorage.setItem(key, value);
}
const getSession = (key) => {
    return sessionStorage.getItem(key);
}
const deleteSession = (key) => {
    sessionStorage.removeItem(key);
}

const saveAuthSession = (data) => {
    console.log(data)
    let {accessToken
} = data
    SaveSession("token", accessToken
)
  
}
const deleteAuthSession = () => {
    deleteSession("token");
  
}
export {SaveSession, getSession, deleteSession, deleteAuthSession, saveAuthSession}