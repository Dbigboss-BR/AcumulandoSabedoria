/* main.js - Arquivo Completo */
(function() {
    // 1. Fundo de Partículas (Canvas)
    const canvas = document.getElementById('bg-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let w, h, particles = [];

        function init() {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
            particles = [];
            for (let i = 0; i < 80; i++) {
                particles.push({
                    x: Math.random() * w,
                    y: Math.random() * h,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                    r: Math.random() * 2
                });
            }
        }

        function draw() {
            ctx.clearRect(0, 0, w, h);
            ctx.fillStyle = "rgba(139, 130, 240, 0.5)";
            particles.forEach(p => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fill();
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0 || p.x > w) p.vx *= -1;
                if (p.y < 0 || p.y > h) p.vy *= -1;
            });
            requestAnimationFrame(draw);
        }

        window.addEventListener('resize', init);
        init();
        draw();
    }

    // 2. Orbs Flutuantes (DNA Visual)
    const colors = ['#8b82f015', '#1ec98a10', '#f0804010'];
    colors.forEach((color, i) => {
        const orb = document.createElement('div');
        Object.assign(orb.style, {
            position: 'fixed',
            width: (300 + (i * 100)) + 'px',
            height: (300 + (i * 100)) + 'px',
            borderRadius: '50%',
            background: color,
            filter: 'blur(80px)',
            zIndex: '0',
            top: (Math.random() * 80) + '%',
            left: (Math.random() * 80) + '%',
            pointerEvents: 'none',
            animation: `float ${10 + (i * 5)}s infinite alternate ease-in-out`
        });
        document.body.prepend(orb);
    });

    // Adiciona animação de flutuação ao CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            from { transform: translate(0, 0); }
            to { transform: translate(40px, 40px); }
        }
    `;
    document.head.appendChild(style);
})();