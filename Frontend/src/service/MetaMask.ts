import React, { useEffect, useState } from "react";
import Web3 from "web3";

export async function Connect() {
  // const [web3, setWeb3] = useState<Web3 | null>(null);
  // const [accounts, setAccounts] = useState<string[]>([]);
  let accounts: string[] = [];

  if ((window as any).ethereum) {
    try {
      // Создание экземпляра Web3
      const web3Instance = new Web3((window as any).ethereum);

      // Запрос доступа к аккаунту
      await (window as any).ethereum.enable();

      // Получение списка аккаунтов пользователя
      accounts = await web3Instance.eth.getAccounts();

      // setWeb3(web3Instance);
      // setAccounts(accounts);

      console.log("web3Instance", web3Instance);
      console.log("accounts", accounts);
    } catch (error) {
      console.error(error);
    }
  } else {
    console.error("MetaMask не найден");
  }
}
