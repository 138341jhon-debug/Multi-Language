

(function () {
  'use strict';

  const MEMBER_NAMES = {
    B: { en: 'Wei Jitao', ms: 'Wei Jitao', zh: '卫纪韬', ta: 'Wei Jitao', jawi: 'Wei Jitao' }
  };;

  const TOOLTIPS = {
  "w1-2": {
    "B": {
      "en": "Research framing and methods training completed.",
      "ms": "Penyediaan kajian dan latihan kaedah selesai.",
      "zh": "完成研究设计与方法训练。",
      "ta": "ஆய்வு வடிவமைப்பு மற்றும் முறைகள் பயிற்சி நிறைவு.",
      "jawi": "کاجين دان لاتيهن كايده مڽياڤكن."
    }
  },
  "w7-cs1": {
    "B": {
      "en": "Project proposal and first case study completed.",
      "ms": "Cadangan projek dan kajian kes pertama selesai.",
      "zh": "完成项目方案与第一项案例研究。",
      "ta": "திட்ட முன்மொழிவு மற்றும் முதல் வழக்கு ஆய்வு நிறைவு.",
      "jawi": "چادڠن ڤروجيك دان كاجين كيس ڤرتام مڽياڤكن."
    }
  },
  "w8-10": {
    "B": {
      "en": "Literature review, field protocol and data schema completed.",
      "ms": "Sorotan literatur, protokol lapangan dan skema data selesai.",
      "zh": "完成文献梳理、田野方案与数据表结构。",
      "ta": "இலக்கிய ஆய்வு, கள நெறிமுறை, தரவு வடிவம் நிறைவு.",
      "jawi": "سوروتن ليتراتور، ڤروتوكول لاڤڠن دان سكيما داتا."
    }
  },
  "may20-cs2": {
    "B": {
      "en": "Second case study completed.",
      "ms": "Kajian kes kedua selesai.",
      "zh": "完成第二项案例研究。",
      "ta": "இரண்டாவது வழக்கு ஆய்வு நிறைவு.",
      "jawi": "كاجين كيس كدوا مڽياڤكن."
    }
  },
  "w11-fieldwork": {
    "B": {
      "en": "Personally documented 60 signs across four districts.",
      "ms": "Mendokumentasikan sendiri 60 papan tanda di empat daerah.",
      "zh": "独立完成四区 60 块招牌采集。",
      "ta": "நான்கு மாவட்டங்களில் 60 பலகைகளைத் தனியாக ஆவணப்படுத்தினார்.",
      "jawi": "مندوقومنتاسيكن ٦٠ ڤاڤن تندا د امڤت دائره."
    }
  },
  "may31-phase1": {
    "B": {
      "en": "Initial website concept and visual baseline completed.",
      "ms": "Konsep awal dan asas visual laman web selesai.",
      "zh": "完成网站初步概念与视觉基线。",
      "ta": "இணையதள ஆரம்பக் கருத்து மற்றும் காட்சி அடித்தளம் நிறைவு.",
      "jawi": "كونسيڤ اڤل لامن ويب دان اساس ۏيجوال مڽياڤكن."
    }
  },
  "w12a-integration": {
    "B": {
      "en": "Research data integrated and five-language website developed.",
      "ms": "Data kajian disepadukan dan laman web lima bahasa dibangunkan.",
      "zh": "完成资料整合与五语网站开发。",
      "ta": "ஆய்வு தரவு ஒருங்கிணைக்கப்பட்டு ஐந்து மொழி தளம் உருவாக்கப்பட்டது.",
      "jawi": "داتا كاجين دڤادوكان دان لامن ويب ليما بهاس دباڠونكن."
    }
  },
  "w12b-testing": {
    "B": {
      "en": "Content and interactions reviewed; final refinements completed.",
      "ms": "Kandungan dan interaksi disemak; penambahbaikan akhir selesai.",
      "zh": "检查内容与交互并完成最终修订。",
      "ta": "உள்ளடக்கம் மற்றும் செயல்பாடுகள் சரிபார்த்து இறுதி மேம்பாடு நிறைவு.",
      "jawi": "كاندوڠن دان انتراقسي دسمق؛ ڤمبايقن اخير مڽياڤكن."
    }
  },
  "end": {
    "B": {
      "en": "Final website submitted June 8; project presented June 10.",
      "ms": "Laman web diserahkan 8 Jun; projek dibentangkan 10 Jun.",
      "zh": "6 月 8 日提交网站；6 月 10 日展示项目。",
      "ta": "ஜூன் 8 இணையதளம் சமர்ப்பிப்பு; ஜூன் 10 திட்ட விளக்கம்.",
      "jawi": "٨ جون لامن ويب دسرهكن؛ ١٠ جون ڤروجيك دڤربنتڠكن."
    }
  }
};;

  function getCurrentLang() {
    return document.documentElement.getAttribute('data-lang') || 'en';
  }

  function getTooltipText(node, member) {
    const lang = getCurrentLang();
    const nodeData = TOOLTIPS[node];
    if (!nodeData || !nodeData[member]) return '';
    return nodeData[member][lang] || nodeData[member].en || '';
  }

  function getMemberName(member) {
    const lang = getCurrentLang();
    return MEMBER_NAMES[member][lang] || MEMBER_NAMES[member].en;
  }

  const tooltipEl = document.getElementById('member-tooltip');
  const tooltipName = tooltipEl ? tooltipEl.querySelector('.tooltip-name') : null;
  const tooltipDesc = tooltipEl ? tooltipEl.querySelector('.tooltip-desc') : null;

  function showTooltip(marker, evt) {
    if (!tooltipEl) return;
    const node = marker.closest('.node-markers').dataset.node;
    const member = marker.dataset.member;
    tooltipName.textContent = getMemberName(member);
    tooltipDesc.textContent = getTooltipText(node, member);

    const wrap = document.getElementById('river-wrap');
    const wrapRect = wrap.getBoundingClientRect();
    const markerRect = marker.getBoundingClientRect();

    let left = markerRect.right - wrapRect.left + 8;
    let top  = markerRect.top   - wrapRect.top  - 4;

    tooltipEl.hidden = false;
    requestAnimationFrame(() => {
      const tipRect = tooltipEl.getBoundingClientRect();
      if (left + tipRect.width > wrap.offsetWidth - 8) {
        left = markerRect.left - wrapRect.left - tipRect.width - 8;
      }
      if (top < 4) top = 4;
      if (top + tipRect.height > wrap.offsetHeight - 4) {
        top = wrap.offsetHeight - tipRect.height - 4;
      }
      tooltipEl.style.left = left + 'px';
      tooltipEl.style.top  = top + 'px';
    });
  }

  function hideTooltip() {
    if (tooltipEl) tooltipEl.hidden = true;
  }

  let tracedMember = null;
  const traceBanner = document.getElementById('trace-banner');
  const traceBannerName = traceBanner ? traceBanner.querySelector('.trace-banner-name') : null;

  function enterTrace(member) {
    tracedMember = member;
    document.body.classList.add('trace-mode');

    document.querySelectorAll('.marker').forEach(m => {
      if (m.dataset.member === member) {
        m.classList.add('trace-active');
      } else {
        m.classList.remove('trace-active');
      }
    });

    document.querySelectorAll('.node-label').forEach(label => {
      const node = label.dataset.node;
      const markerGroup = document.querySelector(`.node-markers[data-node="${node}"]`);
      if (!markerGroup) return;
      const memberMarker = markerGroup.querySelector(`.marker[data-member="${member}"]`);
      const participated = memberMarker && memberMarker.dataset.participated === 'true';
      if (!participated) {
        label.classList.add('trace-untouched');
      } else {
        label.classList.remove('trace-untouched');
      }
    });

    if (traceBanner) {
      traceBannerName.textContent = getMemberName(member);
      traceBanner.hidden = false;
    }
  }

  function exitTrace() {
    tracedMember = null;
    document.body.classList.remove('trace-mode');
    document.querySelectorAll('.marker.trace-active').forEach(m => m.classList.remove('trace-active'));
    document.querySelectorAll('.node-label.trace-untouched').forEach(l => l.classList.remove('trace-untouched'));
    if (traceBanner) traceBanner.hidden = true;
  }

  function refreshTraceLabels() {
    if (tracedMember && traceBannerName) {
      traceBannerName.textContent = getMemberName(tracedMember);
    }
  }

  document.querySelectorAll('.marker').forEach(marker => {
    marker.setAttribute('tabindex', '0');
    marker.setAttribute('role', 'button');

    marker.addEventListener('mouseenter', (e) => showTooltip(marker, e));
    marker.addEventListener('mouseleave', hideTooltip);
    marker.addEventListener('focus', (e) => showTooltip(marker, e));
    marker.addEventListener('blur', hideTooltip);

    marker.addEventListener('click', (e) => {
      e.stopPropagation();
      const member = marker.dataset.member;
      if (tracedMember === member) {
        exitTrace();
      } else {
        enterTrace(member);
      }
    });

    marker.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        e.stopPropagation();
        const member = marker.dataset.member;
        if (tracedMember === member) exitTrace();
        else enterTrace(member);
      } else if (e.key === 'Escape' && tracedMember) {
        exitTrace();
      }
    });
  });

  document.addEventListener('click', (e) => {
    if (!tracedMember) return;
    if (e.target.closest('.marker') ||
        e.target.closest('.trace-banner') ||
        e.target.closest('.member-chip')) return;
    exitTrace();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && tracedMember) exitTrace();
  });

  const reveal = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add('revealed');
      const node = e.target.dataset.node;
      if (node) {
        const markerGroup = document.querySelector(`.node-markers[data-node="${node}"]`);
        if (markerGroup) markerGroup.classList.add('revealed');
      }
      reveal.unobserve(e.target);
    });
  }, {
    threshold: 0.2,
    rootMargin: '0px 0px -10% 0px'   // trigger when element enters upper 90% of viewport
  });

  document.querySelectorAll('.node-label').forEach(el => reveal.observe(el));

  window.addEventListener('load', () => {
    const svg = document.querySelector('.timeline-river');
    if (svg) svg.classList.add('loaded');
  });

  function syncChipStates() {
    const activeMarker = document.body.classList.contains('trace-mode')
      ? document.querySelector('.marker.trace-active')
      : null;
    const activeMember = activeMarker ? activeMarker.dataset.member : null;
    document.querySelectorAll('.member-chip').forEach(chip => {
      chip.classList.toggle('active', chip.dataset.member === activeMember);
    });
  }

  const traceClassObserver = new MutationObserver(syncChipStates);
  traceClassObserver.observe(document.body, { attributes: true, attributeFilter: ['class'] });

  document.querySelectorAll('.member-chip').forEach(chip => {
    chip.addEventListener('click', (e) => {
      e.stopPropagation();
      const member = chip.dataset.member;
      if (tracedMember === member) {
        exitTrace();
      } else {
        enterTrace(member);
      }
    });
  });

  document.querySelectorAll('.node-label').forEach(label => {
    label.addEventListener('mouseenter', () => {
      const node = label.dataset.node;
      const cluster = document.querySelector(`.node-markers[data-node="${node}"]`);
      if (cluster) cluster.classList.add('node-hover-active');
    });
    label.addEventListener('mouseleave', () => {
      const node = label.dataset.node;
      const cluster = document.querySelector(`.node-markers[data-node="${node}"]`);
      if (cluster) cluster.classList.remove('node-hover-active');
    });
  });

  const langObserver = new MutationObserver(() => {
    refreshTraceLabels();
    hideTooltip(); // close any stale tooltip
  });
  langObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-lang']
  });

})();

