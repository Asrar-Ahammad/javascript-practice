// Asynchronous programming : async are initiated now and finished later
// console.log("Start");
// setTimeout(function(){
//     console.log("This ran after 3sec.")
// },3000);
// console.log("End");

// Sync actions are the actions that are done step by step.

function loadScript(src, callback){
    let script = document.createElement('script');
    script.src = src;
    script.onload = function(){
        console.log('Loaded script with '+src);
        callback(src);
    }
    document.body.appendChild(script);
}
function hello(src){
    alert("Script added "+src)
}
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js", hello())