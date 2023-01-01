#Steps to run this project
``` shell script
Installing packages on VScode :
  npm install --save-dev hardhat
  npm install --save-dev "hardhat@^2.12.4" "@nomicfoundation/hardhat-toolbox@^2.0.0"
  Make sure to have React.js Installed
```
  
```
Important note:

In the file named .env make sure to change the URL'S according to your Alchemy account and your respective Metamask Private Key
```
  
```  
Accounts used:
  Alchemy
  Metamask
  Goerli Etherscan
  Goerli test network
```  
```  
Deploying contracts on the goerli test network:
  npm install dotenv   (run this everytime you change your environment variables)
  npm hardhat run --network goerli scripts/finalDeploy.js
``` 
```
Links:
  https://goerli.etherscan.io
  https://dashboard.alchemy.com/
  https://metamask.io/
```
