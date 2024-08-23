# Site Da Isa
This is a simple example for running a Node.js Server with Docker. 

## Build
```
docker build --tag site-da-isa-image .
```

## Run
```
docker run --rm --name site-da-isa-container --publish 4200:4200 --volume $(pwd):/usr/src/app site-da-isa-image
```

## Test
Open `http://localhost:4200/` in your browser.
