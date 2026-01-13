
const projectData = {
    vcabs: {
        title: "VCabs | Full-Stack Cab Solution",
        content: `
            <p><strong>Stack:</strong> React, Spring Boot, Hibernate, JPA, MySQL</p>
            <p>Developed a comprehensive cab booking management system featuring a REST API backend and a dynamic frontend.</p>
            <ul>
                <li><b>Persistence:</b> Leveraged <b>Hibernate & JPA</b> for Object-Relational Mapping to handle complex database transactions.</li>
                <li><b>Backend:</b> Built scalable REST APIs using Spring Boot for user authentication and trip management.</li>
                <li><b>Frontend:</b> Created a responsive UI with React.js, focusing on state management and API integration.</li>
            </ul>`
    },
    cardiocare: {
        title: "CardioCare | Health Prediction",
        content: `
            <p><strong>Stack:</strong> Python, Scikit-learn, ML Algorithms</p>
            <p>An ML-based Heart Disease Risk Prediction & Doctor Recommendation System.</p>
            <ul>
                <li><b>Modeling:</b> Trained models using Random Forest and Logistic Regression to predict risk factors with high accuracy.</li>
                <li><b>Logic:</b> Implemented a recommendation engine that suggests specialists based on detected risk profiles.</li>
                <li><b>Analysis:</b> Performed data cleaning and feature engineering on medical datasets to improve model reliability.</li>
            </ul>`
    },
    hashtag: {
        title: "Hashtag Recommendation System",
        content: `
            <p><strong>Stack:</strong> Python, Deep Learning, Neural Networks</p>
            <p>A multimodal recommendation system for social media data.</p>
            <ul>
                <li><b>Deep Learning:</b> Used Neural Networks to generate hashtags for images and text simultaneously.</li>
                <li><b>Multimodal:</b> Implemented Short Description Generation for images to extract context for more accurate recommendations.</li>
            </ul>`
    },
    flood: {
        title: "Flood Prediction System",
        content: `
            <p><strong>Stack:</strong> Python, Satellite Imagery, Spatial Analysis</p>
            <p>Enhancing flood prediction using ML techniques and satellite observations.</p>
            <ul>
                <li><b>Spatial Analysis:</b> Developed an approach to analyze geographic data and satellite observations for flood risk mapping.</li>
                <li><b>Prediction:</b> Utilized time-series analysis and ML to predict potential flood events based on historical and real-time data.</li>
            </ul>`
    },
    games: {
        title: "Game Development (C++/SDL)",
        content: `
            <p><strong>Stack:</strong> C++, SDL Library</p>
            <p>Developed two classic arcade-style games focusing on performance and logic.</p>
            <ul>
                <li><b>SpaceShooter:</b> Implemented collision detection, enemy AI patterns, and sprite rendering.</li>
                <li><b>BallBounce:</b> Focused on 2D physics, velocity calculations, and user input handling.</li>
            </ul>`
    },
    fasttrack: {
        title: "Fast Track Cars",
        content: `
            <p><strong>Stack:</strong> SQL, Python/PHP, DBMS Principles</p>
            <p>A specialized car tracking and management system.</p>
            <ul>
                <li><b>Database Design:</b> Created a normalized database schema to track inventory, rental history, and client records.</li>
                <li><b>Management:</b> Built a dashboard for CRUD operations on vehicle status and maintenance logs.</li>
            </ul>`
    }
};

/**
 * Modal Control Logic
 */

function openProject(id) {
    const project = projectData[id];
    const modal = document.getElementById('projectModal');
    const body = document.getElementById('modalBody');

    if (project && modal && body) {
        // Inject content
        body.innerHTML = `
            <h2 style="color: #1e3a8a; margin-bottom: 10px;">${project.title}</h2>
            <hr style="border: 0; border-top: 1px solid #eee; margin-bottom: 20px;">
            <div class="modal-text" style="text-align: left;">${project.content}</div>
        `;
        
        // Show modal with animation
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // Disable background scrolling
    }
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Re-enable background scrolling
    }
}

// Close the modal if the user clicks anywhere outside of the modal box
window.onclick = function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target == modal) {
        closeModal();
    }
};