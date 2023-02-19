import iconUser from '../assets/user-painel/user.png';

function UserBox(){
    return (
        <div className="user-box mx-1 my-5">
            <div className="mx-2"> 
                <img src={iconUser} alt="user-icon" width={59}/>
            </div>
            <div>
                <h3 className="your-account-text1 font-Inter mb-1">
                    Good evening, David de Deus
                </h3>
                <div className="your-account-box font-Inter">
                    Your Account
                </div>
            </div>
        </div>
    );
}

export default UserBox;