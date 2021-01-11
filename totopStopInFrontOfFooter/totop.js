window.addEventListener('scroll', ()=> {
    const scrollTop = document.querySelector('.totop');
    if(window.scrollY > 200) {
        scrollTop.classList.add('active');
    } else {
        scrollTop.classList.remove('active');
        scrollTop.style.transition = '0.5s ease-in-out';
    }


  const docHeight = document.body.clientHeight;
  const scrollCount = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollPosition = document.documentElement.clientHeight + scrollCount;
  const footer = document.querySelector('.footer').clientHeight;
  console.log(`docHeight: ${docHeight}`);
  console.log(`footer: ${footer}`);
  console.log(`scrollCount: ${scrollCount}`);
  console.log(`scrollPosition: ${scrollPosition}`);

  if (docHeight - scrollPosition <= footer){
    scrollTop.style.position = 'absolute';
    scrollTop.style.bottom = footer + 20 + 'px';
    scrollTop.style.transition = 'none';
  } else {
      scrollTop.style.position = 'fixed';
      scrollTop.style.bottom = 20 + 'px';
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const toTop = document.querySelector('.totop');
  toTop.addEventListener('click', () => {
    scrollToTop();
  });
});
