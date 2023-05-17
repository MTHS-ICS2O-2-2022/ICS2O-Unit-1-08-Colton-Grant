// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Colton
// Created on: march 2023
// This file contains the JS functions for index.html

if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-1-08-Colton-Grant/sw.js", {
    scope: "/ICS2O-Unit-1-08-Colton-Grant/",
  })
}

function myButtonClicked(){
alert("Hello")
}
  