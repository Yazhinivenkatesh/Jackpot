export const EXECUTE_METHOD_PARAMS = {
    add_product: ["name", "price"],
    add_referral: ["referrer"],
    pay_referral: ["product_name"],
    buy_tokens: ["amount_to_buy"],
    increase_allowance: ["spender", "amount"],
    set_token_price: ["new_token_price"],
    handle_transfer: ["amount", "denom"]
  };
  
  export const QUERY_METHOD_PARAMS = {
    get_referral_info: ["address"],
    get_all_referral_datas: [],
    get_all_referral_details: [],
    get_rate: ["symbol"],
    get_reference_data: ["symbol_pair"],
    product_detail: ["name"],
    get_all_products: [],
    get_level_detail: ["address", "level_count"],
    get_payment_status: ["address"],
    estimate_tokens: ["amount_to_buy"],
    get_token_price: [],
    get_info: [],
    allowance: ["owner", "spender"],
    balance: ["address"],
  };
  
  export const EXECUTE_METHOD_TYPES = [
    "add_product",
    "add_referral",
    "pay_referral",
    "buy_tokens",
    "increase_allowance",
    "set_token_price",
    "handle_transfer"
  ];
  export const QUERY_METHOD_TYPES = [
    "get_referral_info",
    "get_all_referral_datas",
    "get_all_referral_details",
    "get_reference_data",
    "get_rate",
    "plan_detail",
    "get_all_products",
    "get_level_detail",
    "get_payment_status",
    "estimate_tokens",
    "get_token_price",
    "get_info",
    "get_id",
    "allowance",
    "balance",
  ];
  
  export const GET_ALL_REFERRAL = "get_all_referral_datas";
  export const GET_ALL_PRODUCTS = "get_all_products";
  
  export const DEPLOY_PARAMS = ["sender", "wasmCode", "instantiateMsg", "label"];
  
  export const EXECUTE_PARAMS = ["sender", "contractAddress", "methodParams"];
  
  export const SEND_TOKENS_PARAMS = ["sender", "recipient", "amount"];
  
  export const QUERY_PARAMS = ["contractAddress", "methodParams"];
  
  export const CONFIG_PARAMS = [
    "chainId",
    "rpcEndpoint",
    "gasPrice",
    "microDenom",
  ];
  