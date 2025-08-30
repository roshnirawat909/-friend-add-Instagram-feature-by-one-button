
let btn = document.querySelector(".add");
let h5 = document.querySelector("h5");

let flag = 0;

btn.addEventListener("click", () => {
    if (flag === 0) {
        h5.textContent = "Friend";
        h5.style.color = "gold";
        flag = 1;
        btn.textContent = "Remove Friend";
        btn.style.color = "black";
        btn.style.backgroundColor = "#dadada";
    } else {
        h5.textContent = "Stranger";
        h5.style.color = "red";
        flag = 0;
        btn.textContent = "Add Friend";
        btn.style.color = "white";
        btn.style.backgroundColor = "cadetblue";
    }
})



