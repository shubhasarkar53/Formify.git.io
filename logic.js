const formPreview = document.querySelector("#formPreview");
const addInput = document.querySelector("#addInput");
const inputTypes = document.querySelector("#inputTypes");
const textLabelContainer = document.querySelector("#text-label-wrapper");
const radioContainer = document.querySelector("#radio-options");

inputTypes.addEventListener("change", function () {
  const seletedVal = inputTypes.value;

  switch (seletedVal) {
    case "text":
      showElements(textLabelContainer);
      hideElements(radioContainer);
      break;
    case "checkbox":
      showElements(textLabelContainer);
      hideElements(radioContainer);
      break;
    case "radio":
      showElements(radioContainer);
      hideElements(textLabelContainer);
    default:
      break;
  }
});

function hideElements(...elements) {
  elements.forEach((element) => {
    element.style.display = "none";
  });
}
function showElements(...elements) {
  elements.forEach((element) => {
    element.style.display = "block";
  });
}

function createElem(inputType) {
  let inputElement;
  if (inputType === "text") {
    inputElement = document.createElement("input");
    inputElement.type = "text";
  } else if (inputType === "radio") {
    const inputQuestion = document.querySelector("#inputQuestion").value;
    const optionA = document.querySelector("#optionA").value;
    const optionB = document.querySelector("#optionB").value;
    const optionC = document.querySelector("#optionC").value;
    const optionD = document.querySelector("#optionD").value;

    inputElement = document.createElement("div");
    let random = Math.random();
    const newEle = `
    <b>${inputQuestion}:</b><br>
    
    <div class="radio-flex">
    <input type="radio" id="${optionA}" name="questions_${random}" value="${optionA}">
    <label for="${optionA}">${optionA}</label><br>
    </div>
    
    <div class="radio-flex">
    <input type="radio" id="${optionB}" name="questions_${random}" value="${optionB}">
    <label for="${optionB}">${optionB}</label><br>
    </div>
    <div class="radio-flex">
    <input type="radio" id="${optionC}" name="questions_${random}" value="${optionC}">
    <label for="${optionC}">${optionC}</label><br>
    </div>
    <div class="radio-flex">
    <input type="radio" id="${optionD}" name="questions_${random}" value="${optionD}">
    <label for="${optionD}">${optionD}</label><br>
    </div>
    <hr><br>
  `;
  

 inputElement.innerHTML = newEle
    
  } else {
    inputElement = document.createElement("input");
    inputElement.type = "checkbox";
  }
  return inputElement;
}

function paintElem(elem, label) {
  const pdiv = document.createElement("div");
  if(elem.type == "checkbox" || elem.type == "text"){
    pdiv.appendChild(label)
    if(elem.type == "checkbox" ){

      pdiv.classList.add("elem-flex")
    }
  }
 
  pdiv.appendChild(elem);
  formPreview.appendChild(pdiv);
}

function createLabel() {
  const inputLabel = document.querySelector("#inputLabel").value;
  const labelElement = document.createElement("label");
  labelElement.innerText = inputLabel;
  console.log(labelElement);
  return labelElement;
}

function handleSubmit() {
  const inputTypeVal = document.querySelector("#inputTypes").value;
  let desiredElement;
  let desiredLabel;
  switch (inputTypeVal) {
    case "text":
      desiredElement = createElem("text");
      desiredLabel = createLabel();
      paintElem(desiredElement, desiredLabel);
      break;
    case "radio":
      desiredElement = createElem("radio");
      desiredLabel = createLabel();
      paintElem(desiredElement, desiredLabel);
      break;
    case "checkbox":
      desiredElement = createElem("checkbox");
      desiredLabel = createLabel();
      paintElem(desiredElement, desiredLabel);
      break;

    default:
      paintElem("");
  }
}

addInput.addEventListener("click", handleSubmit);
