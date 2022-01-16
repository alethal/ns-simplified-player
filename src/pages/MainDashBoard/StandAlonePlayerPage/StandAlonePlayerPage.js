import React, {Component} from 'react';
import './StandAlonePlayerPage.scss';
import StandAlonePlayerComponent from "../../../components/StandAlonePlayerComponent/StandAlonePlayerComponent";
import  "../../../components/StandAlonePlayerComponent/StandAlonePlayerComponent.scss";


class StandAlonePlayerPage extends Component {



  render() {
    return (
      <div className="StandAlonePlayerPage">
          <h2>StandAlonePlayerPage</h2>
          <hr />
          <StandAlonePlayerComponent />

      </div>
     );
    }
  }

  export default StandAlonePlayerPage;
//export default compose(withBackgroundChange, withTopScroll)(HelpPage, 'black');

