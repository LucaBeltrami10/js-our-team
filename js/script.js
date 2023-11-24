const teamMembersContainer = document.querySelector('main div.container-fluid div.my_container')


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
}


/* 
Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg 
*/

/* 
<div class="card border-0 rounded-0">
    <img src="./img/wayne-barnett-founder-ceo.jpg" class="profile-picture" alt="...">
    <div class="card-body text-center">
        <p class="members-name fw-bold m-0">gennaro</p>
        <p class="members-role m-0">pizzaiolo</p>
    </div>
</div>
*/