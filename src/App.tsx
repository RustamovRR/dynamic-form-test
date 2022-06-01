import React, { useEffect, useState } from "react";
import axios from "axios";

import CreditContract from "./components/CreditContract";
import { CreditContractsTypes } from "./types/contract";

import "./App.css";

type ContractDataType = {
  results: CreditContractsTypes[];
};

function App() {
  const [contractDatas, setContractDatas] = useState<ContractDataType>();

  useEffect(() => {
    axios.get("test.json").then((res) => setContractDatas(res.data));
  }, []);
  console.log(contractDatas?.results);

  return (
    <div className="App">
      {contractDatas?.results.length ? (
        contractDatas?.results.map((contract) => (
          <CreditContract
            title={contract.addTitle}
            elements={contract.elements}
          />
        ))
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
}

export default App;
