const { expect } = require("chai");
const { ethers } = require('hardhat');
const hre = require("hardhat");
import { Contract, Signer } from "ethers";
describe("NFTMarketplace", () => {


    let ContractFactory: Contract;
    let Contract: Contract;
    let owner: Signer;
    let alice: Signer;
    let bob: Signer;
    
    let ownerAddress: string;
    let aliceAddress: string;
    let bobAddress: string;

    beforeEach(async () => {
        [owner, alice, bob] = await ethers.getSigners();
        ownerAddress = await owner.getAddress();
        aliceAddress = await alice.getAddress();
        bobAddress = await bob.getAddress();
        const ContractFactory = await ethers.getContractFactory("NFTMarketplace", owner);
        Contract = await ContractFactory.deploy();
        await Contract.deployed();
       
    })
     
   
})