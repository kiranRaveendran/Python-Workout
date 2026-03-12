/* ─────────────────────────────────────────────
   PYTHON CODE HIGHLIGHT HELPERS (kept for any dynamic use)
───────────────────────────────────────────── */
var sk = function (t) { return '<span class="kw">' + t + '</span>'; };
var sf = function (t) { return '<span class="fn">' + t + '</span>'; };
var ss = function (t) { return '<span class="str">' + t + '</span>'; };
var sn = function (t) { return '<span class="num">' + t + '</span>'; };
var sc = function (t) { return '<span class="cmt">' + t + '</span>'; };
var sb = function () { return '<span class="blank">___</span>'; };

/* ─────────────────────────────────────────────
   PROBLEMS DATA (loaded from JSON)
───────────────────────────────────────────── */
var ch1 = [], ch2 = [], ch3 = [], ch4 = [], ch5 = [];
var concepts = {};

function loadProblems() {
  var pFetch = fetch('Python_problems.json').then(function (r) { return r.json(); });
  var cFetch = fetch('concepts.json').then(function (r) { return r.json(); }).catch(function () { return {}; });
  Promise.all([pFetch, cFetch])
    .then(function (results) {
      var data = results[0];
      var cdata = results[1];
      ch1 = Array.isArray(data.ch1) ? data.ch1 : [];
      ch2 = Array.isArray(data.ch2) ? data.ch2 : [];
      ch3 = Array.isArray(data.ch3) ? data.ch3 : [];
      ch4 = Array.isArray(data.ch4) ? data.ch4 : [];
      ch5 = Array.isArray(data.ch5) ? data.ch5 : [];
      concepts = (cdata && typeof cdata === 'object') ? cdata : {};
      initApp();
    })
    .catch(function (err) {
      console.error('Failed to load data', err);
      var msg = document.createElement('p');
      msg.style.cssText = 'padding:2rem;color:#f58b8b;text-align:center;';
      msg.textContent = 'Failed to load problems. Check that problems.json exists.';
      document.body.insertBefore(msg, document.body.firstChild);
    });
}

/* PLACEHOLDER_REMOVE_ME */
/* ─────────────────────────────────────────────
   PERSISTENCE
───────────────────────────────────────────── */
var STORAGE_KEY = 'python-workout-solved';
function loadSolvedFromStorage() {
  try {
    var raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ch1: [], ch2: [], ch3: [], ch4: [], ch5: [] };
    var data = JSON.parse(raw);
    return {
      ch1: Array.isArray(data.ch1) ? data.ch1 : [],
      ch2: Array.isArray(data.ch2) ? data.ch2 : [],
      ch3: Array.isArray(data.ch3) ? data.ch3 : [],
      ch4: Array.isArray(data.ch4) ? data.ch4 : [],
      ch5: Array.isArray(data.ch5) ? data.ch5 : []
    };
  } catch (e) { return { ch1: [], ch2: [], ch3: [], ch4: [], ch5: [] }; }
}
function saveSolvedToStorage() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      ch1: Array.from(solvedIds.ch1),
      ch2: Array.from(solvedIds.ch2),
      ch3: Array.from(solvedIds.ch3),
      ch4: Array.from(solvedIds.ch4),
      ch5: Array.from(solvedIds.ch5)
    }));
  } catch (e) {}
}
var saved = loadSolvedFromStorage();
var solvedIds = { ch1: new Set(saved.ch1), ch2: new Set(saved.ch2), ch3: new Set(saved.ch3), ch4: new Set(saved.ch4), ch5: new Set(saved.ch5) };

/* ─────────────────────────────────────────────
   RENDER
───────────────────────────────────────────── */
function dots(level) {
  var m = { easy: 1, medium: 2, hard: 3 };
  return [1, 2, 3].map(function (i) {
    return '<div class="dot ' + (i <= m[level] ? 'lit ' + level : '') + '"></div>';
  }).join('');
}

function isCh5Complete() {
  return typeof ch5 !== 'undefined' && solvedIds.ch5 && solvedIds.ch5.size >= ch5.length;
}

function renderCard(p, chapter, delay) {
  var chKey = 'ch' + chapter;
  var isCh5 = chapter === 5;
  var body = '<p class="problem-desc">' + p.desc + '</p>';
  if (!isCh5 && p.code) body += '<div class="code-block">' + p.code + '</div>';
  body += '<button type="button" class="write-code-btn" onclick="openCodeModal(this)" data-id="' + p.id + '" data-ch="' + chapter + '">✏️ Write code</button>' +
    '<button class="guidance-toggle" onclick="toggleG(this)">' +
      '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg> 💡 Show Guidance' +
    '</button>' +
    '<div class="guidance-panel"><ol>' + p.guidance.map(function (g) { return '<li>' + g + '</li>'; }).join('') + '</ol></div>';
  if (isCh5 && isCh5Complete() && p.solution != null) {
    var codeHtml = '<pre class="code-block"><code>' + escapeHtml(p.solution) + '</code></pre>';
    body += '<div class="solution-block"><div class="solution-label">Solution</div>' + codeHtml + (p.solutionMethod ? '<div class="method-text"><strong>Method:</strong> ' + escapeHtml(p.solutionMethod) + '</div>' : '') + '</div>';
  }
  var isSolved = isCh5 && solvedIds.ch5 && solvedIds.ch5.has(p.id);
  var cardClass = 'card' + (isSolved ? ' solved' : '');
  var btnHtml = isSolved ? '<span>🎉</span> Solved!' : '<span>✓</span> Mark as Solved';
  var btnClass = 'done-btn' + (isSolved ? ' solved' : '');
  return '<div class="' + cardClass + '" data-id="' + p.id + '" data-topic="' + p.topic + '" style="animation-delay:' + delay + 's">' +
    '<div class="card-header">' +
      '<span class="problem-num">#' + String(p.id).padStart(2, '0') + '</span>' +
      '<span class="problem-title">' + p.title + '</span>' +
      '<span class="topic-tag tag-' + p.topic + '">' + p.topic + '</span>' +
      '<button class="concept-btn" onclick="openConceptModal(\'' + p.topic + '\')" title="Learn this concept from scratch">📖 Concept</button>' +
    '</div>' +
    '<div class="card-body">' + body + '</div>' +
    '<div class="card-footer">' +
      '<div class="difficulty">' + dots(p.difficulty) + '</div>' +
      '<button class="' + btnClass + '" onclick="toggleSolved(this,' + p.id + ',\'' + chKey + '\')">' + btnHtml + '</button>' +
    '</div></div>';
}

function escapeHtml(s) {
  if (!s) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* ─────────────────────────────────────────────
   CONCEPT MODAL
───────────────────────────────────────────── */
function openConceptModal(topic) {
  var c = concepts[topic];
  if (!c) {
    c = {
      title: topic.replace(/_/g, ' ').replace(/\b\w/g, function (l) { return l.toUpperCase(); }),
      tagline: 'Concept for this topic',
      explanation: 'Detailed concept content for this topic will be available soon.',
      realWorld: '',
      keywords: [],
      codeExample: null
    };
  }
  document.getElementById('concept-modal-tagline-badge').textContent = topic.replace(/_/g, ' ');
  document.getElementById('concept-modal-title').textContent = c.title || topic;
  document.getElementById('concept-modal-tagline').textContent = c.tagline || '';
  document.getElementById('concept-modal-explanation').textContent = c.explanation || '';

  var worldSection = document.getElementById('concept-modal-realworld');
  if (worldSection) worldSection.textContent = c.realWorld || '';
  var worldWrap = worldSection ? worldSection.closest('.concept-sec-world') : null;
  if (worldWrap) worldWrap.style.display = c.realWorld ? '' : 'none';

  var kwEl = document.getElementById('concept-modal-keywords');
  if (kwEl) {
    if (c.keywords && c.keywords.length) {
      kwEl.innerHTML = c.keywords.map(function (kw) {
        return '<div class="concept-kw-item">' +
          '<div class="concept-kw-term">' + escapeHtml(kw.term) + '</div>' +
          '<div class="concept-kw-meaning">' + escapeHtml(kw.meaning) + '</div>' +
          '</div>';
      }).join('');
    } else {
      kwEl.innerHTML = '<p style="color:#6b6b88;font-size:0.85rem;margin:0;">No key terms listed for this topic yet.</p>';
    }
  }

  var codeSection = document.getElementById('concept-modal-code-section');
  var codeEl = document.getElementById('concept-modal-code');
  if (c.codeExample && codeEl && codeSection) {
    codeEl.textContent = c.codeExample;
    codeSection.style.display = '';
  } else if (codeSection) {
    codeSection.style.display = 'none';
  }

  var overlay = document.getElementById('concept-overlay');
  if (overlay) {
    overlay.classList.add('open');
    var box = overlay.querySelector('.concept-body');
    if (box) box.scrollTop = 0;
    if (overlay._conceptEscHandler) document.removeEventListener('keydown', overlay._conceptEscHandler);
    overlay._conceptEscHandler = function (e) {
      if (e.key === 'Escape') closeConceptModal();
    };
    document.addEventListener('keydown', overlay._conceptEscHandler);
  }
  document.body.style.overflow = 'hidden';
}

function closeConceptModal() {
  var overlay = document.getElementById('concept-overlay');
  if (overlay) {
    overlay.classList.remove('open');
    if (overlay._conceptEscHandler) {
      document.removeEventListener('keydown', overlay._conceptEscHandler);
      overlay._conceptEscHandler = null;
    }
  }
  document.body.style.overflow = '';
}

/* ─────────────────────────────────────────────
   CODE MODAL — Python stub (add Pyodide for real execution)
───────────────────────────────────────────── */
function hasRealCode(code) {
  var s = (code || '').trim();
  if (!s) return false;
  var lines = s.split('\n').map(function (line) { return line.trim(); }).filter(function (line) {
    if (!line) return false;
    var rest = line.replace(/^\s*#/, '').trim();
    return rest.length > 0;
  });
  return lines.length > 0;
}

function runPythonCode(code) {
  if (!hasRealCode(code)) return { success: false, output: '', error: 'No code to run' };
  try {
    if (typeof pyodideRun === 'function') return pyodideRun(code);
  } catch (e) {}
  return { success: true, output: '(Stub: Run your code locally or add Pyodide for in-browser Python.)' };
}

function getProblemById(chKey, id) {
  var arr = chKey === 'ch1' ? ch1 : chKey === 'ch2' ? ch2 : chKey === 'ch3' ? ch3 : chKey === 'ch5' ? ch5 : ch4;
  for (var i = 0; i < arr.length; i++) if (arr[i].id === id) return arr[i];
  return null;
}

function openCodeModal(btn) {
  var id = parseInt(btn.dataset.id, 10);
  var ch = btn.dataset.ch;
  var chKey = 'ch' + ch;
  var p = getProblemById(chKey, id);
  if (!p) return;
  var overlay = document.getElementById('code-modal-overlay');
  var titleEl = document.getElementById('modal-title');
  var descEl = document.getElementById('modal-desc');
  var listEl = document.getElementById('modal-guidance-list');
  var editorEl = document.getElementById('modal-editor');
  var outputEl = document.getElementById('modal-output');
  if (!overlay || !titleEl || !descEl || !listEl || !editorEl || !outputEl) return;
  titleEl.textContent = p.title;
  descEl.textContent = p.desc;
  listEl.innerHTML = p.guidance.map(function (g) { return '<li>' + g + '</li>'; }).join('');
  editorEl.value = '';
  outputEl.textContent = '';
  outputEl.className = 'modal-output empty';
  overlay.dataset.currentId = id;
  overlay.dataset.currentCh = chKey;
  overlay.classList.add('modal-open');
  overlay.setAttribute('aria-hidden', 'false');
  resizeModalEditor();
  if (!editorEl._resizeBound) {
    editorEl.addEventListener('input', resizeModalEditor);
    editorEl._resizeBound = true;
  }
  editorEl.focus();
  var escHandler = function (e) {
    if (e.key === 'Escape') { closeCodeModal(); document.removeEventListener('keydown', escHandler); }
  };
  document.addEventListener('keydown', escHandler);
  overlay._escHandler = escHandler;
}

function closeCodeModal() {
  var overlay = document.getElementById('code-modal-overlay');
  if (overlay) {
    overlay.classList.remove('modal-open');
    overlay.setAttribute('aria-hidden', 'true');
    if (overlay._escHandler) {
      document.removeEventListener('keydown', overlay._escHandler);
      overlay._escHandler = null;
    }
  }
}

function resizeModalEditor() {
  var el = document.getElementById('modal-editor');
  if (!el) return;
  var minH = window.innerHeight * 0.45;
  var maxH = window.innerHeight * 0.75;
  el.style.height = 'auto';
  var h = Math.max(el.scrollHeight, minH);
  el.style.height = Math.min(h, maxH) + 'px';
  el.style.overflowY = h > maxH ? 'auto' : 'hidden';
}

function runCodeInModal() {
  var editorEl = document.getElementById('modal-editor');
  var outputEl = document.getElementById('modal-output');
  if (!editorEl || !outputEl) return;
  var result = runPythonCode(editorEl.value.trim());
  outputEl.textContent = result.output || result.error || '(no output)';
  outputEl.classList.remove('empty', 'error', 'success');
  if (result.success) outputEl.classList.add('success');
  else { outputEl.textContent = (result.output ? result.output + '\n' : '') + 'Error: ' + (result.error || 'Unknown'); outputEl.classList.add('error'); }
}

function submitCodeInModal() {
  var overlay = document.getElementById('code-modal-overlay');
  var editorEl = document.getElementById('modal-editor');
  var outputEl = document.getElementById('modal-output');
  if (!overlay || !editorEl || !outputEl) return;
  var id = parseInt(overlay.dataset.currentId, 10);
  var chKey = overlay.dataset.currentCh;
  if (!chKey || !solvedIds[chKey]) return;
  var code = editorEl.value.trim();
  if (!hasRealCode(code)) {
    outputEl.textContent = 'Write some code and run it successfully before submitting.';
    outputEl.classList.remove('empty', 'success');
    outputEl.classList.add('error');
    return;
  }
  var result = runPythonCode(code);
  outputEl.textContent = result.output || '';
  outputEl.classList.remove('empty', 'error', 'success');
  if (!result.success) {
    outputEl.textContent = (result.output ? result.output + '\n' : '') + 'Error: ' + (result.error || '');
    outputEl.classList.add('error');
    return;
  }
  outputEl.classList.add('success');
  outputEl.textContent = result.output + '\n✓ Run successful!';
  var grid = document.getElementById(chKey + '-grid');
  var card = grid ? grid.querySelector('.card[data-id="' + id + '"]') : null;
  var doneBtn = card ? card.querySelector('.done-btn') : null;
  if (doneBtn && !solvedIds[chKey].has(id)) toggleSolved(doneBtn, id, chKey);
  closeCodeModal();
}

/* ─────────────────────────────────────────────
   RENDER CHAPTERS (run after problems loaded)
───────────────────────────────────────────── */
function renderCh5Grid() {
  var el = document.getElementById('ch5-grid');
  if (el && typeof ch5 !== 'undefined') el.innerHTML = ch5.map(function (p, i) { return renderCard(p, 5, i * 0.04); }).join('');
}

function restoreSolvedUI() {
  ['ch1', 'ch2', 'ch3', 'ch4', 'ch5'].forEach(function (chKey) {
    var gridId = chKey + '-grid';
    solvedIds[chKey].forEach(function (id) {
      var card = document.querySelector('#' + gridId + ' .card[data-id="' + id + '"]');
      if (card) {
        card.classList.add('solved');
        var btn = card.querySelector('.done-btn');
        if (btn) { btn.classList.add('solved'); btn.innerHTML = '<span>🎉</span> Solved!'; }
      }
    });
  });
}

function initApp() {
  document.getElementById('ch1-grid').innerHTML = ch1.map(function (p, i) { return renderCard(p, 1, i * 0.04); }).join('');
  document.getElementById('ch2-grid').innerHTML = ch2.map(function (p, i) { return renderCard(p, 2, i * 0.04); }).join('');
  document.getElementById('ch3-grid').innerHTML = ch3.map(function (p, i) { return renderCard(p, 3, i * 0.04); }).join('');
  var ch4Grid = document.getElementById('ch4-grid');
  if (ch4Grid) ch4Grid.innerHTML = ch4.map(function (p, i) { return renderCard(p, 4, i * 0.04); }).join('');
  renderCh5Grid();
  document.getElementById('ch1-count').textContent = ch1.length;
  document.getElementById('ch2-count').textContent = ch2.length;
  document.getElementById('ch3-count').textContent = ch3.length;
  var ch4Count = document.getElementById('ch4-count');
  if (ch4Count) ch4Count.textContent = ch4.length;
  restoreSolvedUI();
  updateChapter2Lock();
  updateChapter3Lock();
  updateChapter4Lock();
  updateChapter5Lock();
  setupFilter('ch1-filter-bar', 'ch1-grid');
  setupFilter('ch2-filter-bar', 'ch2-grid');
  setupFilter('ch3-filter-bar', 'ch3-grid');
  var ch4FilterBar = document.getElementById('ch4-filter-bar');
  if (ch4FilterBar) setupFilter('ch4-filter-bar', 'ch4-grid');
  updateProgress();
}

/* ─────────────────────────────────────────────
   CHAPTER NAVIGATION
───────────────────────────────────────────── */
function updateChapter2Lock() {
  var ch2Tab = document.querySelector('.ch-tab[data-chapter="2"]');
  if (!ch2Tab) return;
  var ch1Complete = ch1.filter(function (p) { return solvedIds.ch1.has(p.id); }).length >= ch1.length;
  if (ch1Complete) {
    ch2Tab.classList.remove('ch-tab-locked');
    ch2Tab.classList.add('ch-tab-unlocked');
    ch2Tab.setAttribute('aria-disabled', 'false');
    ch2Tab.title = 'Control Flow';
  } else {
    ch2Tab.classList.add('ch-tab-locked');
    ch2Tab.classList.remove('ch-tab-unlocked');
    ch2Tab.setAttribute('aria-disabled', 'true');
    ch2Tab.title = 'Complete all ' + ch1.length + ' Chapter 1 problems to unlock';
  }
}
function updateChapter3Lock() {
  var ch3Tab = document.querySelector('.ch-tab[data-chapter="3"]');
  if (!ch3Tab) return;
  var ch2Complete = ch2.filter(function (p) { return solvedIds.ch2.has(p.id); }).length >= ch2.length;
  if (ch2Complete) {
    ch3Tab.classList.remove('ch-tab-locked');
    ch3Tab.classList.add('ch-tab-unlocked');
    ch3Tab.setAttribute('aria-disabled', 'false');
    ch3Tab.title = 'Python Functions';
  } else {
    ch3Tab.classList.add('ch-tab-locked');
    ch3Tab.classList.remove('ch-tab-unlocked');
    ch3Tab.setAttribute('aria-disabled', 'true');
    ch3Tab.title = 'Complete all ' + ch2.length + ' Chapter 2 problems to unlock';
  }
}
function updateChapter4Lock() {
  var ch4Tab = document.querySelector('.ch-tab[data-chapter="4"]');
  if (!ch4Tab) return;
  var ch3Complete = ch3.filter(function (p) { return solvedIds.ch3.has(p.id); }).length >= ch3.length;
  if (ch3Complete) {
    ch4Tab.classList.remove('ch-tab-locked');
    ch4Tab.classList.add('ch-tab-unlocked');
    ch4Tab.setAttribute('aria-disabled', 'false');
    ch4Tab.title = 'OOPs';
  } else {
    ch4Tab.classList.add('ch-tab-locked');
    ch4Tab.classList.remove('ch-tab-unlocked');
    ch4Tab.setAttribute('aria-disabled', 'true');
    ch4Tab.title = 'Complete all ' + ch3.length + ' Chapter 3 problems to unlock';
  }
}
function updateChapter5Lock() {
  var ch5Tab = document.querySelector('.ch-tab[data-chapter="5"]');
  if (!ch5Tab) return;
  var ch4Complete = ch4.filter(function (p) { return solvedIds.ch4.has(p.id); }).length >= ch4.length;
  if (ch4Complete) {
    ch5Tab.classList.remove('ch-tab-locked');
    ch5Tab.classList.add('ch-tab-unlocked');
    ch5Tab.setAttribute('aria-disabled', 'false');
    ch5Tab.title = 'OOPs Machine Test';
  } else {
    ch5Tab.classList.add('ch-tab-locked');
    ch5Tab.classList.remove('ch-tab-unlocked');
    ch5Tab.setAttribute('aria-disabled', 'true');
    ch5Tab.title = 'Complete all ' + ch4.length + ' Chapter 4 problems to unlock';
  }
}

document.querySelectorAll('.ch-tab').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var ch = btn.dataset.chapter;
    if ((ch === '2' || ch === '3' || ch === '4' || ch === '5') && btn.classList.contains('ch-tab-locked')) return;
    document.querySelectorAll('.ch-tab').forEach(function (b) { b.classList.remove('active'); });
    document.querySelectorAll('.ch-section').forEach(function (s) { s.classList.remove('active'); });
    btn.classList.add('active');
    var section = document.getElementById('chapter-' + ch);
    if (section) {
      section.classList.add('active');
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
});

/* ─────────────────────────────────────────────
   FILTERS
───────────────────────────────────────────── */
function renumberVisible(gridId) {
  var grid = document.getElementById(gridId);
  if (!grid) return;
  var visible = grid.querySelectorAll('.card:not(.hidden)');
  visible.forEach(function (card, index) {
    var numEl = card.querySelector('.problem-num');
    if (numEl) numEl.textContent = '#' + String(index + 1).padStart(2, '0');
  });
}
function setupFilter(barId, gridId) {
  document.querySelectorAll('#' + barId + ' .filter-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.querySelectorAll('#' + barId + ' .filter-btn').forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var topic = btn.dataset.topic;
      document.querySelectorAll('#' + gridId + ' .card').forEach(function (card) {
        card.classList.toggle('hidden', topic !== 'all' && card.dataset.topic !== topic);
      });
      renumberVisible(gridId);
    });
  });
}
/* ─────────────────────────────────────────────
   GUIDANCE TOGGLE
───────────────────────────────────────────── */
function toggleG(btn) {
  var panel = btn.nextElementSibling;
  btn.classList.toggle('open');
  panel.classList.toggle('open');
  btn.innerHTML = btn.classList.contains('open') ? '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg> 💡 Hide Guidance' : '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg> 💡 Show Guidance';
}

/* ─────────────────────────────────────────────
   SOLVED TRACKING
───────────────────────────────────────────── */
function toggleSolved(btn, id, chKey) {
  var card = btn.closest('.card');
  var set = solvedIds[chKey];
  if (set.has(id)) {
    set.delete(id);
    card.classList.remove('solved');
    btn.classList.remove('solved');
    btn.innerHTML = '<span>✓</span> Mark as Solved';
  } else {
    set.add(id);
    card.classList.add('solved');
    btn.classList.add('solved');
    btn.innerHTML = '<span>🎉</span> Solved!';
  }
  updateProgress();
  saveSolvedToStorage();
}

function updateProgress() {
  var d1 = ch1.filter(function (p) { return solvedIds.ch1.has(p.id); }).length, t1 = ch1.length;
  var d2 = ch2.filter(function (p) { return solvedIds.ch2.has(p.id); }).length, t2 = ch2.length;
  var d3 = ch3.filter(function (p) { return solvedIds.ch3.has(p.id); }).length, t3 = ch3.length;
  var d4 = ch4.filter(function (p) { return solvedIds.ch4.has(p.id); }).length, t4 = ch4.length;
  var d5 = typeof ch5 !== 'undefined' ? ch5.filter(function (p) { return solvedIds.ch5.has(p.id); }).length : 0;
  var t5 = typeof ch5 !== 'undefined' ? ch5.length : 0;
  document.getElementById('ch1-prog-text').textContent = d1 + ' / ' + t1 + ' solved';
  document.getElementById('ch1-prog-fill').style.width = (t1 ? Math.min(1, d1 / t1) * 100 : 0) + '%';
  document.getElementById('ch2-prog-text').textContent = d2 + ' / ' + t2 + ' solved';
  document.getElementById('ch2-prog-fill').style.width = (t2 ? Math.min(1, d2 / t2) * 100 : 0) + '%';
  document.getElementById('ch3-prog-text').textContent = d3 + ' / ' + t3 + ' solved';
  document.getElementById('ch3-prog-fill').style.width = (t3 ? Math.min(1, d3 / t3) * 100 : 0) + '%';
  var ch4ProgText = document.getElementById('ch4-prog-text');
  var ch4ProgFill = document.getElementById('ch4-prog-fill');
  if (ch4ProgText) ch4ProgText.textContent = d4 + ' / ' + t4 + ' solved';
  if (ch4ProgFill) ch4ProgFill.style.width = (t4 ? Math.min(1, d4 / t4) * 100 : 0) + '%';
  var ch5ProgText = document.getElementById('ch5-prog-text');
  var ch5ProgFill = document.getElementById('ch5-prog-fill');
  if (ch5ProgText) ch5ProgText.textContent = d5 + ' / ' + t5 + ' solved';
  if (ch5ProgFill) ch5ProgFill.style.width = (t5 ? Math.min(1, d5 / t5) * 100 : 0) + '%';
  document.getElementById('total-count').textContent = d1 + d2 + d3 + d4 + d5;
  updateChapter2Lock();
  updateChapter3Lock();
  updateChapter4Lock();
  updateChapter5Lock();
  renderCh5Grid();
}

loadProblems();
