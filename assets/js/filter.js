(function () {
  const tabs = document.querySelectorAll('.research-tab');
  const panel = document.getElementById('thesis-panel');
  const panelTitle = document.getElementById('panel-title');
  const panelIntro = document.getElementById('panel-intro');
  const topicList = document.getElementById('topic-list');

  const clusters = {
    trustworthy: {
      title: 'Trustworthy, Fair & Responsible AI',
      intro: 'Topics at the intersection of Trustworthy AI, fairness, bias mitigation, explainability and reliable decision-making.',
      topics: [
        { title: 'Fair AI for Images and Multimodal Systems', summary: 'Develop practical tools for identifying and mitigating bias in image-text data and text-to-image retrieval models.', chips: ['Fairness', 'Computer Vision', 'Multimodal AI', 'Bias Mitigation'], types: ['Project', 'Master’s Thesis'], details: ['Image–text data statistical bias mitigation.', 'Bias mitigation in text-to-image retrieval models.'] },
        { title: 'Predictive Selection of Dental Devices', summary: 'Develop predictive models from physiological signals collected during sleep, with attention to reliability, clinical validity and fairness.', chips: ['Machine Learning', 'Deep Learning', 'Anomaly Detection', 'Fairness', 'Clinical Data'], types: ['Project'], details: ['Analyse links between sleep disorders, dental health and respiratory conditions.', 'Assess potential bias in data collection and model decisions across patient groups.', 'Evaluate fairness of treatment recommendations.'] }
      ]
    },
    civic: {
      title: 'Civic & Human-Centered AI',
      intro: 'AI and optimisation for sustainable, fair and inclusive cities, using real-world data and decision-support methods.',
      topics: [
        { title: 'Designing Sustainable Cities through Digital Twins', summary: 'Planning and decision support for sustainable urban design using real-world data from the Bologna City Digital Twin.', chips: ['Digital Twins', 'GIS', 'Planning', 'Routing', 'Machine Learning'], types: ['Project'], details: ['Optimise placement of green cells under cost, feasibility and accessibility constraints.', 'Optimise composite objectives such as coverage and sustainability.', 'Identify optimal routes for citizens using existing and planned infrastructure.', 'Study robustness of optimisation models and planners under noise.'] },
        { title: 'Civic Digital Twins', summary: 'Combine geographical, environmental and socio-demographic information to study the effects of urban policies on different social groups.', chips: ['Civic Digital Twin', 'Fairness', 'GIS', 'Machine Learning', 'Planning'], types: ['Project'], details: ['Model how housing, mobility and district-planning policies affect different social groups.', 'Analyse distributional impacts across population groups and geographical areas.', 'Explore methods to mitigate unequal impacts and increase equity and fairness.'] },
        { title: 'Pharmacy Shift Scheduling in Bologna', summary: 'Design an optimisation framework for pharmacy scheduling with particular attention to night shifts, workers’ rights and equitable service across the city.', chips: ['Optimisation', 'Fairness', 'Scheduling', 'Real Data'], types: ['Project'], details: ['Define fairness policies for workload distribution and workers’ rights.', 'Study socio-demographic diversity across Bologna areas.', 'Balance operational constraints with social and community objectives.'] }
      ]
    },
    agentic: {
      title: 'Agentic & Reasoning AI',
      intro: 'Research on LLM reasoning, planning and agentic systems, connecting data-driven models with explicit reasoning and verification.',
      topics: [
        { title: 'Reasoning and Planning with LLMs', summary: 'Evaluate large language models on planning and related reasoning tasks where formal methods provide strong baselines.', chips: ['LLMs', 'Planning', 'Reasoning', 'Evaluation'], types: ['Project', 'Internship'], details: ['Test LLMs on planning and related reasoning tasks.', 'Compare performance with state-of-the-art planning or reasoning methods.', 'Study failure modes and reliability of generated plans and reasoning steps.'] },
        { title: 'Reliable Agentic AI', summary: 'Study how autonomous or agentic AI systems can be evaluated and engineered to behave reliably when interacting with tools, environments and other agents.', chips: ['Agentic AI', 'Reliability', 'Evaluation', 'Multi-Agent Systems', 'Trustworthy AI'], types: ['Project', 'Master’s Thesis'], details: ['Define evaluation protocols for reliability and consistency of agent behaviour.', 'Analyse failures, uncertainty and unsafe or unsupported agent decisions.', 'Explore verification, monitoring and human-oversight mechanisms.'] }
      ]
    },
    data: {
      title: 'Data-Centric & Robust AI',
      intro: 'Research on synthetic and real data, transfer learning, data quality and robustness under changing or noisy conditions.',
      topics: [
        { title: 'Synthetic Data Generation for Transfer Learning', summary: 'Quantify the relationship between source–target domain distance in transfer learning and explore whether synthetic data can bridge the gap to real-world scenarios.', chips: ['Synthetic Data', 'Transfer Learning', 'Deep Learning', 'Industrial Data'], types: ['Project'], details: ['Quantitatively measure source–target domain distance.', 'Generate synthetic data designed to reduce that gap.', 'Evaluate whether synthetic augmentation improves transfer to real industrial data.'] }
      ]
    },
    efficient: {
      title: 'Efficient & Sustainable AI',
      intro: 'Efficient AI through smaller models, compression and resource-aware learning, with attention to the effects on reliability and trustworthiness.',
      topics: [
        { title: 'Small Models: Compression and Trustworthiness', summary: 'Investigate model compression and smaller AI models, studying the trade-offs between efficiency and model quality.', chips: ['Small Models', 'Compression', 'Efficiency', 'Trustworthiness'], types: ['Project', 'Master’s Thesis'], details: ['Compare compression strategies and their impact on model performance.', 'Study efficiency versus reliability, robustness or fairness.', 'Explore resource-aware approaches to trustworthy AI.'] }
      ]
    }
  };

  function renderCluster(name) {
    const cluster = clusters[name];
    if (!cluster) return;

    panelTitle.textContent = cluster.title;
    panelIntro.textContent = cluster.intro;
    topicList.innerHTML = cluster.topics.map((topic) => `
      <article class="topic-card">
        <div class="topic-main">
          <div class="topic-kicker">Thesis / Internship topic</div>
          <h3>${topic.title}</h3>
          <p>${topic.summary}</p>
          <div class="chips">${topic.chips.map((chip) => `<span>${chip}</span>`).join('')}</div>
        </div>
        <div class="topic-side">
          <h4>Possible directions</h4>
          <ul>${topic.details.map((detail) => `<li>${detail}</li>`).join('')}</ul>
          <div class="project-footer">${topic.types.map((type) => `<span class="badge badge-green">${type}</span>`).join('')}</div>
        </div>
      </article>
    `).join('');

    panel.classList.add('open');
    tabs.forEach((tab) => {
      const active = tab.dataset.cluster === name;
      tab.classList.toggle('active', active);
      tab.setAttribute('aria-expanded', active ? 'true' : 'false');
    });
  }

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => renderCluster(tab.dataset.cluster));
  });

  renderCluster('trustworthy');
})();
