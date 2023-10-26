import React from "react";
const FetchRandomUser = ()=>{
    const [user, setUser] = React.useState([]);

  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=1")
    .then(response => response.json())
    .then(data => setUser(data))
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return Object.keys(user).length > 0 ? (
    <div>
      <h1>Customer data</h1>
        <h2>Name:{user.results[0].name.first}</h2>
        <h2><img src={user.results[0].picture.large} alt=""/></h2>
    </div>
  ) : (
    <h1>Data pending...</h1>
  );


}

export default FetchRandomUser;