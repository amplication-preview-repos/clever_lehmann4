import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { EmployeeList } from "./employee/EmployeeList";
import { EmployeeCreate } from "./employee/EmployeeCreate";
import { EmployeeEdit } from "./employee/EmployeeEdit";
import { EmployeeShow } from "./employee/EmployeeShow";
import { PayrollRunList } from "./payrollRun/PayrollRunList";
import { PayrollRunCreate } from "./payrollRun/PayrollRunCreate";
import { PayrollRunEdit } from "./payrollRun/PayrollRunEdit";
import { PayrollRunShow } from "./payrollRun/PayrollRunShow";
import { AttendanceRecordList } from "./attendanceRecord/AttendanceRecordList";
import { AttendanceRecordCreate } from "./attendanceRecord/AttendanceRecordCreate";
import { AttendanceRecordEdit } from "./attendanceRecord/AttendanceRecordEdit";
import { AttendanceRecordShow } from "./attendanceRecord/AttendanceRecordShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"HR & Payroll"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Employee"
          list={EmployeeList}
          edit={EmployeeEdit}
          create={EmployeeCreate}
          show={EmployeeShow}
        />
        <Resource
          name="PayrollRun"
          list={PayrollRunList}
          edit={PayrollRunEdit}
          create={PayrollRunCreate}
          show={PayrollRunShow}
        />
        <Resource
          name="AttendanceRecord"
          list={AttendanceRecordList}
          edit={AttendanceRecordEdit}
          create={AttendanceRecordCreate}
          show={AttendanceRecordShow}
        />
      </Admin>
    </div>
  );
};

export default App;
