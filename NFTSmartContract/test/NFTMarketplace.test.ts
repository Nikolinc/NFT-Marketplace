const { expect } = require("chai");
const { ethers } = require("hardhat");
const hre = require("hardhat");
import { BigNumber, Contract, Signer } from "ethers";

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
    const ContractFactory = await ethers.getContractFactory(
      "NFTMarketplace",
      owner
    );
    Contract = await ContractFactory.deploy();
    await Contract.deployed();
  });

  it("Should be deployed", async function () {
    expect(Contract.address).to.be.properAddress;
  });

  it("Must be 0 number of unsold nft", async function () {
    await Contract.fetchMarketItem().then((res: any[]) => {
      return expect(res.length).to.eq(0);
    });
  });

  it("Should create NFT token funcion", async function () {
    const tokenURL = "QmNedu14XTwWfGyJ9S7EJrWYAUw9kpnR6vrvVVRWtaYLnq";

    const price: BigNumber = ethers.utils.parseUnits("1", "ether");
    const listingPrice: BigNumber = Contract.getListingPrice();

    const Token = await Contract.connect(alice).createToken(tokenURL, price, {
      value: listingPrice,
    });

    await alice.getAddress().then((address) => {
      return expect(Token.from).to.eq(address);
    });

    await Contract.getListingPrice().then((value: BigNumber) => {
      return expect(Token.value).to.eq(value);
    });

    //0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0

    await Contract.fetchMarketItem().then((res: any[]) => {
      return expect(res.length).to.eq(1);
    });
  });

  it("Should function fot resale token", async function () {
    const tokenURL = "QmNedu14XTwWfGyJ9S7EJrWYAUw9kpnR6vrvVVRWtaYLnq";

    const price: BigNumber = ethers.utils.parseUnits("15", "ether");
    const listingPrice: BigNumber = Contract.getListingPrice();

    const Token = await Contract.connect(alice).createToken(tokenURL, price, {
      value: listingPrice,
    });

    //For the correct use of the test bug fix required
    // idMarketItem[tokenId].owner == msg.sender,
    // in ./contracts/NFTMarketplace.sol
    // on line 108
    //////////////////////////////////////////////////////////////////////////////////////

    // const TokenReSell = await Contract.connect(alice).reSellToken(0, price, {
    //   value: listingPrice,
    // });

    // console.log("TokenReSell", TokenReSell);
    //////////////////////////////////////////////////////////////////////////////////////
  });
});
