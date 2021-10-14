# Tidsestimatspoker-Frontend

## Backend repo

https://github.com/loveefraimsson/Tidsestimatspoker-Backend

## Wireframe och arkitektur

https://app.diagrams.net/#G15YRO1nJPizdNB4eds8OZQSB51ryjDk7g

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run deploy`

OBS! Kör endast från branchen `dev`.

Skapar en build mapp som pushas till branchen `prod`.\
Uppdaterar automatiskt github pages deployment.

Live deployment: https://kimmiich.github.io/Tidsestimatspoker-Frontend/

## Brancher

Välj en issue.

Se till att din lokala dev matchar senaste på github

`git checkout dev`\
`git pull dev`

Skapa ny branch för issuet du vill lösa

`git checkout -b ${reponamn}-issue-#{issue-nr}`

Gör ändringar

Adda och commita till ny branchen

Pusha sen till github

`git push origin ${reponamn}-issue-#{issue-nr}`
