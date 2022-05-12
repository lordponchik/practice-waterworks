const octopusText = document.querySelector('.octopus__text');
const octopus = document.querySelector('.octopus');

octopus.addEventListener('click', () => {
  octopus.classList.toggle('touch');
  octopusText.innerHTML = 'Oooops';
  setTimeout(resetOctopus, 5000);
});
function resetOctopus() {
  octopus.classList.toggle('touch');
  octopusText.innerHTML = 'Don`t touch';
}
