const hre = require("hardhat");

async function main() {
  const Faucet = await hre.ethers.getContractFactory("Faucet");
  const faucet = await Faucet.deploy("0x9816146ec5f29Bb8de6CCFCd2fD5AA10b75E82bA")
  
  await faucet.deployed();

  console.log("Faucet deployed successfully at :" , faucet.address);
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});