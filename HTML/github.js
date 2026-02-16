// github.js – Fetch and display public GitHub repositories

document.addEventListener('DOMContentLoaded', function() {
  const username = 'KonoDio-Dato'; // <--- CHANGE THIS
  const reposContainer = document.getElementById('github-repos');

  if (!reposContainer) return;

  fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)
    .then(response => {
      if (!response.ok) throw new Error('GitHub API error');
      return response.json();
    })
    .then(repos => {
      if (repos.length === 0) {
        reposContainer.innerHTML = '<p style="color: rgba(255,255,255,0.7);">No public repositories found.</p>';
        return;
      }

      let html = '';
      repos.forEach(repo => {
        html += `
          <div class="project-card">
            <div class="project-image" style="background: linear-gradient(135deg, #007ba7, #64b5f6);">
              <div class="project-overlay">
                <div class="overlay-content">
                  <h3>${repo.name}</h3>
                  <p>${repo.description || 'No description'}</p>
                </div>
              </div>
            </div>
            <div class="project-info">
              <h3>${repo.name}</h3>
              <p>${repo.description ? repo.description.substring(0, 80) + '…' : 'No description'}</p>
              <div class="project-tech">
                <span class="tech-tag"><i class="fas fa-star"></i> ${repo.stargazers_count}</span>
                <span class="tech-tag"><i class="fas fa-code-branch"></i> ${repo.forks_count}</span>
                <span class="tech-tag">${repo.language || 'Various'}</span>
              </div>
              <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="project-link">
                View on GitHub <i class="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        `;
      });
      reposContainer.innerHTML = html;
    })
    .catch(error => {
      console.error('Error fetching GitHub repos:', error);
      reposContainer.innerHTML = '<p style="color: rgba(255,255,255,0.7);">Failed to load repositories. Please try again later.</p>';
    });
});