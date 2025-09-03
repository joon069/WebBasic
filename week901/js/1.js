let h1 = document.querySelector('h1');

const OrgText = h1.textContent;

let color = null;

h1.addEventListener('mouseover', () => {
  h1.textContent = OrgText === '기느노' ? '기느노 게이' : '기느노';
  color = setInterval(() => {
    h1.style.color = h1.style.color == 'blue' ? 'red' : 'blue';
  }, 80);
})

h1.addEventListener('mouseout', () => {
  h1.textContent = OrgText;
  clearInterval(color);
  h1.style.color = 'black';
  h1.color.stlye = '';
});