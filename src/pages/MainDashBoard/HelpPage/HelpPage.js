import React, {Component} from 'react';
import SupportService from '../../../components/SupportService/SupportService';
import './HelpPage.scss';

class HelpPage extends Component {



  render() {
    return (
      <div className="HelpPage">
          <h2>Help Page</h2>

          <SupportService />
      </div>
     );
    }
  }

  export default HelpPage;
//export default compose(withBackgroundChange, withTopScroll)(HelpPage, 'black');

