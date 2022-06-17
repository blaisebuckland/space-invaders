/* HOSTILE ALIENS

OOP 

MAKING OUR SHIPS - CLASS OF SHIP - EXTEND FOR SHIP TYPE. PARAMETERS - STATRTING POINTS, LOSS INCREMENT

BUTTON - ON CLICK HIT A RANDOM SHIP - RANDOMISER FOR ALL SHIPS THAT WILL NOT SELECT  A SHIP AT 0 POINT ALREADY

WHEN HIT, DECREASE POINTS OR GAME OVER IF MOTHER SHIP 

UPDATE INNER HTML OF HIT SHIP

GAMEOVER WHEN ALL ZERO OR MOTHER SHIP DEFEATED

INSTRUCTIONS BUTTON AND PLAY AGAIN

WINNING MODAL*/

const fireBtn = document.querySelector("#fire-btn");
let ships = [];
let randomShip = "";
class Ship {
    constructor(shipType, shipName, totalPoints, attackDamage) {
        this.shipType = shipType;
        this.shipName = shipName;
        this.totalPoints = totalPoints;
        this.attackDamage = attackDamage;
    }

    // buildShip(numberOfShips) {
    //     for (let index = 0; index < numberOfShips; index++) {
    //         ships.push(`${this.shipType}${index}`);
    //         document.querySelector(`.${this.shipType}`).innerHTML += `<div class="ship" id="${this.shipType}${index}"><h5>${this.shipName}</h5> <p>Points: ${this.totalPoints}</p></div>`
    //     }
    // }

    hitShip(index) {
        this.totalPoints -= this.attackDamage;
        if (this.totalPoints < 0) this.totalPoints = 0;
        document.querySelector(`#${this.shipType}${index}`).innerHTML = `<h5>${this.shipName}</h5> <p>Points: ${this.totalPoints}</p>`;
    }
}

const buildShips = (indexStart, shipType, shipName, totalPoints, attackDamage, numberOfShips) => {
    for (let index = indexStart; index < (indexStart + numberOfShips); index++) {
        ships.push(new Ship(shipType, shipName, totalPoints, attackDamage));
        document.querySelector(`.${shipType}`).innerHTML += `<div class="ship" id="${shipType}${index}"><h5>${shipName}</h5> <p>Points: ${totalPoints}</p></div>`;
    }
}
// Create instances of the ship class
// const motherShip = new Ship("mothership", "Mother Ship", 100, 9);
// const defenceShip = new Ship("defence", "Defence Ship", 80, 10);
// const attackShip = new Ship("attack", "attack Ship", 45, 12);

// Use the ship objects to render the ships
// motherShip.buildShip(1);
// defenceShip.buildShip(5);
// attackShip.buildShip(8);

buildShips(0, "mothership", "Mother Ship", 100, 50, 1);
buildShips(1, "defence", "Defence Ship", 80, 50, 5);
buildShips(6, "attack", "attack Ship", 45, 50, 8);

const getRandomIndex = () => {
    // console.log(ships.length)
    const randomIndex = Math.floor(Math.random()* ships.length);
    // console.log(randomIndex)
    // randomShip = ships[randomIndex];
    // console.log(randomShip);
    return randomIndex;
    
}

const gameOver = () => {
    console.log("GAME OVER, YOU WIN")
}

// do we want to win if all ships are destroyed inc the mothership, or either mothership or all others? Have done former for now
const checkPoints = () => {
    if (ships[0].totalPoints === 0) gameOver();
    if (ships.every(ship => ship.totalPoints === 0)) gameOver();
}

fireBtn.addEventListener("click", () => {
    let hitShipIndex = getRandomIndex();
    ships[hitShipIndex].hitShip(hitShipIndex);
    checkPoints();
});