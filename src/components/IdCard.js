function IdCard({ lastName, firstName, gender, height, birth, picture }) {
console.log(birth)

  return (
    <div>
      <img src={picture} alt="pic"/>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>gender: {gender}</p>
      <p>height: {height}</p>
      <p>birth: {birth.toDateString()}</p>
    </div>
  );
}

export default IdCard;
