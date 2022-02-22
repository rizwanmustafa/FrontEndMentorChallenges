import React from "react";
import "./PledgeReward.css"; // Later add conditional rendering to make it unselectable if the stockQuantity is 0

/*

Expected Props:

productName: string,
productTxt: string,
stockQuantity: number,
minPledgePrice: number,
handleClick: function.

*/

function PledgeReward(props) {
  return (

    <div className={props.stockQuantity === 0 ? "pledgeReward disabled" : "pledgeReward"}>

      <div>
        <h3 className="productName">{props.productName}</h3>
        <p className="pledgeTxt">Pledge ${props.minPledgePrice} or more</p>
      </div>

      <div>
        <p>{props.productTxt}</p>
      </div>

      <div>
        <div>
          <span className="stockQuantity">{props.stockQuantity}</span>
          <span>left</span>
        </div>

        <button onClick={props.stockQuantity === 0 ? null : props.handleClick}>{props.stockQuantity === 0 ? "Out of stock" : "Select Reward"}</button>
      </div>

    </div>

  );
}

export default PledgeReward;