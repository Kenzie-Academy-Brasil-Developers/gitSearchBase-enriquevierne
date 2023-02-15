import { getRepos } from '/src/scripts/request.js'

function renderProfile() {

    const data = localStorage.getItem('user')
    const user = JSON.parse(data)
    const container = document.querySelector('.content-profile')


    const infoUser = document.createElement('div')
    const avatarUser = document.createElement('img')
    const nameUser = document.createElement('h2')
    const changeUser = document.createElement('a')

    infoUser.classList.add('profile-info')

    avatarUser.src = user.avatar_url

    nameUser.innerText = user.name

    changeUser.classList.add('profile-btn')
    changeUser.href = '../../index.html'
    changeUser.innerText = 'Trocar Usuário'

    container.append(infoUser, changeUser)
    infoUser.append(avatarUser, nameUser)
    
    return container
}
renderProfile()

function renderReposUser() {

    const data = localStorage.getItem('userRepos')
    const repos = JSON.parse(data)
    const container = document.querySelector('.repos-list')

    repos.forEach(repo => {

        const cardRepo = document.createElement('li')
        const titleRepo = document.createElement('h2')
        const textRepo = document.createElement('p')
        const linkRepo = document.createElement('a')

        cardRepo.classList.add('repos-card')

        titleRepo.innerText = repo.name

        textRepo.innerText = repo.description
        

        linkRepo.classList.add('link-repos')
        linkRepo.target = '_blank'
        linkRepo.innerText = 'Repositório'
        linkRepo.href = repo.html_url

        container.append(cardRepo)
        cardRepo.append(titleRepo, textRepo, linkRepo)

    });

    return container
}
renderReposUser()
