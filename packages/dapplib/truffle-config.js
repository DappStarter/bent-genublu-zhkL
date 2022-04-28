require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clock other food iron rescue stereo eternal inside light army gate'; 
let testAccounts = [
"0x761d15785c9b927279028c6bd3b34f7064bf20cc58b3fab18b5b40bf032ef7d1",
"0x71dd275d3c0ebcb05d4216dfb7707dfea04e7b19a9005d79ba080e943282ca6e",
"0xa9702da90663ded89548ceb8317d985ca9791a6d9a6cc31ac92c0837fe783c71",
"0x74a5b3d7b90df868e6e483191d0d71e7721964c1087223fbd8925af80b1d27b7",
"0x3ba3869fb4153537371bd69054d16a3d9854a8fa77be6f64084412ced7efe872",
"0xb1082043d940c88e2735bd943fd07fc98048b9aac4899b4f20364b87a0e382e1",
"0xec9a16f6249f91f6fcbcfd236243d9cc2adeaf872f479f7d4a995622fe62d495",
"0x28c386b69788c017cb1e5e409a54f0d9727d248380f1dfbf985db74d713bfb5c",
"0x160b2b25f49206392cd1cf866ac1109a48eb8f42a74bed691dd6c248a7709c44",
"0x55b0995551e4230d6570872e4a1aed33234b26e478d974ed058fbdeeaf8317bf"
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

