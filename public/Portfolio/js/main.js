import { en } from './lang/en.js';
import { es } from './lang/es.js';

const translations = { en, es };
let currentLang = 'en';

function applyTranslations(lang) {
    const t = translations[lang];
    document.getElementById('title').textContent = t.title;
    document.getElementById('downloadCV').textContent = t.downloadCV;
    document.getElementById('language_button').textContent = t.language_button;
    document.getElementById('language_spanish').textContent = t.language_spanish;
    document.getElementById('language_english').textContent = t.language_english;
    document.getElementById('aboutMe').textContent = t.aboutMe;
    document.getElementById('bioFirst').textContent = t.bioFirst;
    document.getElementById('bioSecond').textContent = t.bioSecond;
    document.getElementById('expProf').textContent = t.expProf;
    document.getElementById('vnvEngineer').textContent = t.vnvEngineer;
    document.getElementById('fullTime').textContent = t.fullTime;
    document.getElementById('present').textContent = t.present;
    
    document.getElementById('iTJbullet1').textContent = t.iTJbullet1;
    document.getElementById('iTJbullet2').textContent = t.iTJbullet2;
    document.getElementById('iTJbullet3').textContent = t.iTJbullet3;
    document.getElementById('iTJbullet4').textContent = t.iTJbullet4;
    document.getElementById('iTJbullet5').textContent = t.iTJbullet5;
    
    document.getElementById('webDeveloper').textContent = t.webDeveloper;
    document.getElementById('residenceP').textContent = t.residenceP;
    document.getElementById('webBullet1').textContent = t.webBullet1;
    document.getElementById('webBullet2').textContent = t.webBullet2;
    document.getElementById('webBullet3').textContent = t.webBullet3;
    document.getElementById('webBullet4').textContent = t.webBullet4;
    
    document.getElementById('featureProjects').textContent = t.featureProjects;
    document.getElementById('featureProjectsSub1').textContent = t.featureProjectsSub1;
    document.getElementById('featureProjectsDescription1').textContent = t.featureProjectsDescription1;
    document.getElementById('featureProjectsSub2').textContent = t.featureProjectsSub2;
    document.getElementById('featureProjectsDescription2').textContent = t.featureProjectsDescription2;
    
    document.getElementById('skillstitle1').textContent = t.skillstitle1;
    document.getElementById('skillstag1').textContent = t.skillstag1;
    document.getElementById('skillstag2').textContent = t.skillstag2;
    document.getElementById('skillstag3').textContent = t.skillstag3;
    document.getElementById('skillstag3sub1').textContent = t.skillstag3sub1;
    
    document.getElementById('career').textContent = t.career;
    document.getElementById('school1').textContent = t.school1;
    document.getElementById('period1').textContent = t.period1;
    document.getElementById('career2').textContent = t.career2;
    
    document.getElementById('languages').textContent = t.languages;
    document.getElementById('language_certificate').textContent = t.language_certificate;
    document.getElementById('language_certificate2').textContent = t.language_certificate2;
}

window.toggleLanguage = function () {
    currentLang = currentLang === 'en' ? 'es' : 'en';
    applyTranslations(currentLang);
};

// Initialize
applyTranslations(currentLang);
