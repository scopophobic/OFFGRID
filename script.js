
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


  var textEditor = document.getElementById("##css-code");
var generatedText = document.getElementById("generated-text");
var apiToken = open key;

// Function to pick the line automatically after it is commented and enclosed within our own unique syntax
function pickLine() {
  var lines = textEditor.value.split("\n");
  for (var i = 0; i < lines.length; i++) {
    if (lines[i].startsWith("##")) {
      // Use Open AI API to generate text based on the prompt
      var prompt = lines[i].slice(20);
      var request = new XMLHttpRequest();
      request.open("POST", "https://api.openai.com/v1/engines/text-davinci/jobs");
      request.setRequestHeader("Content-Type", "application/json");
      request.setRequestHeader("Authorization", "Bearer " + apiToken);

      request.onreadystatechange = function() {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
          var response = JSON.parse(this.responseText);
          generatedText.innerHTML = "Generated Text based on the prompt: " + response.choices[0].text;
        }
      };

      request.send(JSON.stringify({
        prompt: prompt,
        max_tokens: 100,
        n: 1,
        temperature: 0.5
      }));
      break;
    }
  }
}

// Check for syntax and prompt every few seconds
setInterval(function() {
  pickLine();
}, 3000);


console.log(generatedText);


//-------------------
window.onload = function() {
    window.editor = CodeMirror.fromTextArea(code, {
        mode: "javascript",
        lineNumbers: true,
        lineWrapping: true,
        foldGutter: {
            rangeFinder: new CodeMirror.fold.combine(CodeMirror.fold.brace, CodeMirror.fold.comment)
        },
        gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"]
    });
};
