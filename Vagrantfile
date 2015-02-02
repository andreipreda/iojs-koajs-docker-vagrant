VAGRANTFILE_API_VERSION = "2"
VAGRANT_DEFAULT_PROVIDER = "docker"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|

  # docker container name: iojs_koa
  config.vm.define "iojs_koa" do |v|

    v.vm.provider "docker" do |d|
      # docker file location
      d.build_dir = "."
      # exposed ports from docker container
      d.ports = ["8080:8080"]
      # command to run after dockerfile finish running
      d.cmd = ["iojs", "vagrant/app/index.js"]
      # vagrant proxy contains a linux vagrant box that support/run docker
      d.vagrant_vagrantfile = "./Vagrantfile.docker"
    end

    # syncs with docker container
    v.vm.synced_folder ".", "/vagrant",
      id: "vagrant-root",
      owner: "vagrant",
      group: "www-data",
      mount_options: ["dmode=775,fmode=664"]

  end
end
