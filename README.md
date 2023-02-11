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
In the below block run steps 1 - 4 in Suppychain directory
Run Step 5 in Client Directory

```
```  
Deploying contracts on the goerli test network:
 1. npm install dotenv   (run this everytime you change your environment variables)
 2.npm hardhat run --network goerli scripts/finalDeploy.js
 3.once the above statement is executed a contract address is created, 
 4.copy the contract address and replace it with the "contract address" variable in "App.js" file
 5.change directory into Client and execute "npm run"
``` 
```
Links:
  https://goerli.etherscan.io
  https://dashboard.alchemy.com/
  https://metamask.io/
```
