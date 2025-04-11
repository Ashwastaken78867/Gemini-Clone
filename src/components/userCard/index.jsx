


const UserCard = ({photo, userName}) => {
  return(
    <div>
      < img src={photo} alt={userName}/>
      <p>{userName}</p>
    </div>
  )

}
export default UserCard;