# iojs-koajs-docker-vagrant-setup
Starter development environment from Mac OSx using Koa.js running on Iojs

### Description and usage

Enables you to develop from a Mac OSx machine with your favourite editor and syncs automatically the files with a Docker iojs container also exposes the port 8080 in order to see the application.

##### The problem that tries to solve

Installing Iojs on an existing Mac OSx containing Nodejs might trigger some incompatibility errors

Isolating Iojs within Docker it is a good solution that can work but if not using a Linux OS there are more configurations needed to develop in order to syncronize the files and ports between your dev machine and the Docker container


##### What this end result?

Basic setup of a koa.js "Hello World" app running on iojs

Navigate to `localhost:8080` and see Hello world from Koa.js using a cool JavaScript ES6 feature, a generator function.


##### Usage

Edit the `index.js` from the app folder and reload vagrant in order to see the changes by using `vagrant halt` then `vagrant up`

**Live reload coming soon!**


### Technical description

This project it's using the official iojs Docker image and
Vagrant that will use another debian Virtualbox image because Docker cannot run by default on Mac OSx.

The Docker container it's initialised from iojs Docker image and the `app` folder and port `8080` it's being shared between
`Mac OS -> Debian Vagrant -> Docker Iojs Debian container`


#### Prerequisites to have installed

[Vagrant][a532b883]

  [a532b883]: https://www.vagrantup.com/downloads.html "Vagrant"

[Virtualbox][01cc6bd9]

  [01cc6bd9]: https://www.virtualbox.org/wiki/Downloads "Virtualbox"

#### Installation

`npm install` inside app folder

`vagrant box add debian/chef-7.4`

`vagrant up`


#### Known possible errors

When vagrant up an error could appear that `docker stop` command cannot execute.
This is happening because the host Mac OSx vagrant tells the Intermediary host Debian to control a container in it's environment which fails.
Solution: restart your computer and `vagrant up` again.

#### TODO

- Add automatic server restart on change
- Improve README
- Optimize setup and eliminate potential errors
