function createStars() {
  for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.style.position = 'fixed';
    star.style.width = '2px';
    star.style.height = '2px';
    star.style.background = 'white';
    star.style.borderRadius = '50%';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animation = `twinkle ${Math.random() * 3 + 2}s infinite`;
    star.style.opacity = Math.random();
    document.body.appendChild(star);
  }
}
createStars();

document.getElementById('donateBtn').addEventListener('click', () => {
  document.getElementById('donateDialog').style.display = 'flex';
});

document.getElementById('closeDonateDialog').addEventListener('click', () => {
  document.getElementById('donateDialog').style.display = 'none';
});
