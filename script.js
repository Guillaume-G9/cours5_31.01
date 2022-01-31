const btn = document.getElementById("btn");

btn.addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById("boxTxt").innerHTML = "OK";
    document.getElementById("boxBack").classList.add("show");
    document.getElementById("boxBack").classList.remove("show");
})