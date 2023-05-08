"use strict";
const year = document.getElementById("year");
const thisyear = new Date().getFullYear().toString();
year.setAttribute("datetime", thisyear);
year.textContent = thisyear;
