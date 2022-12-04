require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey entry off suggest name release pitch purpose harvest oppose outer ghost'; 
let testAccounts = [
"0xf45351ba7f34058b0d0e037c56bcafff2a7908f3c29cca630660b457222ecd11",
"0xedaa333410976c00795069c6f88739ca59f5f20cfe87528da1e6a2248c6f25c1",
"0xeaffc7a93b665d3b54aef117c2b70ba671b5677031ddf8858cb9c2c94fe66f39",
"0x3e5b32b7e3aa480e1ac7340962be0ce29ddbffd97f221bd25b3c370f9403c904",
"0x2d4e160e8c28a1b464916516475c06dcf7fac197fdffa5b751c38f1a9fe9c183",
"0xffb047e18abee1a78f053c4b1c3416de63ba7c23c2a8f880a286237eeafa639d",
"0xb4755fa30c89aaa8d4132486d7a1fd9e074e58ece7e693952fb5076a7bf8a518",
"0x2430538862a2d90c48095afa755b787364bf60ca6070a3d866de95ee490b8f90",
"0xfdf55e57c07e214b10d23eea2268a049efcd88e10cefbdca68c88b13bb6ad671",
"0x7925950b48df74116f0debc0245c872c62ac300ce1dee78432a179a9f2684ec1"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

