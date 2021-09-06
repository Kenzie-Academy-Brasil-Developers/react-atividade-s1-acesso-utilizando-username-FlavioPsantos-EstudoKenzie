import { useState } from "react/cjs/react.development";

function GetUserComponent({ setUser, setIsLogged }) {
  const [userInput, setUserInput] = useState("");
  
  return (
    <>
      <div>
        <form>
          <input
            type="text"
            value={userInput}
            onChange={(event) => setUserInput(event.target.value)}
          />
          
        </form>
        <button onClick={() => HandleLogin(userInput)}>Acessar com o nome</button>
      </div>
    </>
  );
  function HandleLogin(userInput){
    setUser(userInput)
    setIsLogged(true)
    return setUserInput(userInput)
 }
}
export default GetUserComponent;