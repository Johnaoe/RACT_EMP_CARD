function Profile({name, photo}) {

  return (
    <div>
      <h1>Hedy {name}'s Profile</h1>
      <img src={photo} alt="Avatar face"/>
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve spectrum technology</li>
      </ul>
    </div>
  );
}

export default Profile;


