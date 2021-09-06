function WelcomePage({user, setIsLogged}){
    function HandleLogout(){
        setIsLogged(false)
    }
    return(
        <>
        <div>
            <h1>Welcome {user}</h1>
            <button onClick= {HandleLogout}>Exit</button>
        </div>
        </>
    )
}
export default WelcomePage;