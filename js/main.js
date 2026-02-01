// ===== Floating hearts generator =====
const heartsWrap = document.getElementById('hearts');
for (let i = 0; i < 20; i++) {
  const h = document.createElement('div');
  h.className = 'heart';
  h.style.left = Math.random() * 100 + 'vw';
  h.style.animationDelay = (Math.random() * 10) + 's';
  h.style.opacity = (0.12 + Math.random() * 0.25).toFixed(2);
  h.style.transform = `rotate(45deg) scale(${(0.6 + Math.random() * 1.2).toFixed(2)})`;
  heartsWrap.appendChild(h);
}

// ===== Set fixed name (Somali) & store for next page =====
const gfNameTitle = document.getElementById('gfNameTitle');
const FIXED_NAME = "Somali";
gfNameTitle.textContent = FIXED_NAME;
localStorage.setItem('gfName', FIXED_NAME);

// ===== NO button run-away logic =====
const playArea = document.getElementById('playArea');
const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

function moveNoButton() {
  const areaRect = playArea.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const pad = 10;
  const maxX = areaRect.width - btnRect.width - pad;
  const maxY = areaRect.height - btnRect.height - pad;

  const x = Math.floor(Math.random() * (maxX - pad + 1)) + pad;
  const y = Math.floor(Math.random() * (maxY - pad + 1)) + pad;

  noBtn.style.left = x + 'px';
  noBtn.style.top = y + 'px';
  noBtn.style.transform = 'translate(0, 0)';
}

noBtn.addEventListener('click', moveNoButton);
noBtn.addEventListener('mouseenter', moveNoButton);
noBtn.addEventListener('touchstart', (e) => {
  e.preventDefault();
  moveNoButton();
}, { passive: false });

// ===== YES redirect =====
yesBtn.addEventListener('click', () => {
  yesBtn.textContent = "Yay! 💖";
  setTimeout(() => {
    window.location.href = "success.html";
  }, 450);
});
