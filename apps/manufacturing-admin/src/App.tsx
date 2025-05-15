import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { WorkstationList } from "./workstation/WorkstationList";
import { WorkstationCreate } from "./workstation/WorkstationCreate";
import { WorkstationEdit } from "./workstation/WorkstationEdit";
import { WorkstationShow } from "./workstation/WorkstationShow";
import { BomList } from "./bom/BomList";
import { BomCreate } from "./bom/BomCreate";
import { BomEdit } from "./bom/BomEdit";
import { BomShow } from "./bom/BomShow";
import { WorkOrderList } from "./workOrder/WorkOrderList";
import { WorkOrderCreate } from "./workOrder/WorkOrderCreate";
import { WorkOrderEdit } from "./workOrder/WorkOrderEdit";
import { WorkOrderShow } from "./workOrder/WorkOrderShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"Manufacturing"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Workstation"
          list={WorkstationList}
          edit={WorkstationEdit}
          create={WorkstationCreate}
          show={WorkstationShow}
        />
        <Resource
          name="Bom"
          list={BomList}
          edit={BomEdit}
          create={BomCreate}
          show={BomShow}
        />
        <Resource
          name="WorkOrder"
          list={WorkOrderList}
          edit={WorkOrderEdit}
          create={WorkOrderCreate}
          show={WorkOrderShow}
        />
      </Admin>
    </div>
  );
};

export default App;
