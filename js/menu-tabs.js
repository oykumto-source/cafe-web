// 1. Find all four tab buttons and put them in a list
const tabs = [...document.querySelectorAll('[role="tab"]')];

// 2. Select one tab: highlight it, show its panel, hide the others
function select(tab) {
  tabs.forEach((t) => {
    const on = (t === tab);

    t.setAttribute('aria-selected', String(on));
    t.tabIndex = on ? 0 : -1;

    const panelId = t.getAttribute('aria-controls');
    document.getElementById(panelId).hidden = !on;
  });
}

// 3. Clicks and arrow keys
tabs.forEach((tab, i) => {
  tab.addEventListener('click', () => select(tab));

  tab.addEventListener('keydown', (e) => {
    let dir = 0;
    if (e.key === 'ArrowRight') dir = 1;
    if (e.key === 'ArrowLeft')  dir = -1;
    if (dir === 0) return;

    const next = tabs[(i + dir + tabs.length) % tabs.length];
    next.focus();
    select(next);
  });
});