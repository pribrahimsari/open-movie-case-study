# Open Movie DB Search | Case Study
A small React + Redux + TypeScript + Vite project where you can search for movies using the [Open Movie Database API](https://omdbapi.com/) and view movie details, within the criteria set by a company I applied for.

## Live Demo
Visit the link: [Open Movie Case Study - https://omdb-search.isari.me/](https://omdb-search.isari.me/)

## Libs
- Frontend Bundler: [Vite](https://vitejs.dev/)
- Frontend Framework: [React 18](https://react.dev/)
- API: [Open Movie DataBase](https://www.omdbapi.com/)
- UI: [MaterialUI v5](https://mui.com/)
- State Manager: [Redux 8](https://react-redux.js.org/)
- Data Fetching Lib: [TanStack Query v3 (formerly React Query)](https://tanstack.com/query/v3/)
- Routing Lib: [React Router v6](https://reactrouter.com/en/main)
- Custom Styling: [SASS](https://sass-lang.com/)
- Linting Utility: [ESLint](https://eslint.org/)
- Code Formatter: [Prettier](https://prettier.io/)
- VCS: Git
- Deployment: [Vercel](https://vercel.com/)
- NodeJS version: 18.17.0
- NPM version: 9.8.1

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


- **Get Your [Open Movie Database API key](https://omdbapi.com/) and paste it to your .env.local file**
    - Final .env.local file should look like:
```.env.local
VITE_OMDB_API_URL=https://www.omdbapi.com/
VITE_OMDB_API_KEY=<<YOUR_OMDB_API_KEY>>
```

- **Run:**
```bash
npm start
```

- **Visit the link on your favorite browser:** http://localhost:5173/
    - Note: Vite uses port `5173` port 


## Desired Features
- [x] ~~Filmler bir tablo/grid içerisinde listelenebilmedir. Minimum filmin adı, yayınlandığı tarih ve IMDb ID’si kolonları bulunmalıdır~~
- [x] ~~Her sayfada 10 film olacak şekilde sayfalama yapılmalıdır~~
- [x] ~~Grid/tablo üzerinde bir textfield ile film adına göre arama yapılabilmelidir. Uygulama ilk açıldığında default Pokemon aratılmış gibi davranılması istenmektedir~~
- [x] ~~Kullanıcı sadece istediği yılda vizyona girmiş filmleri listeleyebilmelidir~~
- [x] ~~Kullanıcı isterse sadece filmleri, sadece dizileri ya da sadece dizi bölümlerini aratabilmelidir~~
- [x] ~~Film adına tıklandığında, kullanıcı filmin afişini ve diğer detaylarının (başlık, süre, tür, yönetmen, oyuncular, IMDb puanı vb.) görüntülenebileceği başka bir sayfaya yönlenlendirilmelidir~~
  - Note: Redirecting on row click (instead of name click) seems better I think.

## Technical Requirements
- [x] ~~Framework olarak React kullanılmalıdır~~
- [x] ~~Film bilgilerini çekmek için OMDb API (http://www.omdbapi.com/) kullanılmalıdır~~
- [x] ~~TypeScript ya da ES5+ kullanılabilir.~~
- [x] ~~Uygulamayı ayağa kaldırmak gerekli komutlar tercihen README.md içerisinde iletilmelidir~~
- [x] ~~Custom styling için SASS/LESS/SCSS kullanımı artı puan olarak değerlendirilecektir~~
- [x] ~~State yönetimi Redux kullanımı artı puan olarak değerlendirilecektir~~
- [x] ~~React Hooks kullanımı artı puan olarak değerlendirilecektir~~
- [ ] Lodash, Underscore.js, moment vb. utility kütüphaneleri kullanılabilir
- [x] ~~Bootstrap, Semantic UI, Material UI vb. CSS frameworkleri kullanılabilir~~