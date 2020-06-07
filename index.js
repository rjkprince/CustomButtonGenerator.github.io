var button = document.getElementById('button-preview');
var label = document.getElementById('button-label');
var fontSize = document.getElementById('button-fontSize');
var fontColor = document.getElementById('button-fontColor');
var paddingTop = document.getElementById('padding-top');
var paddingRight = document.getElementById('padding-right');
var paddingBottom = document.getElementById('padding-bottom');
var paddingLeft = document.getElementById('padding-left');
var bgColor = document.getElementById('button-bgColor');
var borderColor = document.getElementById('button-borderColor');
var borderWidth = document.getElementById('button-borderWidth');
var borderRadius = document.getElementById('button-borderRadius');
var generator = document.getElementById('generator');
var inputs = document.getElementsByClassName('inputs');

function updateBtn() {
  if (label.value != null && label.value != '') button.innerText = label.value;
  else button.innerText = 'Your button';
  if (fontSize.value != null && fontSize.value != '')
    button.style.fontSize = fontSize.value + 'px';
  else button.style.fontSize = '16px';
  button.style.color = fontColor.value;
  button.style.paddingTop = paddingTop.value + 'px';
  button.style.paddingBottom = paddingBottom.value + 'px';
  button.style.paddingRight = paddingRight.value + 'px';
  button.style.paddingLeft = paddingLeft.value + 'px';
  button.style.borderWidth = borderWidth.value + 'px';
  button.style.borderColor = borderColor.value;
  button.style.borderRadius = borderRadius.value + 'px';
}

bgColor.addEventListener('input', function () {
  button.style.backgroundColor = bgColor.value;
});

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('input', updateBtn);
}

generator.addEventListener('click', function () {
  var yourBtn = 'HTML => <button id="custom">' + button.innerText + '</button>';
  var customCss =
    'CSS => #custom{ \n font-size:' +
    button.style.fontSize +
    '; \n color:' +
    button.style.color +
    '; \n padding:' +
    button.style.padding +
    '; \n background-color:' +
    button.style.backgroundColor +
    '; \n border:' +
    button.style.border +
    '; \n border-radius:' +
    button.style.borderRadius +
    ';}';
  alert(yourBtn + '\n' + customCss);
});
