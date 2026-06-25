const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");
const year = document.getElementById("year");
const languageToggle = document.getElementById("languageToggle");
const languageLabel = document.getElementById("languageLabel");

const translations = {
  hu: {
    nav_about: "Rólam",
    nav_stack: "Stack",
    nav_projects: "Projektek",
    nav_journey: "Útvonal",
    nav_contact: "Kapcsolat",

    hero_kicker: "Data Analyst Engineer • Game Analytics • IoT",
    hero_headline:
      "Adatokból döntések. Játékfejlesztésből élmény. Technológiából működő megoldás.",
    hero_copy:
      "Data Analyst Engineer pozícióban dolgozom egy mobiljáték-fejlesztő vállalatnál, emellett végzős mérnökinformatikus hallgató vagyok a magyarországi Neumann János Egyetemen, valamint cserediákként tanulok Finnországban, a Savonia University of Applied Sciences intézményében.",
    hero_projects_btn: "Projektek",
    hero_github_btn: "GitHub profil",

    panel_title: "Portfolio",
    panel_stack: "Python • SQL • C# • Java • Unity • LiveOps • IoT • AI",
    status_work_title: "Jelenleg dolgozom",
    status_work_text: "Data Analyst Engineer",
    status_finland_title: "Finnországi tanulmányok",
    status_finland_text: "Savonia UAS, Kuopio",
    status_trainee_title: "2026 szeptember",
    status_trainee_text: "IoT & robotprogramozás traineeship",
    scroll_hint: "Görgess tovább",

    about_kicker: "Rólam",
    about_title:
      "Dolgozó mérnökinformatikus hallgató, nemzetközi technológiai fókusszal.",
    about_card_1_title: "Szakmai fókusz",
    about_card_1_p1:
      "Munkám során adatelemzéssel, SQL-lel, Pythonnal, LiveOps folyamatokkal és üzleti döntéstámogatással foglalkozom. Fő területeim közé tartozik a játékosviselkedés, a monetizáció és a termékteljesítmény elemzése.",
    about_card_1_p2:
      "Különösen érdekel az adatelemzés, a mesterséges intelligencia, az IoT technológiák, a játékfejlesztés és a szoftverfejlesztés kapcsolata.",
    about_card_2_title: "Finnország",
    about_card_2_p:
      "Cserediákként Kuopióban tanulok a Savonia University of Applied Sciences intézményében. 2026 szeptemberétől Finnországban kezdem meg szakmai gyakorlatomat IoT rendszerek, robotprogramozás és adatelemzési módszerek területén.",
    about_card_3_title: "Motiváció",
    about_card_3_p:
      "Aktív tagja vagyok a Kenji Team egyetemi motorépítő csapatnak, és több startup versenyen is részt vettem. Szeretek új dolgokat tanulni, kilépni a komfortzónámból, és folyamatosan hajt előre a kíváncsiság.",

    skills_kicker: "Tech stack",
    skills_title: "Eszközök és területek, amelyekkel dolgozom.",
    skill_1_title: "Adat és analitika",
    skill_1_text:
      "SQL, Python, riportok, dashboardok, termékteljesítmény és üzleti döntéstámogatás.",
    skill_2_title: "Game Analytics & LiveOps",
    skill_2_text:
      "Játékosviselkedés, retention, monetizáció, shop cycle és kampányhatások elemzése.",
    skill_3_title: "Fejlesztés",
    skill_3_text:
      "Python, C#, Java, Unity, webes projektek és alkalmazásfejlesztési alapok.",
    skill_4_title: "IoT & smart rendszerek",
    skill_4_text:
      "Szenzorok, automatizálás, robotprogramozás és intelligens technológiák.",

    projects_kicker: "Projektek",
    projects_title: "Kiemelt irányok",
    project_1_title: "Mobiljáték analitika",
    project_1_text:
      "Játékosviselkedés, monetizáció, retention és termékteljesítmény elemzése. Cél: adatvezérelt döntések támogatása és játékosélmény optimalizálása.",
    project_2_title: "Smart Home / IoT rendszer",
    project_2_text:
      "Szenzoradatok, dashboardok, automatizálási logikák és intelligens rendszerek fejlesztése mérnökinformatikai környezetben.",
    project_3_title: "Játék- és alkalmazásfejlesztés",
    project_3_text:
      "Unity és C# alapú fejlesztési tapasztalatok, interaktív megoldások és programozási feladatok készítése.",
    project_4_title: "Kenji Team",
    project_4_text:
      "Egyetemi motorépítő csapatban szerzett mérnöki szemlélet, csapatmunka és gyakorlati problémamegoldás.",

    journey_kicker: "Útvonal",
    journey_title: "Munka, tanulmányok és fejlődés.",
    timeline_now: "Jelenleg",
    timeline_now_2: "Jelenleg",
    timeline_kuopio: "Kuopio",
    timeline_sept: "2026 szeptember",
    timeline_1_text:
      "Mobiljáték-fejlesztő vállalat • Python, SQL, LiveOps, Game Analytics, döntéstámogatás.",
    timeline_2_title: "Neumann János Egyetem",
    timeline_2_text: "Végzős mérnökinformatikus hallgató Magyarországon.",
    timeline_3_text:
      "Cserediák Finnországban • IoT, smart technológiák és nemzetközi szakmai környezet.",
    timeline_4_title: "Traineeship Finnországban",
    timeline_4_text:
      "IoT rendszerek, robotprogramozás és adatelemzési módszerek fejlesztése.",

    contact_kicker: "Kapcsolat",
    contact_title:
      "Nyitott vagyok szakmai kapcsolatokra és új technológiai ötletekre.",
    contact_text:
      "Adatelemzés, AI, IoT, játékfejlesztés, Unity vagy szoftverfejlesztés témában szívesen kapcsolódom.",
    contact_email: "E-mail küldése"
  },

  en: {
    nav_about: "About",
    nav_stack: "Stack",
    nav_projects: "Projects",
    nav_journey: "Journey",
    nav_contact: "Contact",

    hero_kicker: "Data Analyst Engineer • Game Analytics • IoT",
    hero_headline:
      "Turning data into decisions, games into experiences, and technology into working solutions.",
    hero_copy:
      "I currently work as a Data Analyst Engineer at a mobile game development company. I am also a final-year Computer Science Engineering student at John von Neumann University in Hungary, and an exchange student at Savonia University of Applied Sciences in Kuopio, Finland.",
    hero_projects_btn: "Projects",
    hero_github_btn: "GitHub profile",

    panel_title: "Portfolio",
    panel_stack: "Python • SQL • C# • Java • Unity • LiveOps • IoT • AI",
    status_work_title: "Currently working",
    status_work_text: "Data Analyst Engineer",
    status_finland_title: "Studies in Finland",
    status_finland_text: "Savonia UAS, Kuopio",
    status_trainee_title: "September 2026",
    status_trainee_text: "IoT & robotics programming traineeship",
    scroll_hint: "Scroll down",

    about_kicker: "About",
    about_title:
      "Working Computer Science Engineering student with an international technology focus.",
    about_card_1_title: "Professional focus",
    about_card_1_p1:
      "In my work, I focus on data analysis, SQL, Python, LiveOps processes and business decision support. My main areas include player behavior, monetization and product performance analysis.",
    about_card_1_p2:
      "I am especially interested in the connection between data analytics, artificial intelligence, IoT technologies, game development and software development.",
    about_card_2_title: "Finland",
    about_card_2_p:
      "As an exchange student, I study in Kuopio at Savonia University of Applied Sciences. From September 2026, I will start my traineeship in Finland, focusing on IoT systems, robotics programming and analytical methods.",
    about_card_3_title: "Motivation",
    about_card_3_p:
      "I am an active member of the Kenji Team university motorcycle building team and have participated in several startup competitions. I enjoy learning new things, stepping out of my comfort zone, and curiosity constantly drives me forward.",

    skills_kicker: "Tech stack",
    skills_title: "Tools and areas I work with.",
    skill_1_title: "Data & Analytics",
    skill_1_text:
      "SQL, Python, reports, dashboards, product performance and business decision support.",
    skill_2_title: "Game Analytics & LiveOps",
    skill_2_text:
      "Player behavior, retention, monetization, shop cycles and campaign impact analysis.",
    skill_3_title: "Development",
    skill_3_text:
      "Python, C#, Java, Unity, web projects and application development fundamentals.",
    skill_4_title: "IoT & smart systems",
    skill_4_text:
      "Sensors, automation, robotics programming and smart technologies.",

    projects_kicker: "Projects",
    projects_title: "Main focus areas",
    project_1_title: "Mobile Game Analytics",
    project_1_text:
      "Analysis of player behavior, monetization, retention and product performance. Goal: supporting data-driven decisions and optimizing player experience.",
    project_2_title: "Smart Home / IoT System",
    project_2_text:
      "Developing sensor data flows, dashboards, automation logic and smart systems in a computer engineering environment.",
    project_3_title: "Game & Application Development",
    project_3_text:
      "Experience with Unity and C# development, interactive solutions and programming tasks.",
    project_4_title: "Kenji Team",
    project_4_text:
      "Engineering mindset, teamwork and practical problem-solving experience gained in a university motorcycle building team.",

    journey_kicker: "Journey",
    journey_title: "Work, studies and professional growth.",
    timeline_now: "Currently",
    timeline_now_2: "Currently",
    timeline_kuopio: "Kuopio",
    timeline_sept: "September 2026",
    timeline_1_text:
      "Mobile game development company • Python, SQL, LiveOps, Game Analytics, decision support.",
    timeline_2_title: "John von Neumann University",
    timeline_2_text: "Final-year Computer Science Engineering student in Hungary.",
    timeline_3_text:
      "Exchange student in Finland • IoT, smart technologies and international academic environment.",
    timeline_4_title: "Traineeship in Finland",
    timeline_4_text:
      "Development of IoT systems, robotics programming and analytical methods.",

    contact_kicker: "Contact",
    contact_title:
      "Open to professional connections and new technology ideas.",
    contact_text:
      "I am happy to connect around data analytics, AI, IoT, game development, Unity or software development.",
    contact_email: "Send e-mail"
  }
};

function setLanguage(language) {
  const selectedLanguage = translations[language] ? language : "hu";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");

    if (translations[selectedLanguage][key]) {
      element.textContent = translations[selectedLanguage][key];
    }
  });

  document.documentElement.lang = selectedLanguage;
  languageLabel.textContent = selectedLanguage === "hu" ? "EN" : "HU";
  localStorage.setItem("portfolioLanguage", selectedLanguage);
}

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });
}

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    const currentLanguage = localStorage.getItem("portfolioLanguage") || "hu";
    const nextLanguage = currentLanguage === "hu" ? "en" : "hu";

    setLanguage(nextLanguage);
  });
}

const savedLanguage = localStorage.getItem("portfolioLanguage") || "hu";
setLanguage(savedLanguage);

if (year) {
  year.textContent = new Date().getFullYear();
}

const cards = document.querySelectorAll(
  ".glass-card, .skill-card, .project-card, .timeline-item"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.animate(
          [
            { opacity: 0, transform: "translateY(24px)" },
            { opacity: 1, transform: "translateY(0)" }
          ],
          {
            duration: 600,
            easing: "cubic-bezier(.2,.8,.2,1)",
            fill: "both"
          }
        );

        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

cards.forEach((card) => observer.observe(card));