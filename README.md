# my-profile


name: Github pages Deploy
on:
  push:
    branches:
      - "master"
jobs:
  build:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [15.x]

    steps:  
      - name: Checkout
        uses: actions/checkout@v1

      - name: Install and build
        run: npm install && npm run build

      - name: deploy
        uses: uchandup/my-profile@4.1.1
        with: 
          branch: gh-pages #the branch the action should deploy to.
          folder: build # the floder the action should deploy. 
