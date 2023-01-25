function initTabNav(){
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  if(tabMenu.length && tabContent.length) {
  tabContent[0].classList.add('ativo');

  function activeTab(index){
    tabContent.forEach((section) => {
      section.classList.remove('ativo');
    })
    tabContent[index].classList.add('ativo');
  }

  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click', () => {
      activeTab(index)
    })
  })
  }
}
initTabNav()

function initAccordion(){
  const accordionItem = document.querySelectorAll('.js-accordion dt')
  accordionItem[0].classList.add('ativo');
  accordionItem[0].nextElementSibling.classList.add('ativo');

  function activeAccordion(){
    this.classList.toggle('ativo');
    this.nextElementSibling.classList.toggle('ativo');
  }

  accordionItem.forEach((item) => {
    item.addEventListener('click', activeAccordion)
  })
}
initAccordion()

function initScrollSuave(){
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event){
    event.preventDefault;
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href)

    window.scrollTo()
    console.log(href);  
  }

  linksInternos.forEach(link => {
    link.addEventListener('click', scrollToSection)
  })
}
initScrollSuave()

function initAnimationScroll(){
  const sections = document.querySelectorAll('.js-scroll');

  if(sections.length){
    const windowMetade = window.innerHeight * 0.5;

    function animaScroll(){
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top - windowMetade;
        if(sectionTop < 0)
          section.classList.add('ativo')
         else 
          section.classList.remove('ativo')
      })
    }

    animaScroll();

    window.addEventListener('scroll', animaScroll)
  }
}
initAnimationScroll()