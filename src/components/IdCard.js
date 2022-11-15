function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  console.log(birth);

  return (
      <div className="data">
        <img src={picture} alt="pic" />
        <div>
          <p>
            <b>First Name:</b> {firstName}
          </p>
          <p>
            <b>Last Name: </b>
            {lastName}
          </p>
          <p>
            <b>Gender: </b>
            {gender}
          </p>
          <p>
            <b>Height: </b>
            {height}
          </p>
          <p>
            <b>Birth: </b>
            {birth.toDateString()}
          </p>
        </div>
    </div>
  );
}

export default IdCard;
