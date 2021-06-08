const arcordionButtons = document.getElementsByClassName('accordion-header');

const first = arcordionButtons[0];
first.classList.add('active');
first.nextElementSibling.style.height =
  first.nextElementSibling.scrollHeight + 15 + 'px';

for (const arcordionButton of arcordionButtons) {
  arcordionButton.addEventListener('click', function (e) {
    this.classList.toggle('active');
    var content = this.nextElementSibling;

    if (!content.style.height || content.style.height === '0px') {
      content.style.height = content.scrollHeight + 15 + 'px';
    } else {
      content.style.height = '0px';
    }

    // dong cac the con lai
    for (const element of arcordionButtons) {
      if (element !== this) {
        element.classList.remove('active');
        content = element.nextElementSibling;
        content.style.height = '0px';
      }
    }
  });
}
