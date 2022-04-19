WebAssembly.instantiateStreaming(fetch('cgisf_bg.wasm'), importObject)
    .then(results => {
    console.log("success!");
});


function change_text() {
    alert("haha debug alert");
    document.getElementById("my_para").innerHTML = results.instances.exports.gen_sentence();
}
document.getElementById("button").addEventListener("click", change_text(), false);