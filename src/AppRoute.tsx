import React from "react";
import { Route, Routes } from "react-router-dom";


import {
    CreateStudent ,
    HomePage,
    StudentOutlet,
    Students,
        Test2,
        Test3,
        Test4,
        Test5,
        Test6,
        // Todo,
        UpdateStudent,

}from "./pages";
import Test1 from "./pages/Test1";




 

const AppRoute : React.FC  = () => {
  return (

    <Routes> 
        <Route path=""element = { <HomePage/>} />
        <Route path="student" element = { <StudentOutlet/>} >
        <Route path=""element = { <Students/>} />
        <Route path="create-student"element = { <CreateStudent/>} />
        <Route path=" update-student/: studentID "element = { <UpdateStudent/>} />
        <Route path="/test2" element={<Test2 />} />
        <Route path="/test3" element={<Test3 />} />
        <Route path="/test4" element={<Test4/>} />
        <Route path="/test5" element={<Test5 />} />
        <Route path="/test6" element={<Test6 />} />
        
       
        
        </Route>
        {/* <Route path="todo "element = {<Todo/>}/> */}
          < Route path = "Test1" element = { <Test1/>}/>
          import React from 'react';

      </Routes> 
  );
};

export default AppRoute ;