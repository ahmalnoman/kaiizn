const textElement = document.getElementById("dynamic-text");
const dynamicTexts = ["SERVICES_", "SOLUTIONS_"];

function typeWriter(texts, textIndex = 0, charIndex = 0, isDeleting = false) {
  const currentText = texts[textIndex];
  const transitionSpeed = isDeleting ? 100 : 200; //faster deletion, slower typing

  // update text content
  textElement.textContent = currentText.substring(0, charIndex);

  if (!isDeleting) {
    charIndex++;
    if (charIndex > currentText.length) {
      isDeleting = true;
      setTimeout(
        () => typeWriter(texts, textIndex, charIndex, isDeleting),
        1000
      );
      return;
    }
  } else {
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
    }
  }
  setTimeout(
    () => typeWriter(texts, textIndex, charIndex, isDeleting),
    transitionSpeed
  );
}

typeWriter(dynamicTexts);
