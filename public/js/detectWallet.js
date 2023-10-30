// import {sepoliaDonatesArray} from "/js/donatesSepolia.js";
// import {scrollSepoliaDonatesArray} from "/js/donatesScrollSepolia.js";
// import {mantaDonatesArray} from "/js/donatesManta.js";
// import {topDonorsSepolia} from "/js/topDonorsSepolia.js";
// import {topDonorsScrollSepolia} from "/js/topDonorsScrollSepolia.js";
// import {topDonorsManta} from "/js/topDonorsManta.js";
// import {charCheck} from "/js/charCheck.js";

window.onload = (event) => {
    isConnected();
};

let connectWalletButton = document.querySelector('#connectWallet')
let connectSection = document.querySelector('#connectSection')
let chooseTeamSection = document.querySelector('#chooseTeamSection')
const teamProgress = document.querySelectorAll('.teamProgress');

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
        // await charCheck();

        if (userNickname.length > 0) {
            chooseTeamSection.hidden = await true;
            teamProgress.hidden = await false;
        } else {
            chooseTeamSection.hidden = await false;
            teamProgress.hidden = await true;
        }

        // await topDonorsSepolia();
        // await sepoliaDonatesArray();

    } else {
        console.log("Metamask is not connected");
        connectSection.hidden = await false;
        await modal3ButtonOpen.click();
    }
}