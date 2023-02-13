import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import { Axios, db } from "../component/config/fbConfig";
import axios from "axios";

import { collection, getDocs, querySnapshot, addDoc } from "firebase/firestore";

const initialState = {
  data: [],
  loading: false,
  error: false,
};

export const userListSlice = createSlice({
  name: "userlist",
  initialState,
  reducers: {
    addUser: (state, actions) => {
      state.data = [{ ...actions.payload }];
      console.log("USER LIST SLICE", actions.payload);

      addDoc(collection(db, "users"), {
        designation: actions.payload.designation,
        fullName: actions.payload.fullName,
        joiningDate: actions.payload.joiningDate,
        team: actions.payload.team    
      }).then(() => {})
    //   getDocs(collection(db, "users"))
    //   .then((querySnapshot)=>{               
    //       const newData = querySnapshot.docs
    //           .map((doc) => ({...doc.data(), id:doc.id }));
    //       console.log(newData);
    //   })
    //   axios
    //     .post(
    //       `https://firestore.googleapis.com/v1/projects/employee-management-3fb82/databases/documents/users/`,
    //         actions.payload
    //     )
    //     .then((res) => {
    //       db.collection("users").add({
    //         fullName: actions.payload.fullName,
    //         designation: actions.payload.designation,
    //         joiningDate: actions.payload.joiningDate,
    //         team: actions.payload.team,
    //         time: new Date(),
    //       });
    //     })
    //     .catch((errors) => {
    //       console.log(errors);
    //     });
    },
  },
});

export const { addUser } = userListSlice.actions;

export default userListSlice.reducer;
