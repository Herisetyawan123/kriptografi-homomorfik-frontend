import { TypeEnum, type cardProps } from "../props/history";

const historyStatic: cardProps[] = [
  {
    amount: 10000,
    description: "Tabung hasil gajian",
    type: TypeEnum.Topup
  },
  {
    amount: 50000,
    description: "Tabung hasil sisa kencan",
    type: TypeEnum.Topup
  },
  {
    amount: 26000,
    description: "Buat beli rokok",
    type: TypeEnum.Withdraw
  },
];

export default historyStatic;
