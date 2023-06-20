let NFTsNumber = 0;

function mintNFT(name, age, sallary) {
  const nft = {
    name: name,
    age: age,
    sallary: sallary
  };
  
  NFTsNumber++;
  
  return nft;
}


function listNFTs(nfts) {
  for (let i = 0; i < nfts.length; i++) {
    console.log("Name: " + nfts[i].name+"\t\t"+"Age " + nfts[i].age+"\t\t"+"Sallary: " + nfts[i].sallary);
    
  }
}


function getTotalNFTs() {
  return NFTsNumber;
}



const nft1 = mintNFT("Rohan", 12, 120000);
const nft2 = mintNFT("Mohan", 14, 140000);
const nft3 = mintNFT("Sohan", 16, 160000);
const nft4 = mintNFT("Rajan", 18, 180000);
const nft5 = mintNFT("Sajan", 20, 200000);

const nfts = [nft1, nft2, nft3];

listNFTs(nfts);

console.log("Total NFTs: " + getTotalNFTs());

