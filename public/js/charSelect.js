const buttonSelects = document.querySelectorAll('.buttonSelect');
let chooseHeroPotter = document.querySelector('#chooseHeroPotter')
let chooseHeroVoldemort = document.querySelector('#chooseHeroVoldemort')
let teamSelectCheck = document.querySelector('#teamSelectCheck')

buttonSelects.forEach(button => {
    button.addEventListener('click', () => {
      buttonSelects.forEach(button => button.classList.remove('active'));
      button.classList.add('active');
      if(button.classList.contains('active') && (button.getAttribute('id') == "potterTeam")) {
        teamSelectCheck.value = "potterTeam"
        console.log(teamSelectCheck.value)
        chooseHeroPotter.hidden = false;
        chooseHeroVoldemort.hidden = true;
      } else if (button.classList.contains('active') && (button.getAttribute('id') == "voldemortTeam")) {
        teamSelectCheck.value = "voldemortTeam"
        console.log(teamSelectCheck.value)
        chooseHeroVoldemort.hidden = false;
        chooseHeroPotter.hidden = true;
      }
    });
});