/* ═══════════════════════════════════════
   OMNIGRID — Shared JoJo utilities
   Include this in every chapter page
═══════════════════════════════════════ */

/* JoJo SVG markup (reusable) */
function jojoSVG(w=60, h=74) {
  return `<svg viewBox="0 0 80 100" width="${w}" height="${h}" style="display:block;filter:drop-shadow(0 4px 12px rgba(0,0,0,0.18))">
    <ellipse cx="9"  cy="48" rx="7" ry="9" fill="#FFD166"/>
    <ellipse cx="71" cy="48" rx="7" ry="9" fill="#FFD166"/>
    <ellipse cx="40" cy="46" rx="28" ry="30" fill="#FFD166"/>
    <rect x="12" y="18" width="56" height="8" rx="4" fill="#FF6B35"/>
    <rect x="22" y="5"  width="36" height="16" rx="6" fill="#FF8C5A"/>
    <text x="40" y="16" font-size="9" fill="#fff" text-anchor="middle">★</text>
    <ellipse cx="27" cy="38" rx="7" ry="7" fill="white"/>
    <ellipse cx="53" cy="38" rx="7" ry="7" fill="white"/>
    <circle cx="27" cy="38" r="4" fill="#1E1000"/>
    <circle cx="53" cy="38" r="4" fill="#1E1000"/>
    <circle cx="25" cy="35" r="1.5" fill="white"/>
    <circle cx="51" cy="35" r="1.5" fill="white"/>
    <ellipse cx="20" cy="53" rx="6" ry="3.5" fill="#FF9999" opacity="0.65"/>
    <ellipse cx="60" cy="53" rx="6" ry="3.5" fill="#FF9999" opacity="0.65"/>
    <path d="M30,56 Q40,64 50,56" stroke="#B84A00" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <rect x="22" y="74" width="36" height="18" rx="9" fill="#FF6B35"/>
  </svg>`;
}

/* Spawn celebration sparkles */
function spawnSparkles(count=6) {
  const emojis = ['✨','⭐','🌟','💫','🎉','🎊','🏆','👏'];
  for(let i=0;i<count;i++){
    const el = document.createElement('div');
    el.textContent = emojis[i % emojis.length];
    el.style.cssText = `
      position:fixed;font-size:22px;pointer-events:none;z-index:9999;
      left:${15+Math.random()*70}%;top:${10+Math.random()*55}%;
      animation:sparkleUp 1.2s ease-out ${i*0.08}s forwards;
    `;
    document.body.appendChild(el);
    setTimeout(()=>el.remove(), 1400);
  }
}

/* Progress tracker — saves to localStorage */
const Progress = {
  key: 'omnigrid_progress',
  get() {
    try { return JSON.parse(localStorage.getItem(this.key)||'{}'); } catch(e){ return {}; }
  },
  markDone(subject, chNum) {
    const p = this.get();
    if(!p[subject]) p[subject] = [];
    if(!p[subject].includes(chNum)) p[subject].push(chNum);
    try { localStorage.setItem(this.key, JSON.stringify(p)); } catch(e){}
  },
  isDone(subject, chNum) {
    const p = this.get();
    return p[subject] && p[subject].includes(chNum);
  }
};
