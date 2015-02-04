# iojs-koajs-docker-vagrant-setup
Basic setup koa.js runs on iojs using docker containers via vagrant to sync ports and files with host OS (ex: Mac OS)

### Description and usage

Basic setup of a koa.js "Hello World" app running on iojs

Objective of this small project is to provide an abstraction layer between Docker and Mac OSx.
Enables you to develop from a Mac OSx machine with your favourite editor and syncs automatically the files with a Docker iojs container also exposes the port 8080 in order to see the application.

**Just change the `index.js` from the app folder and reload vagrant in order to see the changes by using `vagrant halt` then `vagrant up` **

**Live reload coming soon!**

The end result after installing it would be to open up
`localhost:8080` and see Hello world from Koa.js using a cool JavaScript generator function.

### Technical description

This project it's using the official iojs Docker image and
Vagrant that will use another debian Virtualbox image because Docker cannot run by default on Mac OSx.

The Docker container it's initialised from iojs Docker image and the `app` folder and port `8080` it's being shared between
`Mac OS -> Debian Vagrant -> Docker Iojs Debian container`


#### Prerequisites

[Vagrant][a532b883]

  [a532b883]: https://www.vagrantup.com/downloads.html "Vagrant"

[Virtualbox][01cc6bd9]

  [01cc6bd9]: https://www.virtualbox.org/wiki/Downloads "Virtualbox"

#### Usage

`npm install` inside app folder

`vagrant box add debian/chef-7.4`

`vagrant up`

#### TODO

- Add automatic server restart on change
- Improve README
- Optimize setup and eliminate potential errors
