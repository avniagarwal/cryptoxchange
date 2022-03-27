require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/uJzrtVewQrT5-LphXd-5WE6jkTbJxjKM',
      accounts: ['86164de4dd6af2102264f6de598577adc22b44a8f5e6ced910cb14413580ce2b']
    }
  }
}