let form = document.getElementsByTagName("form")[0];
form.addEventListener("submit", (e) => {
    e.preventDefault();

    function dbox(msg) {
        if (msg != undefined) {
            document.getElementById("boxTxt").innerHTML = msg;
            document.getElementById("boxBack").classList.add("show");
        } else { document.getElementById("boxBack").classList.remove("show"); }
    };
});