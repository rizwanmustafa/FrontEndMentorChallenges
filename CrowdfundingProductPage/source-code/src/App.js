import React, { useState } from "react";

// Import required components
import PopUpContainer from "./components/PopUpContainer/PopUpContainer";
import BackProject from "./components/BackProject/BackProject";
import Header from "./components/Header/Header";
import ContentBox from "./components/ContentBox/ContentBox";
import ProjectInfo from "./components/ProjectInfo/ProjectInfo";
import ProductProgress from "./components/ProductProgress/ProductProgress";
import ProjectDescription from "./components/ProjectDescription/ProjectDescription";
import PledgeReward from "./components/PledgeReward/PledgeReward";

// Import images 
import projectLogo from "./images/projectLogo.svg";

function App() {
  const [selectedReward, setSelectedReward] = useState("");
  const [popUpVisible, setPopUpVisible] = useState(false);

  function ShowPopUp(event) {
    // Change the selected reward
    let productName = "";
    console.log(event.target)
    if (!event.target.classList.contains("backProjectBtn"))
      productName = event.target.parentElement.parentElement.querySelector(".productName").innerHTML;

    setSelectedReward(productName);

    // Show the form
    setPopUpVisible(true);
    // Navigate to window
    window.location = "#backProjectForm";
  }

  return (
    <>
      <PopUpContainer visible={popUpVisible} setVisibility={setPopUpVisible}>
        <BackProject
          selectedReward={selectedReward}
          setSelectedReward={setSelectedReward}
          setVisibility={setPopUpVisible}
        />
      </PopUpContainer>
      <Header
        menuItms={["About", "Discover", "Get Started"]}
      />

      <ContentBox>
        <ProjectInfo
          projectName="Mastercraft Bamboo Monitor Riser"
          projectDescription="A beautiful & handcrafted monitor stand to reduce neck and eye strain."
          projectLogo={projectLogo}
          backProject={ShowPopUp}
        />
      </ContentBox>

      <ContentBox>

        <ProductProgress
          moneyRaised={89914}
          moneyNeeded={100000}
          totalBackers={5007}
          daysLeft={56}
        />

      </ContentBox>

      <ContentBox>
        <ProjectDescription>

          <p>
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen
            to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve
            your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
          </p>

          <p>
            Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer
            to allow notepads, pens, and USB sticks to be stored under the stand.
          </p>

        </ProjectDescription>

        <PledgeReward
          productName="Bamboo Stand"
          productTxt="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."
          stockQuantity={101}
          minPledgePrice={25}
          handleClick={ShowPopUp}
        />

        <PledgeReward
          productName="Black Edition Stand"
          productTxt="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
          stockQuantity={64}
          minPledgePrice={75}
          handleClick={ShowPopUp}
        />

        <PledgeReward
          productName="Mahogany Special Edition"
          productTxt="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included."
          stockQuantity={0}
          minPledgePrice={200}
          handleClick={ShowPopUp}
        />

      </ContentBox>

    </>
  );
}

export default App;