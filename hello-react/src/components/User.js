import PropTypes from "prop-types"


function User ({name,surname,friends,isLoggedIn}){

    return (
        <>
            <h1>
                {
                    isLoggedIn ?
                        `${name} ${surname}`:
                        "Giriş yapılmadı"
                }
            </h1>

            {
                friends.map((item ,index)=> <ul>
                    <li key={index.toString()}>{item}</li>
                </ul>)
            }



        </>
    )
}

User.prototype={
    name:PropTypes.string,
    surname: PropTypes.string,
    isLoggedIn: PropTypes.bool,
    friends: PropTypes.array
}

export default User
