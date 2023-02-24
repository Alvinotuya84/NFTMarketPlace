const TimelessNFT=artifacts.require("TimelessNFT");
module.exports=async (deployer)=>{
  const accounts=await web3.eth.getAccounts()
  await deployer.deploy(TimelessNFT, 'Timeless nfts','TNT',10,accounts[1])
}