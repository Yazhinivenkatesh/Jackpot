import {
  CosmWasmClient,
  SigningCosmWasmClient,
} from "@cosmjs/cosmwasm-stargate";
import { GasPrice, StdFee } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";

import "./styles.css";
import { useState } from "react";

const JackpotFunds = () => {
  const [fund, setFund] = useState<number>();
  const [addedFund, setAddedFund] = useState<number>();
  const [wallet, setWallet] = useState<any>();

  const getSigningClient = async (
    rpc: string | HttpEndpoint,
    denom: string,
    networkId: any
  ): Promise<SigningCosmWasmClient> => {
    const offlineSigner = window["keplr"]?.getOfflineSigner(networkId);
    const signingClient: SigningCosmWasmClient =
      await SigningCosmWasmClient.connectWithSigner(rpc, offlineSigner, {
        gasPrice: GasPrice.fromString(`${0.0025}${denom}`),
      });

    return signingClient;
  };

  const connectCosmosWallet = async (chainId: string) => {
    try {
      if (!window["keplr"]) {
        alert("Please Install Keplr Extension");
        return;
      }
      await window["keplr"]?.enable(chainId);
      const offlineSigner = window["keplr"]?.getOfflineSigner(chainId);
      const accounts = await offlineSigner.getAccounts();
      setWallet(accounts[0]?.address);
      alert(accounts[0]?.address ? "Wallet Connected" : "No Account Found");
    } catch (error) {
      alert("Error while connecting keplr");
    }
  };

  const addFund = async () => {
    if (!wallet) {
      alert("Please connect wallet to add funds");
    }

    const signingClient = await getSigningClient(
      "https://rpc.osmotest5.osmosis.zone/",
      "uosmo",
      "osmo-test-5"
    );

    const fee: StdFee = {
      amount: [
        {
          denom: "uosmo",
          amount: "255000",
        },
      ],
      gas: "25000000",
    };

    await signingClient.execute(
      wallet,
      "osmo1me6dm5hdr472ljqhw9xutkxeh67408wft654wfhhgtw749n6260qeu5243",
      { add_funds: { fund } },
      fee
    );

    getFund();
  };

  const getFund = async () => {
    const queryingClient = await CosmWasmClient.connect(
      "https://rpc.osmotest5.osmosis.zone/"
    );
    const response = await queryingClient.queryContractSmart(
      "osmo1me6dm5hdr472ljqhw9xutkxeh67408wft654wfhhgtw749n6260qeu5243",
      { get_funds: {} }
    );
    setAddedFund(response?.fund);
    setFund(0);
  };

  return (
    <div className="button">
      <h1>React JS component with Rust Smart Contract</h1>
      <div>
        {!wallet && (
          <>
            <h3>Connect wallet to add funds</h3>
            <button
              onClick={() => {
                connectCosmosWallet("osmo-test-5");
              }}
            >
              Connect Wallet
            </button>
          </>
        )}
      </div>
      <br />
      {wallet && (
        <>
          <input
            type="number"
            placeholder="Add Fund"
            onChange={(e) => setFund(Number(e.target.value))}
          />
          <br />
          <button
            onClick={() => {
              addFund();
            }}
          >
            Add Fund
          </button>
        </>
      )}
      <br />
      {addedFund && <h3>Added Funds {addedFund}</h3>}
    </div>
  );
};

export default JackpotFunds;
