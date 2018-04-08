![Image of Coinmarketcap Reactjs](https://i.imgur.com/isl3wwa.png)

Introduction
------------

I'm trying to learn ReactJS as much as posible so making a coinmarketcap like website is pretty exciting for me because I'm into blockchain and cryptocurrency.

This development is still in early stages but if you want to test it out follow this steps.

(I'll improve the design :P)

Installation.
-------------

```
git clone https://github.com/mariodev12/coinmarketcap.git 
cd coinmarketcap 
npm install 
cd /server 
npm install
```

Once everything is installed start the server made with NodeJS inside the server folder.

node index.js

After that start the development server for reactjs inside the folder, coinmarketcap.

npm start.

API.
----------

- [Coinmarketcap](https://coinmarketcap.com/api/).

Folder Structure
----------------

Your project should look like this:

```
coinmarketcap/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
    manifest.json
  server/
    node_modules/
    index.js
    package-lock.json
    package.json
  src/
    content/
      Home/
        content.css
        content.js
      Page/
        content.css
        content.js
    details/
      details.css
      details.js
    footer/
    header/
      header.css
      header.js
    pagination/
      pagination.css
      pagionationCustom.js
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
    registerServiceWorker.js
```

Roadmap
-------

- [ ] Real time data
- [ ] Redux
- [ ] Portfolio
- [ ] fix a bunch of bugs

Thanks
------

**Mario Diez** © 2017+, Mario Diez. Released under the [MIT License].<br>
Authored and maintained by Mario Diez.

> [mariodiezgarcia.com](http://www.mariodiezgarcia.com) &nbsp;&middot;&nbsp;
> GitHub [@mariodev12](https://github.com/mariodev12) &nbsp;&middot;&nbsp;
> Youtube [@mariodiezoficial](https://www.youtube.com/channel/UCisGMoxaVxJMcbio2FBHORg) &nbsp;&middot;&nbsp;
> Twitter [@mariodev_](https://twitter.com/mariodev_)

[MIT License]: http://mit-license.org/