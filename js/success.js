// Set name from localStorage (aapke purane code me bhi yahi logic tha) :contentReference[oaicite:2]{index=2}
const n = localStorage.getItem('gfName') || "Somali";
document.getElementById('gfName').textContent = n;
document.getElementById('gfName2').textContent = n;

// Mini confetti (simple canvas)
const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');

function resize(){
  canvas.width = canvas.clientWidth * devicePixelRatio;
  canvas.height = canvas.clientHeight * devicePixelRatio;
}
window.addEventListener('resize', resize);
resize();

let pieces = [];
function shoot(){
  pieces = [];
  for(let i=0;i<120;i++){
    pieces.push({
      x: Math.random()*canvas.width,
      y: -Math.random()*canvas.height*0.5,
      r: 2 + Math.random()*4,
      vx: -2 + Math.random()*4,
      vy: 2 + Math.random()*5,
      a: Math.random()*Math.PI*2,
      va: -0.2 + Math.random()*0.4
    });
  }
}

function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  for(const p of pieces){
    p.x += p.vx;
    p.y += p.vy;
    p.a += p.va;

    if(p.y > canvas.height + 20) p.y = -10;
    if(p.x < -20) p.x = canvas.width + 20;
    if(p.x > canvas.width + 20) p.x = -20;

    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.a);
    ctx.fillRect(-p.r, -p.r, p.r*2, p.r*2);
    ctx.restore();
  }
  requestAnimationFrame(draw);
}
draw();

document.getElementById('confettiBtn').addEventListener('click', shoot);
shoot();
