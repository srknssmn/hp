// import {sepoliaDonatesArray} from "/js/donatesSepolia.js";
// import {scrollSepoliaDonatesArray} from "/js/donatesScrollSepolia.js";
// import {mantaDonatesArray} from "/js/donatesManta.js";
// import {topDonorsSepolia} from "/js/topDonorsSepolia.js";
// import {topDonorsScrollSepolia} from "/js/topDonorsScrollSepolia.js";
// import {topDonorsManta} from "/js/topDonorsManta.js";
import {checkChar} from "/js/checkChar.js";
import {checkTeam} from "/js/checkTeam.js";
import {voldemortHealth} from "/js/checkVoldemortHealth.js";
import {potterHealth} from "/js/checkPotterHealths.js";
import {checkCharName} from "/js/checkCharName.js";
import {checkPower} from "/js/charPower.js";
import {checkCooldown} from "/js/charCooldown.js";
import {checkProtection} from "/js/charProtection.js";
import {checkUserXP} from "/js/charXP.js";
import {checkUserHitPoint} from "/js/charHitPoint.js";
import {checkUserBools} from "/js/checkBools.js";

window.onload = (event) => {
    isConnected();
};

let connectWalletButton = document.querySelector('#connectWallet')
let connectSection = document.querySelector('#connectSection')
let chooseTeamSection = document.querySelector('#chooseTeamSection')
let statusScreen = document.querySelector('#statusScreen')
let teamProgressPotter = document.querySelector('#teamProgressPotter')
let teamProgressVoldemort = document.querySelector('#teamProgressVoldemort')

// let donateSection = document.querySelector('#donateSection')
// let donorsSection = document.querySelector('#donorsSection')
// let donorsSectionFree = document.querySelector('#donorsSectionFree')
// let donorsSectionSepolia = document.querySelector('#donorsSectionSepolia')
// let donorsSectionScroll = document.querySelector('#donorsSectionScroll')
// let donorsSectionManta = document.querySelector('#donorsSectionManta')
// let donatesSectionFree = document.querySelector('#donatesSectionFree')
// let donatesSectionSepolia = document.querySelector('#donatesSectionSepolia')
// let donatesSectionScroll = document.querySelector('#donatesSectionScroll')
// let donatesSectionManta = document.querySelector('#donatesSectionManta')

let modal3ButtonOpen = document.querySelector('#modal3ButtonOpen')

async function isConnected() {
    const accounts = await ethereum.request({method: 'eth_accounts'});       
    if (accounts.length) {
        await console.log(`You're connected to: ${accounts[0]}`);
        let userWallet = await accounts[0]
        connectWalletButton.disabled = await true;
        let first = await userWallet.slice(0, 5)
        let last = await userWallet.slice(-5)
        connectWalletButton.innerHTML = await first + "..." + last
        connectSection.hidden = await true;
        await checkChar();
        let userNickname = await document.querySelector('#userNickname').innerHTML
        if (userNickname.length > 0) {
            teamProgressPotter.hidden = await false;
            teamProgressVoldemort.hidden = await false;
            chooseTeamSection.hidden = await true;
            statusScreen.hidden = await false;
            voldemortHealth();
            potterHealth();
            checkTeam();
            checkCharName();
            checkPower();
            checkCooldown();
            checkProtection();
            checkUserXP();
            checkUserHitPoint();
            checkUserBools();
        } else {
            chooseTeamSection.hidden = await false;
        }

        // await topDonorsSepolia();
        // await sepoliaDonatesArray();

    } else {
        console.log("Metamask is not connected");
        connectSection.hidden = await false;
        statusScreen.hidden = await true;
        await modal3ButtonOpen.click();
    }
}