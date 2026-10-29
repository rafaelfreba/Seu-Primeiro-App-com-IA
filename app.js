(function () {
  "use strict";

  /* ---------- armazenamento seguro ---------- */
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* sem armazenamento */ } }
  };

  /* ---------- toast ---------- */
  const toastEl = document.getElementById("copy-toast");
  let toastT;
  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(toastT);
    toastT = setTimeout(() => toastEl.classList.remove("show"), 1800);
  }

  /* ---------- modo participante / professor ---------- */
  const footBtn = document.getElementById("foot-mode");
  function applyMode() {
    const prof = location.hash === "#professor";
    document.body.classList.toggle("is-prof", prof);
    document.querySelectorAll(".mode-btn").forEach(b => {
      b.setAttribute("aria-pressed", String((b.dataset.mode === "professor") === prof));
    });
    footBtn.textContent = prof ? "Voltar ao modo participante" : "Abrir modo professor";
  }
  function setMode(mode) {
    if (mode === "professor") {
      if (location.hash !== "#professor") location.hash = "professor";
    } else if (location.hash === "#professor") {
      history.replaceState(null, "", location.pathname + location.search);
    }
    applyMode();
  }
  document.querySelectorAll(".mode-btn").forEach(b => b.addEventListener("click", () => setMode(b.dataset.mode)));
  footBtn.addEventListener("click", () => setMode(document.body.classList.contains("is-prof") ? "aluno" : "professor"));
  window.addEventListener("hashchange", applyMode);
  applyMode();

  /* ---------- copiar ---------- */
  function selectText(el) {
    const r = document.createRange();
    r.selectNodeContents(el);
    const s = window.getSelection();
    s.removeAllRanges();
    s.addRange(r);
  }
  document.querySelectorAll("[data-copy-from]").forEach(btn => {
    btn.addEventListener("click", () => {
      const src = document.getElementById(btn.dataset.copyFrom);
      const text = src.textContent.trim();
      const original = btn.textContent;
      const ok = () => {
        btn.classList.add("done");
        btn.textContent = "Copiado!";
        toast("Prompt copiado. Agora cole no Gemini.");
        setTimeout(() => { btn.classList.remove("done"); btn.textContent = original; }, 1600);
      };
      const fail = () => { selectText(src); toast("Texto selecionado. Use Ctrl+C para copiar."); };
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(ok, fail);
        } else { fail(); }
      } catch (e) { fail(); }
    });
  });

  /* ---------- construtor de prompt ---------- */
  const pb = {
    papel: document.getElementById("pb-papel"),
    contexto: document.getElementById("pb-contexto"),
    restricao: document.getElementById("pb-restricao"),
    out: document.getElementById("pb-out"),
    meter: document.getElementById("pb-meter"),
    bar: document.getElementById("pb-bar")
  };
  function buildPrompt() {
    const parts = [pb.papel.value.trim(), pb.contexto.value.trim(), pb.restricao.value.trim()];
    const filled = parts.filter(Boolean).length;
    pb.out.textContent = filled ? parts.filter(Boolean).join("\n\n") : "Preencha pelo menos um pilar para ver o prompt.";
    pb.meter.textContent = filled + " de 3 pilares" + (filled === 3 ? " · pronto para usar" : "");
    pb.bar.style.setProperty("--p", Math.round(filled / 3 * 100) + "%");
  }
  [pb.papel, pb.contexto, pb.restricao].forEach(el => el.addEventListener("input", buildPrompt));
  buildPrompt();

  /* ---------- checklist ---------- */
  document.querySelectorAll("#checklist input").forEach(cb => {
    cb.checked = store.get("ck:" + cb.id) === "1";
    cb.addEventListener("change", () => store.set("ck:" + cb.id, cb.checked ? "1" : "0"));
  });

  /* ---------- cronômetro por etapa ---------- */
  const sel = document.getElementById("tb-etapa");
  const clock = document.getElementById("tb-clock");
  const play = document.getElementById("tb-play");
  const reset = document.getElementById("tb-reset");
  let remaining = 0, timer = null;
  function fmt(s) {
    const neg = s < 0, a = Math.abs(s);
    return (neg ? "+" : "") + String(Math.floor(a / 60)).padStart(2, "0") + ":" + String(a % 60).padStart(2, "0");
  }
  function render() {
    clock.textContent = fmt(remaining);
    clock.classList.toggle("over", remaining < 0);
  }
  function load() {
    stop();
    remaining = Number(sel.selectedOptions[0].dataset.min) * 60;
    render();
  }
  function stop() { clearInterval(timer); timer = null; play.textContent = "Iniciar"; }
  play.addEventListener("click", () => {
    if (timer) { stop(); return; }
    play.textContent = "Pausar";
    timer = setInterval(() => { remaining--; render(); }, 1000);
  });
  reset.addEventListener("click", load);
  sel.addEventListener("change", () => {
    load();
    const target = document.getElementById("etapa-" + (Number(sel.value) + 1));
    if (target) target.scrollIntoView();
  });
  load();

  /* ---------- demo PetBites ---------- */
  const demo = document.getElementById("demo");
  const count = document.getElementById("demo-count");
  const dToast = document.getElementById("demo-toast");
  let n = 0, dT;
  demo.querySelectorAll(".ph-add").forEach(b => b.addEventListener("click", () => {
    n++;
    count.textContent = n;
    count.classList.remove("bump"); void count.offsetWidth; count.classList.add("bump");
    dToast.textContent = "✓ " + b.dataset.item + " adicionado!";
    dToast.classList.add("show");
    clearTimeout(dT);
    dT = setTimeout(() => dToast.classList.remove("show"), 2000);
  }));
  demo.querySelectorAll(".ph-fav").forEach(b => b.addEventListener("click", () => {
    const on = b.getAttribute("aria-pressed") !== "true";
    b.setAttribute("aria-pressed", String(on));
    b.textContent = on ? "♥" : "♡";
  }));
  document.getElementById("demo-theme").addEventListener("click", () => demo.classList.toggle("dark"));
})();
