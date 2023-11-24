const teamMembersContainer = document.getElementById('card-container')

const teamMembers = [
    {
        'name' : 'Wayne Barnett',
        'role' : 'Founder & CEO',
        'profilePicture' : 'wayne-barnett-founder-ceo.jpg'
    },
    {
        'name' : 'Angela Caroll',
        'role' : 'Chief Editor',
        'profilePicture' : 'angela-caroll-chief-editor.jpg'
    },
    {
        'name' : 'Walter Gordon',
        'role' : 'Office Manager',
        'profilePicture' : 'walter-gordon-office-manager.jpg'
    },
    {
        'name' : 'Angela Lopez',
        'role' : 'Social Media Manager',
        'profilePicture' : 'angela-lopez-social-media-manager.jpg'
    },
    {
        'name' : 'Scott Estrada',
        'role' : 'Developer',
        'profilePicture' : 'scott-estrada-developer.jpg'
    },
    {
        'name' : 'Barbara Ramos',
        'role' : 'Graphic Designer',
        'profilePicture' : 'barbara-ramos-graphic-designer.jpg '
    }
]


for (let i = 0; i<teamMembers.length; i++){
    console.log(`Member n.${i + 1}. Name: ${teamMembers[i].name}, Role: ${teamMembers[i].role}, Link to profile photo: ${teamMembers[i].profilePicture}`)

    let newCard = document.createElement('div')
    newCard.classList.add('card', 'border-0', 'rounded-0',)
    newCard.innerHTML = `
    <img src="./img/${teamMembers[i].profilePicture}" class="profile-picture" alt="${teamMembers[i].name} profile photo">
    <div class="card-body text-center">
        <p class="members-name fw-bold m-0">${teamMembers[i].name}</p>
        <p class="members-role m-0">${teamMembers[i].role}</p>
    </div>
    `
    
    teamMembersContainer.appendChild(newCard)
}