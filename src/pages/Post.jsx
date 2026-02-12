
import {useParams} from 'react-router'

export default function Post() {
  const {username,email,phone}=useParams()
  return (
    <>
      <h1>{username}</h1>
      <h1>{email}</h1>
      <h1>{phone}</h1>
    </>
  );
}
