import React from 'react';
//import 'SimpleFormFour.scss';
// get our fontawesome imports
import { faUser} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class MemberPWReminder extends React.Component {


render() {
    return  (
        <div className="SignIn.ModalDialog">
        <div className="resetPwForm">
        <h2>Need a Reminder?</h2>
        <h1>Please input your site login email address to receive your info. <p>Problems? Please contact help.</p></h1>
        <form action="https://nakedswordcash.com/signup/password.php" method="GET">
        <input type="hidden" name="siteid" value="22"/> 
          <input type="hidden" name="submit" value="1"/>


          <fieldset>
              <label>
                        {/*<i className="fas fa-user"> </i>*/}
                        <FontAwesomeIcon icon={faUser} />
                        <input 
                        name="email"
                        type="email"
                         className="Input" placeholder="Account Email" />
                    </label>
                </fieldset>
                <button type="submit" className="ResetMyPasswordBtn">send my info</button>



          {/*<button type="submit">
            Submit
    </button>*/}
        </form>
        <p>&nbsp;</p><p><em>shawn51@cubik.com - test user.<br />Be sure to use an email that has an active membership in Guerilla.  Beta-Trenton does not have sign-up set-up yet.</em></p>
      </div>
      </div>
    );
  }
}

