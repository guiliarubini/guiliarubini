# bondaika_website
This repository contains my website code that focuses to show my CV and promote myself. 

- Later plan would be: doing same shit as [this ninja](https://luminousmen.com). 

### History

- 06.05.2024 - Today I learned a bit about poetry in order to work on my website and an idea for an article in future website. (Information in OneNote)
- 18.11.2024 - Finally I have punched myself and force my lazy ass to resume working on this website.
- 23.11.2024 - Started finally to write my own website. For now only using React, no css even. Now will use only React. 
- 24.11.2024 - Introduce TypeScript into Reacr my website project.
- 26.11.2024 - Fix some bugs with overlap and add Resume into my website. Next goal would be add some projects with horizontal move gallery and then main header and project website in the future!
- 30.11.2024 - 02.12.2024 - Made Project Carousel and fix all these bugs. Now next step: bondaika's programming blog!

### Troubleshoot with npm

if npm run build faield use this 

```bash
export NODE_OPTIONS=--openssl-legacy-providerEs
```

### Installation

To install development environment use:
```bash
make dev
source activate .dev
```

### Frontend

[Frontend README.md](./website/frontend/README.md)


### Backend

For now to run dump version need to run
```bash
source activate .dev && cd website && uvicorn main:app --reload
```

### API docs

Information about all API endpoints is available via FastAPI Swagger UI in:  

['.../docs' endpoint](http://127.0.0.1:8000/docs)