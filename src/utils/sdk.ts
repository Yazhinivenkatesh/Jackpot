// import {
//   CosmWasmClient,
//   JsonObject,
//   SigningCosmWasmClient,
// } from "@cosmjs/cosmwasm-stargate";
// import { DeliverTxResponse, GasPrice, StdFee } from "@cosmjs/stargate";
// import {
//   Config,
//   ExecuteMsg,
//   QueryMsg,
//   ExecuteResult,
//   DeployParams,
//   SendTokenParams,
//   InstantiateResult,
//   ExecuteParams,
//   QueryParams,
// } from "./interface";
// import { ExecuteMethods, QueryMethods, ReqMethods } from "./enum";
// import {
//   EXECUTE_METHOD_PARAMS,
//   QUERY_METHOD_PARAMS,
//   EXECUTE_METHOD_TYPES,
//   QUERY_METHOD_TYPES,
//   GET_ALL_PRODUCTS,
//   GET_ALL_REFERRAL,
//   DEPLOY_PARAMS,
//   EXECUTE_PARAMS,
//   SEND_TOKENS_PARAMS,
//   QUERY_PARAMS,
//   CONFIG_PARAMS,
// } from "./constants";

// export class Cl3Sdk {
//   private queryingClient!: CosmWasmClient;
//   private signingClient!: SigningCosmWasmClient;

//   public config: Config;
//   public stdFee: StdFee | "auto" | number;

//   constructor(config: Config, stdFee: StdFee | "auto" | number) {
//     this.config = config;
//     this.stdFee = stdFee;
//   }

//   throwError(error: string | Error) {
//     if (!(error instanceof Error)) {
//       throw new Error(error);
//     }
//     this.throwError(error.message);
//   }

//   concatParams = (...args: string[]) => {
//     return args.join(" ");
//   };

//   async getQueryClient(): Promise<CosmWasmClient> {
//     this.queryingClient = await CosmWasmClient.connect("");
//     return this.queryingClient;
//   }

//   async getSigningClient(): Promise<SigningCosmWasmClient> {
//     const { chainId, rpcEndpoint, gasPrice, microDenom } = this.config;

//     if (!window?["getOfflineSigner"] || !window?["keplr"])
//       this.throwError("Keplr Not Found");

//     window["keplr"].enable(chainId);
//     const signer = window?["getOfflineSigner"](chainId);

//     this.signingClient = await SigningCosmWasmClient.connectWithSigner(
//       rpcEndpoint,
//       signer,
//       {
//         gasPrice: GasPrice.fromString(`${gasPrice}${microDenom}`),
//       }
//     );
//     return this.signingClient;
//   }

//   async executeMethod(
//     executeParams: ExecuteParams
//   ): Promise<ExecuteResult | undefined> {
//     try {
//       const { methodType, sender, contractAddress, methodParams, memo } =
//         executeParams;

//       const client = await this.getSigningClient();
//       return client.execute(
//         sender,
//         contractAddress,
//         { ...methodParams },
//         this.stdFee,
//         memo
//       );
//     } catch (err: any) {
//       this.throwError(err);
//     }
//   }

//   async queryMethod(queryParams: QueryParams): Promise<JsonObject> {
//     try {
//       const { methodType, contractAddress, methodParams } = queryParams;

//       const client = await this.getQueryClient();

//       return client.queryContractSmart(contractAddress, { ...methodParams });
//     } catch (err: any) {
//       this.throwError(err);
//     }
//   }
// }


export const a = "as"; 