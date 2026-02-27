document.addEventListener('DOMContentLoaded', () => {
    const navLinksContainer = document.getElementById('nav-links');
    if (!navLinksContainer) return;

    // Get current filename from path, handle root path case
    let currentPath = window.location.pathname.split('/').pop();
    if (currentPath === '' || currentPath === 'index.html') {
        currentPath = 'dashboard.html';
    }

    const links = [
        { name: 'Dashboard', path: 'dashboard.html' },
        { name: 'Syllabus', path: 'syllabus.html' },
        { name: 'Study Time', path: 'study_time.html' }
    ];

    links.forEach(link => {
        const li = document.createElement('li');
        li.className = 'nav-item';
        
        const a = document.createElement('a');
        a.className = `nav-link ${currentPath === link.path ? 'active' : ''}`;
        if (currentPath === link.path) {
            a.setAttribute('aria-current', 'page');
        }
        // Use relative paths
        a.href = `./${link.path}`;
        a.textContent = link.name;
        
        li.appendChild(a);
        navLinksContainer.appendChild(li);
    });
});
