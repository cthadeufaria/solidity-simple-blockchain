const hre = require("hardhat");


async function main() {
    async function deployContract(contractName, args = []) {
        const contractFactory = await hre.ethers.getContractFactory(contractName);
        const contract = await contractFactory.deploy(...args);
        await contract.waitForDeployment();
        const contractAddress = contract.target;
        return contractAddress;
        
    }

    await deployContract("Lock");
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });