// // const html_code = document.querySelector('.html-code textarea');
// // const css_code = document.querySelector('.css-code textarea');
// // const js_code = document.querySelector('.js-code textarea');
// var html_code = CodeMirror.fromTextArea(document.getElementById("html-code textarea"),{
//     theme: "default",
//     mode: "HTML",
//     linenumber: true
// });
// console.log(html_code);
// var css_code = CodeMirror.fromTextArea(document.getElementById(".css-code textarea"),{
//     theme: "default",
//     mode: "CSS",
//     linenumber: true
// });
// var js_code = CodeMirror.fromTextArea(document.getElementById(".js-code textarea"),{
//     theme: "default",
//     mode: "javascript",
//     linenumber: true
// });
// const result = document.querySelector('#result');

// function run() {
//     //Storing Data In Local Storage
//     localStorage.setItem('html_code', html_code.value);
//     localStorage.setItem('css_code', css_code.value);
//     localStorage.setItem('js_code', js_code.value);


//     result.contentDocument.body.innerHTML = `<style> ${localStorage.css_code}</style>` + localStorage.html_code;
//     result.contentWindow.eval(localStorage.js_code);
// }

// html_code.onkeyup = () => run();
// css_code.onkeyup = () => run();
// js_code.onkeyup = () => run();



// html_code.value = localStorage.html_code;
// css_code.value = localStorage.css_code;
// js_code.value = localStorage.js_code;
