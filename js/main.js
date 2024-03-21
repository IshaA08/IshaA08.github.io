/* Make the header stretch across the whole screen */
var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => {
    document.querySelector(".header").style.height = window.innerHeight + "px";
    document.querySelector("#about").style.height = window.innerHeight + "px";
    document.querySelector("#experience").style.height = window.innerHeight + "px";
    document.querySelector("#skills").style.height = window.innerHeight + "px";
    document.querySelector("#contact").style.height = window.innerHeight + "px";
})