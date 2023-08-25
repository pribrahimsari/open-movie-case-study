@Todo: Check readme at the end

# Open Movie Case Study
TODO: Description

React + TypeScript + Vite application 

## Live Demo
TODO: 

Visit the link: [Open Movie Case Study](https://TODO.vercel.app/)

## Features
Created/Started via Vite's TypeScript + React minimal setup: `npm create@latest vite open-movie-case-study --template react-ts`

## Libs
TODO: 

- Frontend Bundler: [Vite](https://vitejs.dev/)
- Frontend Framework: [React](https://react.dev/)
- API: [Open Movie DataBase](https://www.omdbapi.com/)
- UI : [MaterialUI v5](https://mui.com/)
- Linting Utility: [ESLint](https://eslint.org/)
- Code Formatter: [Prettier](https://prettier.io/)
- VCS: Git
- Deployment: [Vercel](https://vercel.com/)

## Test in local environment

- **Clone repo:**
```bash
git clone https://github.com/pribrahimsari/open-movie-case-study.git
```

- **Install dependencies:**
```bash
npm install
```

- **Create `.env.local` file at root:**
    - You can copy or rename `.env.local.example` file already available


- **Get Your [Open Moview Database API key](https://omdbapi.com/) and paste it to your .env.local file**
    - Final .env.local file should look like:
```.env.local
VITE_OMDB_API_URL=https://www.omdbapi.com/
VITE_OMDB_API_KEY=<<YOUR_OMDB_API_KEY>>
```

- **Run:**
```bash
npm start
```

@TODO
- **Visit the link on your favorite browser:** http://localhost:5173/
    - Note: Vite uses port `5173` port 


## Desired Features
- Filmler bir tablo/grid içerisinde listelenebilmedir. Minimum filmin adı, yayınlandığı tarih ve IMDb ID’si kolonları bulunmalıdır
- Her sayfada 10 film olacak şekilde sayfalama yapılmalıdır
- Grid/tablo üzerinde bir textfield ile film adına göre arama yapılabilmelidir. Uygulama ilk açıldığında default Pokemon aratılmış gibi davranılması istenmektedir
- Kullanıcı sadece istediği yılda vizyona girmiş filmleri listeleyebilmelidir
- Kullanıcı isterse sadece filmleri, sadece dizileri ya da sadece dizi bölümlerini aratabilmelidir
- Film adına tıklandığında, kullanıcı filmin afişini ve diğer detaylarının (başlık, süre, tür, yönetmen, oyuncular, IMDb puanı vb.) görüntülenebileceği başka bir sayfaya yönlenlendirilmelidir

## Technical Requirements
- DONE: ~~Framework olarak React kullanılmalıdır~~
- DONE: ~~Film bilgilerini çekmek için OMDb API (http://www.omdbapi.com/) kullanılmalıdır~~
- DONE: ~~TypeScript ya da ES5+ kullanılabilir.~~
- Uygulamayı ayağa kaldırmak gerekli komutlar tercihen README.md içerisinde iletilmelidir
- Custom styling için SASS/LESS/SCSS kullanımı artı puan olarak değerlendirilecektir
- State yönetimi Redux kullanımı artı puan olarak değerlendirilecektir
- React Hooks kullanımı artı puan olarak değerlendirilecektir
- Lodash, Underscore.js, moment vb. utility kütüphaneleri kullanılabilir
- Bootstrap, Semantic UI, Material UI vb. CSS frameworkleri kullanılabilir