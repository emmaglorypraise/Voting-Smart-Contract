import { ethers } from "hardhat";

async function main() {

  const VoteContract = await ethers.getContractFactory("MerkleTreeNFT");
  const votecontract = await VoteContract.deploy("input merkleroot");

  await votecontract.deployed();

  console.log("Vote Contract deployed to:", votecontract.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
