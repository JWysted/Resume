document.addEventListener('DOMContentLoaded', function () {
    fetchData('content/experience.json', renderExperience, 'experience');
    fetchData('content/skills.json', renderSkills, 'skills');
    fetchData('content/education.json', renderEducation, 'education');
});

function fetchData(filePath, renderer, elementId) {
    fetch(filePath)
        .then(response => response.json())
        .then(data => renderer(data, elementId))
        .catch(error => console.error('Error loading the data:', error));
}

function renderExperience(data, elementId) {
    const container = document.getElementById(elementId);
    data.forEach(job => {
        const jobEl = document.createElement('div');
        jobEl.innerHTML = `<h2>${job.role} at ${job.company}</h2>
                           <p>${job.city} - ${job.startDate} to ${job.endDate}</p>
                           <ul>${job.descriptions.map(desc => `<li>${desc}</li>`).join('')}</ul>`;
        container.appendChild(jobEl);
    });
}

function renderSkills(data, elementId) {
    const container = document.getElementById(elementId);
    const list = document.createElement('ul');
    data.forEach(skill => {
        const item = document.createElement('li');
        item.textContent = `${skill.skill} - ${skill.level}`;
        list.appendChild(item);
    });
    container.appendChild(list);
}

function renderEducation(data, elementId) {
    const container = document.getElementById(elementId);
    data.forEach(edu => {
        const eduEl = document.createElement('div');
        eduEl.innerHTML = `<h2>${edu.degree} in ${edu.field}</h2>
                           <p>${edu.institution} - ${edu.year}</p>`;
        container.appendChild(eduEl);
    });
}

