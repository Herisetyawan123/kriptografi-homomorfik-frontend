enum TypeEnum {
  Withdraw,
  Topup
}
type cardProps = {
  amount: number,
  description: string,
  type: TypeEnum,
}

export {
  type cardProps,
  TypeEnum
}
