// анимация появления формы в контактах
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById('contactFormWrapper');

  function checkVisibility() {
    const rect = contactForm.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight - 100) {
      contactForm.classList.add('visible');
      window.removeEventListener('scroll', checkVisibility);
    }
  }
  window.addEventListener('scroll', checkVisibility);
  checkVisibility();
});

// arry of skils
document.addEventListener('DOMContentLoaded', function () {
    // стандартные навыки
    const skills = JSON.parse(localStorage.getItem('portfolioSkills')) || [
        "HTML", "CSS", "JavaScript", "React", "Git"
    ];

    const skillsList = document.getElementById('skillsList');
    skillsList.innerHTML = ''; // очищаем список перед заполнением

    skills.forEach(skill => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = skill;
        skillsList.appendChild(li);
    });
});

// сохраняем введенные данные в локальной истории браузера
function saveFormData(){
  const name = document.getElementById('userName').value;
  const email = document.getElementById('userEmail').value;
  const message = document.getElementById('userMessage').value;
  const formData ={
    name: name,
    email: email,
    message: message
  };
// проверяем, что все поля заполнены
  if(!name || !email || !message){
    alert('Please fill in all fields');
    return;
  }
// отображаем сообщение об успешном сохранении
  localStorage.setItem('formData', JSON.stringify(formData));
  alert('Form data saved!');
}
// загружаем данные из локальной истории
document.getElementById('DOMContentLoaded',() => {
  const saved = JSON.getElementById('formData');
  if(saved){
    const data = JSON.parse(saved);
    document.getElementById('userName').value = data.name
    document.getElementById('userEmail').value = data.email;
    document.getElementById('userMessage').value = data.message;
  }
});

fetch('http://worldtimeapi.org/api/ip')
  .then(response => response.json())
  .then(data => {
    console.log(`Моё время: ${data.datetime}`);
});

document.addEventListener('DOMContentLoaded', function() {
    const timeElement = document.getElementById('current-time');
    
    function formatDateTime(datetimeStr) {
        const date = new Date(datetimeStr);
        return date.toLocaleTimeString('ru-RU') + ' ' + date.toLocaleDateString('ru-RU');
    }

    function updateTime() {
        timeElement.classList.add('loading');
        
        fetch('http://worldtimeapi.org/api/ip')
            .then(response => response.json())
            .then(data => {
                timeElement.classList.remove('loading');
                timeElement.textContent = 'My time: ' + formatDateTime(data.datetime);
            })
            .catch(error => {
                console.error('Ошибка:', error);
                timeElement.textContent = 'Local time: ' + new Date().toLocaleString();
            });
    }
 // initial update
    updateTime();   
    // update every second
    setInterval(updateTime, 1000);
});
