This is a setup for MongoDB in 3 VMs, so I use network_mode: host and the hosts in mongo_setup.sh file is IP of this 3 VMs.
If you deploy it as 3 containers in a single VM, you can use network_mode: bridge (or do not need to defile the network setup). So in the hosts in mongo_setup.sh file will be the container names of these 3 containers.
