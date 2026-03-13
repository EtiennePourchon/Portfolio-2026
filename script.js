/* global gsap, ScrollTrigger */

// SECTION: Translations -------------------------------------------------
const translations = {
	en: {
	  "nav.hero": "Home",
	  "nav.about": "About",
	  "nav.projects": "Projects",
	  "nav.skills": "Skills",
	  "nav.playground": "Playground",
	  "nav.contact": "Contact",
  
	  "hero.eyebrow": "Hello, I'm",
	  "hero.subtitle":
		"I'm a Junior Fullstack developer, from frontend interactions to backend APIs, I can build complete web solutions, working with modern stacks to deliver apps that are scalable, maintainable, and ready for users.",
	  "hero.cv": "My CV",
	  "hero.ctaPrimary": "View projects",
	  "hero.ctaSecondary": "Try the playground",
	  "hero.meta": "Quick. Fluid. Interactive. Everything on this page is wired with motion.",
	  "hero.status": "Available for internships & small projects",
	  "hero.microCta": "Pulse the card",
  
	  "about.title": "About me",
	  "about.kicker": "A junior profile focused on interactions and clean code.",
	  "about.whoTitle": "Who I am",
	  "about.whoBody":
		"I'm a junior Fullstack developer who enjoys creating responsive and accessible animated interfaces using HTML, CSS, and JavaScript, but who can also work with PHP and create/maintain SQL database.",
	  "about.howTitle": "How I work",
	  "about.howBody":
		"I like to start small, ship quickly something that can be worked with, then polish the experience with smooth micro-interactions powered by modern JS and animation libraries.",

	 //Temporary Border
	 "border.title": "UNDER REVIEW",
	 "border.maintext": "AREA UNDER CONSTRUCTION — PROJECTS WILL BE ADDED INSTEAD OF PLACEHOLDERS",
	 "border.text.1": "UNDER REWORK",
	 "border.text.2": "RESTRICTED ACCESS",
	 "border.text.3": "AREA TO COMPLETE",
	 "border.text.4": "PLACEHOLDERS",
  
	  "projects.title": "Selected projects",
	  "projects.kicker": "A few examples of what I can build.",
	  "projects.items.0.tag": "Landing page",
	  "projects.items.0.title": "Animated product launch page",
	  "projects.items.0.body":
		"Single-page layout with smooth scroll, section reveals, and a small interaction playground for feature demos.",
	  "projects.items.0.tech": "HTML • CSS Grid • GSAP • Vanilla JS",
  
	  "projects.items.1.tag": "Mini app",
	  "projects.items.1.title": "Task tracker with micro-animations",
	  "projects.items.1.body":
		"A lightweight task list where each action (add, complete, delete) is confirmed with quick, satisfying animation.",
	  "projects.items.1.tech": "HTML • CSS • JavaScript",
  
	  "projects.items.2.tag": "Sandbox",
	  "projects.items.2.title": "Interaction playground",
	  "projects.items.2.body":
		"A collection of hover effects, buttons, and tiny JS games to experiment with web motion.",
	  "projects.items.2.tech": "HTML • CSS • GSAP",
  
	  "skills.title": "Skills",
	  "skills.kicker": "The technologies and qualities I bring to a project.",
	  "skills.allTitle": "Fundamentals",
	  "skills.toolsTitle": "Tools",
	  "skills.softTitle": "Soft skills",
	  "skills.soft.0": "Curious and always learning",
	  "skills.soft.1": "Communicates clearly",
	  "skills.soft.2": "Cares about details",
  
	  "playground.title": "Playground & services",
	  "playground.kicker": "A tiny game plus an overview of what I can do for you.",
	  "playground.sandboxTitle": "Click-orbit micro game",
	  "playground.reset": "Reset score",
	  "playground.instructions":
		"Tap the button as it jumps around the sandbox. Fast, responsive motion shows how I think about playful UI.",
  
	  "services.title": "Services",
	  "services.intro": "As a junior Fullstack developer I can help you with:",
	  "services.items.0.title": "Landing pages that feel alive",
	  "services.items.0.body":
		"Building modern, responsive pages with scroll animations, hover effects, and clear calls to action.",
	  "services.items.1.title": "Front-end integration",
	  "services.items.1.body":
		"Translating Figma or design mockups into clean, maintainable HTML/CSS/JS.",
	  "services.items.2.title": "Back-end maintenance",
	  "services.items.2.body":
		"Making sure the data is properly ordered, displayed and take care of the documentation for each SQL request",
  
	  "contact.title": "Contact",
	  "contact.kicker": "Tell me about your idea, internship, or project.",
	  "contact.form.nameLabel": "Name",
	  "contact.form.emailLabel": "Email",
	  "contact.form.messageLabel": "Message",
	  "contact.form.submit": "Send message (demo)",
	  "contact.form.hint": "This is a demo form due to GitHub Pages restrictions with PHP, you can also contact me directly via email.",
	  "contact.asideTitle": "Prefer email?",
	  "contact.asideBody":
		"Feel free to send me a message with a short description of your needs and timing.",
  
	  "footer.copy": "Etienne POURCHON portfolio.",
	  "footer.made": "Built with HTML, CSS, JavaScript and a lot of motion.",
	},
	fr: {
	  "nav.hero": "Accueil",
	  "nav.about": "À propos",
	  "nav.projects": "Projets",
	  "nav.skills": "Compétences",
	  "nav.playground": "Playground",
	  "nav.contact": "Contact",
  
	  "hero.eyebrow": "Bonjour, je suis",
	  "hero.subtitle":
		"Je suis un développeur Fullstack junior ; des interactions frontend aux API backend, je peux créer des solutions web complètes, en utilisant des technologies modernes pour fournir des applications évolutives, maintenables et prêtes à l’emploi.",
	  "hero.cv": "Mon CV",
	  "hero.ctaPrimary": "Voir les projets",
	  "hero.ctaSecondary": "Tester le playground",
	  "hero.meta":
		"Rapide. Fluide. Interactif. Chaque élément de cette page est animé.",
	  "hero.status": "Disponible pour stages et petits projets",
	  "hero.microCta": "Faire pulser la carte",
  
	  "about.title": "À propos",
	  "about.kicker": "Un profil junior orienté interaction et code propre.",
	  "about.whoTitle": "Qui je suis",
	  "about.whoBody":
		"Je suis un développeur Fullstack junior qui aime créer des interfaces animées réactives et accessibles en utilisant HTML, CSS et JavaScript, mais qui peut également travailler avec PHP et créer/maintenir des bases de données SQL.",
	  "about.howTitle": "Ma façon de travailler",
	  "about.howBody":
		"Je commence petit, je livre rapidement une app qui peut être utilisé, puis j'améliore l'expérience avec des micro-interactions fluides grâce aux bibliothèques modernes.",
  
	 //Banderole Temporaire
	 "border.title": "EN REVISION",
	 "border.maintext": "ZONE EN CONSTRUCTION — DES PROJETS SERONT AJOUTES ET NON DES PLACEHOLDERS",
	 "border.text.1": "SOUS REFONTE",
	 "border.text.2": "ACCÈS RESTRAINT",
	 "border.text.3": "ZONE A COMPLETER",
	 "border.text.4": "PLACEHOLDERS",

	  "projects.title": "Projets sélectionnés",
	  "projects.kicker": "Quelques exemples de ce que je peux réaliser.",
	  "projects.items.0.tag": "Landing page",
	  "projects.items.0.title": "Page de lancement animée",
	  "projects.items.0.body":
		"Une page simple avec défilement fluide, révélations de sections et une zone d'interaction pour présenter les fonctionnalités.",
	  "projects.items.0.tech": "HTML • CSS Grid • GSAP • Vanilla JS",
  
	  "projects.items.1.tag": "Mini app",
	  "projects.items.1.title": "Liste de tâches animée",
	  "projects.items.1.body":
		"Une petite application où chaque action (ajouter, terminer, supprimer) est confirmée par une animation rapide et agréable.",
	  "projects.items.1.tech": "HTML • CSS • JavaScript",
  
	  "projects.items.2.tag": "Sandbox",
	  "projects.items.2.title": "Playground d'interactions",
	  "projects.items.2.body":
		"Une collection d'effets au survol, de boutons et de mini-jeux JS pour expérimenter le mouvement.",
	  "projects.items.2.tech": "HTML • CSS • GSAP",
  
	  "skills.title": "Compétences",
	  "skills.kicker": "Les technologies et qualités que j'apporte.",
	  "skills.allTitle": "Fondamentaux",
	  "skills.toolsTitle": "Outils",
	  "skills.softTitle": "Qualités humaines",
	  "skills.soft.0": "Curieux et en apprentissage constant",
	  "skills.soft.1": "Communication claire",
	  "skills.soft.2": "Sens du détail",
  
	  "playground.title": "Playground & services",
	  "playground.kicker": "Un mini-jeu et un aperçu de ce que je peux faire pour vous.",
	  "playground.sandboxTitle": "Micro-jeu d'orbite",
	  "playground.reset": "Réinitialiser le score",
	  "playground.instructions":
		"Tapez sur le bouton pendant qu'il se déplace dans la zone. Un mouvement rapide et réactif, comme j'aime le faire pour les interfaces.",
  
	  "services.title": "Services",
	  "services.intro": "En tant que webmaster / développeur web junior, je peux vous aider avec :",
	  "services.items.0.title": "Landing pages vivantes",
	  "services.items.0.body":
		"Création de pages modernes et responsives avec animations au défilement, effets au survol et appels à l'action clairs.",
	  "services.items.1.title": "Intégration front-end",
	  "services.items.1.body":
		"Traduction de maquettes (Figma, etc.) en HTML/CSS/JS propre et maintenable.",
	  "services.items.2.title": "Maintenance du back-end",
	  "services.items.2.body":
		"S'assurer que les données sont correctement ordonnées et affichées, et veiller à la documentation de chaque requête SQL.",
  
	  "contact.title": "Contact",
	  "contact.kicker": "Parlez-moi de votre idée, stage ou projet.",
	  "contact.form.nameLabel": "Nom",
	  "contact.form.emailLabel": "Email",
	  "contact.form.messageLabel": "Message",
	  "contact.form.submit": "Envoyer (démo)",
	  "contact.form.hint": "Ce formulaire est une démo dû aux restrictions de GitHub Pages avec PHP, vous pouvez aussi me contacter directement par email.",
	  "contact.asideTitle": "Plutôt email ?",
	  "contact.asideBody":
		"Envoyez-moi un message avec une courte description de votre besoin et de vos délais.",
  
	  "footer.copy": "Portfolio de Etienne POURCHON.",
	  "footer.made": "Réalisé avec HTML, CSS, JavaScript et beaucoup d'animations.",
	},
  };
  
  let currentLang = "en";
  
  function applyTranslations(lang) {
	const dict = translations[lang];
	if (!dict) return;
  
	document.querySelectorAll("[data-i18n]").forEach((el) => {
	  const key = el.getAttribute("data-i18n");
	  const value = dict[key];
	  if (typeof value === "string") {
		el.textContent = value;
	  }
	});
  }
  
  // SECTION: Language toggle ----------------------------------------
  function initLanguageToggle() {
	const buttons = document.querySelectorAll(".lang-btn");
	buttons.forEach((btn) => {
	  btn.addEventListener("click", () => {
		const lang = btn.getAttribute("data-lang");
		if (lang === currentLang) return;
		currentLang = lang;
		buttons.forEach((b) => b.classList.toggle("is-active", b === btn));
		applyTranslations(lang);
	  });
	});
  }
  
  // SECTION: Navigation toggle (mobile) -----------------------------
  function initNavToggle() {
	const toggle = document.querySelector(".nav-toggle");
	const navList = document.querySelector(".nav-list");
	if (!toggle || !navList) return;
  
	toggle.addEventListener("click", () => {
	  navList.classList.toggle("is-open");
	});
  
	navList.querySelectorAll("a").forEach((link) => {
	  link.addEventListener("click", () => {
		navList.classList.remove("is-open");
	  });
	});
  }

  //SECTION: WIP animation
  function initWIP() {
	document.querySelectorAll('.ticker').forEach(ticker=>{
	const parentW = ticker.parentElement.offsetWidth;
	let totalW = ticker.scrollWidth;
	const items = [...ticker.children];
	let i=0;
	while(totalW < parentW*3){
		ticker.appendChild(items[i%items.length].cloneNode(true));
		totalW = ticker.scrollWidth;
		i++; if(i>200)break;
	}
	const base=parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--speed'))||14;
	const scale=Math.max(1,totalW/parentW);
	const dur=base*scale;
	const animName=ticker.closest('.band').classList.contains('top')?'scroll-right':'scroll-left';
	ticker.style.animation=`${animName} ${dur}s linear infinite`;
	});
  }
  
  // SECTION: GSAP animations ----------------------------------------
  function initAnimations() {
	if (window.gsap && window.ScrollTrigger) {
	  gsap.registerPlugin(ScrollTrigger);
  
	  // Fade-up for each section
	  gsap.utils.toArray("[data-animate='fade-up']").forEach((el) => {
		gsap.fromTo(
		  el,
		  { opacity: 0, y: 18 },
		  {
			opacity: 1,
			y: 0,
			duration: 0.55,
			ease: "power2.out",
			scrollTrigger: {
			  trigger: el,
			  start: "top 80%",
			  toggleActions: "play none none reverse",
			},
		  }
		);
	  });
  
	  // Floating hero card idle loop
	  const floatEl = document.querySelector("[data-animate='float']");
	  if (floatEl) {
		gsap.to(floatEl, {
		  y: -10,
		  duration: 2.4,
		  ease: "sine.inOut",
		  repeat: -1,
		  yoyo: true,
		});
	  }
	}
  }
  
  // SECTION: Hero micro interaction --------------------------------
  function initHeroMicroInteraction() {
	const btn = document.getElementById("heroPulseBtn");
	const card = document.querySelector(".hero-orbit-card");
	if (!btn || !card || !window.gsap) return;
  
	btn.addEventListener("click", () => {
	  gsap.fromTo(
		card,
		{ scale: 1, boxShadow: "0 25px 80px rgba(72,0,140,0.8)" },
		{
		  scale: 1.04,
		  boxShadow: "0 40px 120px rgba(192,132,252,0.95)",
		  duration: 0.22,
		  yoyo: true,
		  repeat: 1,
		  ease: "power1.out",
		}
	  );
	});
  }
  
  // SECTION: Sandbox micro game ------------------------------------
  function initSandboxGame() {
	const target = document.getElementById("orbitTarget");
	const area = document.getElementById("sandboxArea");
	const scoreEl = document.getElementById("orbitScore");
	const resetBtn = document.getElementById("sandboxResetBtn");
	if (!target || !area || !scoreEl || !resetBtn) return;
  
	let score = 0;
	let clicks = 0;
  
	function updateScore() {
	  scoreEl.textContent = `${score} points • ${clicks} taps`;
	}
  
	function randomMove() {
	  if (!window.gsap) return;
	  const bounds = area.getBoundingClientRect();
	  const padding = 40;
	  const x = Math.random() * (bounds.width - padding * 2) + padding;
	  const y = Math.random() * (bounds.height - padding * 2) + padding;
  
	  gsap.to(target, {
		x: x - bounds.width / 2,
		y: y - bounds.height / 2,
		duration: 0.25,
		ease: "power2.out",
	  });
	}
  
	target.addEventListener("click", () => {
	  score += 10;
	  clicks += 1;
	  updateScore();
  
	  if (window.gsap) {
		gsap.fromTo(
		  target,
		  { scale: 1 },
		  { scale: 1.15, duration: 0.12, yoyo: true, repeat: 1, ease: "power1.out" }
		);
	  }
  
	  randomMove();
	});
  
	resetBtn.addEventListener("click", () => {
	  score = 0;
	  clicks = 0;
	  updateScore();
	  if (window.gsap) {
		gsap.to(target, {
		  x: 0,
		  y: 0,
		  duration: 0.3,
		  ease: "power2.out",
		});
	  }
	});
  
	updateScore();
  }
  
  // SECTION: Form demo feedback ------------------------------------
  function initFormDemo() {
	const form = document.querySelector(".contact-form");
	if (!form || !window.gsap) return;
  
	form.addEventListener("submit", (event) => {
	  event.preventDefault();
	  const button = form.querySelector("button[type='submit']");
	  if (!button) return;
  
	  const original = button.textContent;
	  button.disabled = true;
  
	  gsap.to(button, {
		scale: 0.97,
		duration: 0.12,
		yoyo: true,
		repeat: 1,
		onComplete: () => {
		  button.textContent = currentLang === "fr" ? "Message simulé !" : "Message simulated!";
		  gsap.to(button, {
			backgroundColor: "#22c55e",
			color: "#020617",
			duration: 0.25,
			yoyo: true,
			repeat: 1,
			repeatDelay: 0.7,
			onComplete: () => {
			  button.textContent = original;
			  button.disabled = false;
			},
		  });
		},
	  });
	});
  }
  
  // INIT ------------------------------------------------------------
  document.addEventListener("DOMContentLoaded", () => {
	applyTranslations(currentLang);
	initLanguageToggle();
	initNavToggle();
	initWIP();
	initAnimations();
	initHeroMicroInteraction();
	initSandboxGame();
	initFormDemo();
  });
  
