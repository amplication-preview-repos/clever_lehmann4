import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TaxRateList } from "./taxRate/TaxRateList";
import { TaxRateCreate } from "./taxRate/TaxRateCreate";
import { TaxRateEdit } from "./taxRate/TaxRateEdit";
import { TaxRateShow } from "./taxRate/TaxRateShow";
import { JournalEntryList } from "./journalEntry/JournalEntryList";
import { JournalEntryCreate } from "./journalEntry/JournalEntryCreate";
import { JournalEntryEdit } from "./journalEntry/JournalEntryEdit";
import { JournalEntryShow } from "./journalEntry/JournalEntryShow";
import { AccountList } from "./account/AccountList";
import { AccountCreate } from "./account/AccountCreate";
import { AccountEdit } from "./account/AccountEdit";
import { AccountShow } from "./account/AccountShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"Accounting & Finance"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="TaxRate"
          list={TaxRateList}
          edit={TaxRateEdit}
          create={TaxRateCreate}
          show={TaxRateShow}
        />
        <Resource
          name="JournalEntry"
          list={JournalEntryList}
          edit={JournalEntryEdit}
          create={JournalEntryCreate}
          show={JournalEntryShow}
        />
        <Resource
          name="Account"
          list={AccountList}
          edit={AccountEdit}
          create={AccountCreate}
          show={AccountShow}
        />
      </Admin>
    </div>
  );
};

export default App;
