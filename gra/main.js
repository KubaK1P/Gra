const mainButton = document.getElementById("mainButton");
const mainDisplay = document.getElementById("mainDisplay");
const mainGoldPlace = document.getElementById("gold");
const mainUpdateCostDisplay = document.getElementById("upgradeTier1Cost");
const asideUpgradeButtonTier1 = document.getElementById("upgradeTier1")
let mainGoldButton;
let mainGoldDisplay;
let mainUpdateCostTier1 = 200;
mainUpdateCostDisplay.innerHTML = mainUpdateCostTier1;
let mainIncrement = 1;
let mainGoldIncrement = 0.1;
let counter = 0;
let goldCounter = 0;
let canAddGold = true;
function checkIfGoldVisible(counter) {
     return (counter > 50);
}
function handleMainClick() {
     counter += mainIncrement;
     mainDisplay.innerHTML = counter; 
     if (checkIfGoldVisible(counter) && canAddGold) {
          mainGoldPlace.innerHTML = `<button id="mainButton2" class="button-18"> Kliknij</button><span id="mainDisplay2" class="mainDisplay">0</span>`; 
          mainGoldButton = document.getElementById("mainButton2");
          mainGoldButton.addEventListener("click", handleGoldClick);
          mainGoldDisplay = document.getElementById("mainDisplay2");
          canAddGold = false;
     }
}
function handleGoldClick() {
     counter += mainIncrement * 3;
     mainDisplay.innerHTML = counter; 
     goldCounter += mainGoldIncrement;
     mainGoldDisplay.innerHTML = goldCounter.toFixed(1);
}
function handleUpgradeTier1() {
     if (counter >= mainUpdateCostTier1) {
          counter -= mainUpdateCostTier1;
          mainIncrement += 3;
          mainGoldIncrement += 0.1;
          mainUpdateCostTier1 *= mainIncrement * 0.8;
          updateUpgradeCost(mainUpdateCostTier1)
          mainDisplay.innerHTML = counter; 
          mainGoldDisplay.innerHTML = goldCounter.toFixed(1);
     } else {
          return 0;
     }
}
function updateUpgradeCost(newVal) {
     mainUpdateCostDisplay.innerHTML = newVal.toFixed();
}
mainButton.addEventListener("click", handleMainClick);
asideUpgradeButtonTier1.addEventListener("click", handleUpgradeTier1);