let icon = document.querySelector('.icon'),
  nav = document.querySelector('nav');

icon.addEventListener('click', () => {
  nav.classList.toggle('active');
  icon.classList.toggle('active');
});

let tabs = document.querySelectorAll('.tabs p'),
  tabContent = document.querySelectorAll('.tab');

tabs.forEach((tab) => {
  tab.addEventListener('click', function() {
    tabs.forEach((t) => t.classList.remove('active'))
    this.classList.add('active')
    tabContent.forEach((tc) => {
      if (tab.classList.contains(tc.dataset.content)) {
        tabContent.forEach((t) => t.classList.remove('active'))
        tc.classList.add('active');
      }
    })
  });
});


let qu = document.querySelectorAll('.q_a div .qu'),
  an = document.querySelectorAll('.q_a div .a')
qu.forEach((q) => {
  q.addEventListener('click', function() {
    qu.forEach((el) => el.classList.remove('active'));
    this.classList.add('active');
    an.forEach((a) => {
      if (q.classList.contains(a.dataset.qus)) {
        an.forEach((a) => a.classList.remove('active'))
        a.classList.add('active')
      }
    });
  });
});

let input = document.querySelector('[type=email]'),
  submit = document.querySelector('[type=submit]'),
  err = document.querySelector('.error');
let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
input.onblur = function(e) {
  if (!reg.test(this.value)) {
    err.classList.add('active')
  } else {
    err.classList.remove('active')

  }
}
