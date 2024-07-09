document.addEventListener("DOMContentLoaded", () => {
    const invitationsData = [
        {
            name: 'pola Rama Manikanta',
            title: 'Student at RMK ENGINEERING COLLEGE',
            sharedConnections: 6,
            imgSrc: 'avatar1.png'
        },
        {
            name: 'Sharutosh Chandrasekhar',
            title: 'Student at SRM University',
            sharedConnections: 4,
            imgSrc: 'avatar2.png'
        },
        {
            name: 'Rohit Amanathali',
            title: 'Student of Mechanical engineering',
            sharedConnections: 5,
            imgSrc: 'avatar3.png'
        },
        {
            name: 'Jayashree Ramakrishnan',
            title: 'Interested in traveling... and also interested in exploring...',
            sharedConnections: 3,
            imgSrc: 'avatar4.png'
        },
        {
            name: 'Senthil Nathan',
            title: 'Student at Test University',
            sharedConnections: 2,
            imgSrc: 'avatar5.png'
        }
    ];

    const invitationsContainer = document.querySelector('.invitations');
    const modal = document.getElementById('modal');
    const modalContent = document.querySelector('.modal-content');
    const modalDetails = document.querySelector('.modal-details');
    const closeModal = document.querySelector('.close');

    invitationsData.forEach(invite => {
        const card = document.createElement('div');
        card.classList.add('invitation-card');

        card.innerHTML = `
            <img src="${invite.imgSrc}" alt="Avatar">
            <div class="details">
                <p><strong>${invite.name}</strong></p>
                <p>${invite.title}</p>
                <p>${invite.sharedConnections} shared connections</p>
            </div>
            <div class="actions">
                <button class="accept">Accept</button>
                <button class="ignore">Ignore</button>
            </div>
        `;

        card.addEventListener('click', () => {
            modalDetails.innerHTML = `
                <img src="${invite.imgSrc}" alt="Avatar" style="width: 100px; height: 100px; border-radius: 50%;">
                <h2>${invite.name}</h2>
                <p>${invite.title}</p>
                <p>${invite.sharedConnections} shared connections</p>
            `;
            modal.style.display = 'flex';
        });

        invitationsContainer.appendChild(card);
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    const acceptButtons = document.querySelectorAll(".accept");
    const ignoreButtons = document.querySelectorAll(".ignore");

    acceptButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            event.stopPropagation();
            alert("Accepted");
        });
    });

    ignoreButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            event.stopPropagation();
            alert("Ignored");
        });
    });
});
