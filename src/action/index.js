export function AddUser(email, userName, image) {
  return {
    type: 'ADD_USER',
    payload: userName,
    email,
    image,
  };
}
