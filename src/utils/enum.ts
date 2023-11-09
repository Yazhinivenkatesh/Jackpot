export enum ExecuteMethods {
    add_product = "add_products",
    add_referral = "add_referral",
    pay_referral = "pay_referral",
    buy_tokens = "buy_tokens",
    increase_allowance = "increase_allowance",
  }
  
  export enum QueryMethods {
    get_referral_info = "get_referral_info",
    get_all_referral_datas = "get_all_referral_datas",
    get_reference_data = "get_reference_data",
    get_price = "get_price",
    product_detail = "product_detail",
    get_all_products = "get_all_products",
    get_level_detail = "get_level_detail",
    get_payment_status = "get_payment_status",
    estimate_tokens = "estimate_tokens",
    get_token_price = "get_token_price",
    get_id = "get_id",
    allowance = "allowance",
    balance = "balance",
  }
  
  export enum ReqMethods {
    config = "config",
    execute = "execute",
    query = "query",
    send = "sendTokens",
    deploy = "deploy",
  }
  