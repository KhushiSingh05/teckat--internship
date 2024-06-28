import HomePage from "./HomePage";
import StudentOutlet from "./StudentOutlet";
import Students from "./Students";
import CreateStudent from "./CreateStudent";
import UpdateStudent from "./UpdateStudent";
import Todo from "./Todo";
import Test1 from "./Test1";
import Test2 from "./Test2";
import Test3 from "./Test3";
import Test4 from "./Test4";
import Test5 from "./Test5";
import Test6 from "./Test6";

import React from 'react';
import ReactDOM from 'react-dom';
import AppRoute from "../AppRoute";


ReactDOM.render(
  <React.StrictMode>
    <AppRoute />
  </React.StrictMode>,
  document.getElementById('root')
);

export { HomePage,Students,StudentOutlet,CreateStudent,UpdateStudent,Todo,Test1,Test2,Test3,Test4,Test5,Test6};