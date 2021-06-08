const btnTabs = document.querySelectorAll('.nav-link');
const tabPanes = document.querySelectorAll('.tab-pane');
// console.log(btnTabs);

for (const btnTab of btnTabs) {
  btnTab.addEventListener('click', function (e) {
    this.classList.add('active');
    const idTarget = this.getAttribute('data-target');

    const targetElement = document.querySelector(idTarget);
    targetElement.classList.add('show');
    // console.log(e);

    for (const tabPane of tabPanes) {
      const idPane = '#' + tabPane.id;
      if (idPane !== idTarget) {
        console.log(idTarget);
        tabPane.classList.remove('show');
      }
    }

    for (const btnTab of btnTabs) {
      if (this !== btnTab) {
        btnTab.classList.remove('active');
      }
    }
  });
}
