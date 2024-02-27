// cambio la forma de ingresar el header para hacerlo mas global a todos los html, dejo comentado las lineas de codigo  originales en el index.html donde estaba inicialmente el nav

async function insertHeader() {
    const headerContainer = document.getElementById('header-container');

    if (headerContainer) {
        const header = document.createElement('header');
        header.classList.add('banner');

        const nav = document.createElement('nav');

        const logoDiv = document.createElement('div');
        logoDiv.classList.add('logo');

        const logoImg = document.createElement('img');
        logoImg.src = 'imagenes/flauta_7.png';
        logoImg.alt = 'Logo';
        if (logoImg.src.includes('pages')) {
            let data = logoImg.src.split('/')
            let a = data.filter(e => e != "pages");
            logoImg.src = a.join("/")
        }

        const ul = document.createElement('ul');
        const pages = ['./pages/flauta', './pages/musica', './pages/artistas'];

        pages.forEach((page) => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.textContent = page.slice(8).toUpperCase();
            a.href = `/${page}.html`;
            li.appendChild(a);
            ul.appendChild(li);
        });

        logoDiv.appendChild(logoImg);
        nav.appendChild(logoDiv);
        nav.appendChild(ul);
        header.appendChild(nav);
        headerContainer.appendChild(header);

    }
}

insertHeader();
