import React from "react";
import "./ProfileScreen.css";
import Nav from "./Nav";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../dbFIrebase/Firebase";

function ProfileScreen() {
  const user = useSelector(selectUser);
  // console.log(user);

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="netflix-avatar"
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <div className="profileScreen__quality">
                <div className="profileScreen__qualityOptions1">
                  <div>
                    <h5>Premium</h5>
                    <h6>4K + HDR</h6>
                  </div>
                  <button className="profileScreen__subscribe">
                    Subscribe
                  </button>
                </div>

                <div className="profileScreen__qualityOptions1">
                  <div>
                    <h5>Standard</h5>
                    <h6>1080p</h6>
                  </div>
                  <button className="profileScreen__subscribe">
                    Subscribe
                  </button>
                </div>

                <div className="profileScreen__qualityOptions1">
                  <div>
                    <h5>Basic</h5>
                    <h6>720p</h6>
                  </div>
                  <button className="profileScreen__subscribe">
                    Subscribe
                  </button>
                </div>
              </div>

              <button
                onClick={() => auth.signOut()}
                className="profileScreen__signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
