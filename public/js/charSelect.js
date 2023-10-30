const buttonSelects = document.querySelectorAll('.buttonSelect');
let chooseHeroPotter = document.querySelector('#chooseHeroPotter')
let chooseHeroVoldemort = document.querySelector('#chooseHeroVoldemort')

buttonSelects.forEach(button => {
    button.addEventListener('click', () => {
      buttonSelects.forEach(button => button.classList.remove('active'));
      button.classList.add('active');
      if(button.classList.contains('active') && (button.getAttribute('id') == "potterTeam")) {
        console.log("potterTeam")
        chooseHeroPotter.hidden = false;
        chooseHeroVoldemort.hidden = true;
      } else if (button.classList.contains('active') && (button.getAttribute('id') == "voldemortTeam")) {
        console.log("voldemortTeam")
        chooseHeroVoldemort.hidden = false;
        chooseHeroPotter.hidden = true;
      }
    });
});