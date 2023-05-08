const year = document.getElementById("year") as HTMLSpanElement;
const thisyear: string = new Date().getFullYear().toString();
year.setAttribute("datetime", thisyear);
year.textContent = thisyear;
