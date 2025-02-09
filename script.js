document.getElementById('photoUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('profileImage').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

function addProject() {
    const name = document.getElementById('projectName').value;
    const desc = document.getElementById('projectDesc').value;
    const link = document.getElementById('projectLink').value;

    if (name && desc && link) {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project-card');
        projectDiv.innerHTML = `<h3>${name}</h3><p>${desc}</p><a href="${link}" target="_blank">View Project</a>`;

        document.getElementById('projects').appendChild(projectDiv);

        document.getElementById('projectName').value = '';
        document.getElementById('projectDesc').value = '';
        document.getElementById('projectLink').value = '';
    } else {
        alert('Please fill all fields!');
    }
}
