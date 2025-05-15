import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ItemList } from "./item/ItemList";
import { ItemCreate } from "./item/ItemCreate";
import { ItemEdit } from "./item/ItemEdit";
import { ItemShow } from "./item/ItemShow";
import { PurchaseOrderList } from "./purchaseOrder/PurchaseOrderList";
import { PurchaseOrderCreate } from "./purchaseOrder/PurchaseOrderCreate";
import { PurchaseOrderEdit } from "./purchaseOrder/PurchaseOrderEdit";
import { PurchaseOrderShow } from "./purchaseOrder/PurchaseOrderShow";
import { SupplierList } from "./supplier/SupplierList";
import { SupplierCreate } from "./supplier/SupplierCreate";
import { SupplierEdit } from "./supplier/SupplierEdit";
import { SupplierShow } from "./supplier/SupplierShow";
import { StockEntryList } from "./stockEntry/StockEntryList";
import { StockEntryCreate } from "./stockEntry/StockEntryCreate";
import { StockEntryEdit } from "./stockEntry/StockEntryEdit";
import { StockEntryShow } from "./stockEntry/StockEntryShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"Inventory & Purchasing"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Item"
          list={ItemList}
          edit={ItemEdit}
          create={ItemCreate}
          show={ItemShow}
        />
        <Resource
          name="PurchaseOrder"
          list={PurchaseOrderList}
          edit={PurchaseOrderEdit}
          create={PurchaseOrderCreate}
          show={PurchaseOrderShow}
        />
        <Resource
          name="Supplier"
          list={SupplierList}
          edit={SupplierEdit}
          create={SupplierCreate}
          show={SupplierShow}
        />
        <Resource
          name="StockEntry"
          list={StockEntryList}
          edit={StockEntryEdit}
          create={StockEntryCreate}
          show={StockEntryShow}
        />
      </Admin>
    </div>
  );
};

export default App;
