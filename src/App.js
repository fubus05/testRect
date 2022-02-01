import './App.css';
import logo from './img/logo.png'
import airHorn from './img/airhorn.svg'
import { FaStar } from "react-icons/fa"
import {useState} from "react";

const App = () => {
  const [rate, setRate] = useState(0);
  const [hover, setHover] = useState(null);

  return (
    <div className="App">
      <div className="main">
        <div className="mobileResp">
          <div className="imgBlock">
            <div className="saleBlock">
              <img src={airHorn} alt="" className="logoAirHorn"/>
              <p>OUR TOP CHOICE</p>
            </div>
            <img src={logo} alt="" className="logo"/>
          </div>
          <div className="welcomeBlock">
            <h1>Welcome Bonus</h1>
            <p>Deposit £10 <br/>Get up to 500 Free Spins</p>
            <a href="">18+. Play Safe. Opt in required. </a>
            <h2 className="show">Up to £25<br/>
              New Player Bonus</h2>
          </div>
        </div>
        <div className="mobileRespSec">
          <div className="rateBlock">
            <h1 className="pVote">Please vote!</h1>
            <div>
              {[...Array(5)].map((star, i) =>{
                const rvalue = i + 1;

                return (
                    <label>
                      <input type="radio" name="rating" value={rvalue}
                             onClick={() => {
                               setRate(rvalue)
                             }}
                      />
                      <FaStar size={18} color={rvalue <= (hover || rate) ? "#FD9904" : "#01247E33"}
                              onMouseEnter={() => setHover(rvalue)}
                              onMouseLeave={() => setHover(null)} className="starSet"/>
                    </label>
                );
              })}
            </div>
            <p>Rated by (3,904)</p>
          </div>
          <h1 className="rateNumb">{rate}</h1>
          <div className="getBonus">
            <button className="Bonus">Get Bonus </button>
            <a href="#">Visit William Hill</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
