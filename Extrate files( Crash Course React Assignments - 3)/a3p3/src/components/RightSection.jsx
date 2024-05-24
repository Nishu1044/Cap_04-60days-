import { useContext } from "react";
import { BulbContext, BulbContextProvider } from "../context/BulbContextProvider";

export default function RightSection() {
  const { isOn, switchOn, switchOff } = useContext(BulbContext);
    /*complete the missing code*/
  

  return (
    <div className="right-section">
      <p>Right Section ( Bulb ) </p>
      <div className="light-bulb-container">
        <div className={`light-bulb ${isOn ? "on" : "off"}`}></div>
        <button
          onClick=

            {switchOn}
          
        >
          SWITCH ON
        </button>
        <button
          onClick=
            
            {switchOff}
          
        >
          SWITCH OFF
        </button>
      </div>
    </div>
  );
}
