const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
export const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;
const scope = encodeURIComponent(
	"https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email"
);

export const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&response_type=code&redirect_uri=${BACKEND_BASE_URL}/auth/google&scope=${scope}&access_type=offline&prompt=consent`;

export const USDC_BASE_SEPOLIA_ADDRESS =
	"0x036CbD53842c5426634e7929541eC2318f3dCF7e";
export const CHAIN_CRIB_ADDRESS = "0xba6FC0DF05410D0962A6d75F87873719F730323D";
export const BASE_SEPOLIA_NETWORK_ID = 84532;
export const BASE_MAINNET_NETWORK_ID = 8453;

export const NETWORK_ID = BASE_SEPOLIA_NETWORK_ID;
export const USDC_DECIMALS = 1000000;

export const PROTOCOLPARAMS = {
	linearFee: {
		minFeeA: "44",
		minFeeB: "155381",
	},
	minUtxo: "34482",
	poolDeposit: "500000000",
	keyDeposit: "2000000",
	maxValSize: 5000,
	maxTxSize: 16384,
	priceMem: 0.0577,
	priceStep: 0.0000721,
	coinsPerUtxoWord: "34482",
};

export const addressBech32SendADA =
	"addr_test1qq536uu67rmrw4f5mke2n442zcp0funjuycngmnfzvjcv4r6jf4dltzra9qk4dcu50snygj3kyhsy67cn6ul8hsn6kwsr0lga9";

export const MESSAGE = "Hello, Welcome to Chaincrib!";
