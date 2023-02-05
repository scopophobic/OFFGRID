
const html_code = CodeMirror.fromTextArea(
    document.querySelector("#html-code"),
    {
      theme: "3024-night",
      mode: "xml",
      background: "transparent",
    }
  );
  const css_code = CodeMirror.fromTextArea(
    document.querySelector("#css-code"),
    {
        theme: "3024-night",
      mode: "css",
    }
  );
  const js_code = CodeMirror.fromTextArea(
    document.querySelector("#js-code"),
    {
        theme: "3024-night",
      mode: "javascript",
    }
  );
  const result = document.querySelector("#result");

  function run() {
    //Storing Data In Local Storage
    localStorage.setItem("html_code", html_code.getValue());
    localStorage.setItem("css_code", css_code.getValue());
    localStorage.setItem("js_code", js_code.getValue());

    result.contentDocument.body.innerHTML =
      `<style> ${localStorage.css_code}</style>` + localStorage.html_code;
    result.contentWindow.eval(localStorage.js_code);
  }

  html_code.on("change", () => run());
  css_code.on("change", () => run());
  js_code.on("change", () => run());

  html_code.setValue(localStorage.html_code || "");
  css_code.setValue(localStorage.css_code || "");
  js_code.setValue(localStorage.js_code || "");

//----------------------------------------------------------------

var textEditor = document.getElementById("text");
var generatedText = document.getElementById("generated-text");

const axios = require("axios");
require("dotenv").config();

const apiKey = process.env.OPENAI_API_KEY;

const client = axios.create({
    headers: {
      Authorization: "Bearer " + apiKey,
    },
  });

  const params = {
    prompt: textEditor,
    model: "text-davinci-003",
    max_tokens: 10,
    temperature: 0,
  };
  
  client
    .post("https://api.openai.com/v1/completions", params)
    .then((result) => {
      console.log(result.data.choices[0].text);
    })
    .catch((err) => {
      console.log(err);
    });
