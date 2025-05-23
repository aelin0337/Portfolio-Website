// check if the user is an admin
function checkAdminCode() {
    const code = document.getElementById('adminCode').value;
    if (code === '456789') {
        document.getElementById('loginSection').style.display = 'none';
        document.getElementById('skillsEditor').style.display = 'block';
        loadSkills();
    } else {
        alert('Неверный код!');
    }
}
// download skills from local storage
function loadSkills() {
    const skills = JSON.parse(localStorage.getItem('portfolioSkills')) || [
        "HTML", "CSS", "JavaScript", "React", "Git"
    ];
    document.getElementById('skillsTextarea').value = skills.join('\n');
}
// save skills to local storage
function saveSkills() {
    const skillsText = document.getElementById('skillsTextarea').value;
    const skillsArray = skillsText.split('\n').filter(skill => skill.trim() !== '');
    
    localStorage.setItem('portfolioSkills', JSON.stringify(skillsArray));
    document.getElementById('statusMessage').textContent = 'Навыки сохранены!';
}