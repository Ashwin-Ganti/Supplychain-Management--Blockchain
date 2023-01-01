const hre = require("hardhat");

async function main() {
  const Security = await hre.ethers.getContractFactory("Security");
  const contract = await Security.deploy(2000); //instance of contract

  await contract.deployed();
  console.log("Address of contract:", contract.address);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});