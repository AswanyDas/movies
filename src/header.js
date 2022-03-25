import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Header() {

    const [showUser, setShowUser] = useState(false);

    const navigate = useNavigate();

    const show = () => {
        if (showUser === false) {
            setShowUser(true);
        } else {
            setShowUser(false);
        }
    }

    return (
        <div>
            <div class="w3-container w3-teal">
                <h1 class="w3-left">IMDB Movies</h1>
                <img src="https://www.w3schools.com/w3css/img_avatar3.png" alt="Avatar"
                    class="w3-right w3-circle w3-margin-right" width="60px" onClick={() => show()} />
            </div>

            {showUser && <div id="id01" class="w3-panel w3-teal w3-display-container" style={{ marginTop: 0, float: "right" }} >
                <p>FCS  User</p>
                <p onClick={() => navigate(`/Login`)}>Logout</p>
            </div>}
        </div>
    )
}

export default Header;