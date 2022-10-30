const hre = require("hardhat");

async function main() {
  const VesitToken = await hre.ethers.getContractFactory("VesitToken");
  const vesitToken = await VesitToken.deploy(100000, 5)
  
  await vesitToken.deployed();

  console.log("Vesit Token deployed successfully at :" , vesitToken.address);
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
