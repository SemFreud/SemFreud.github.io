# docker network (二):创建网络

`docker network create --help`

```
docker network create --help

Usage:	docker network create [OPTIONS] NETWORK

Create a network

Options:
      --attachable           Enable manual container attachment
      --aux-address map      Auxiliary IPv4 or IPv6 addresses used by Network driver (default map[])
      --config-from string   The network from which copying the configuration
      --config-only          Create a configuration only network
  -d, --driver string        Driver to manage the Network (default "bridge")
      --gateway strings      IPv4 or IPv6 Gateway for the master subnet
      --ingress              Create swarm routing-mesh network
      --internal             Restrict external access to the network
      --ip-range strings     Allocate container ip from a sub-range
      --ipam-driver string   IP Address Management Driver (default "default")
      --ipam-opt map         Set IPAM driver specific options (default map[])
      --ipv6                 Enable IPv6 networking
      --label list           Set metadata on a network
  -o, --opt map              Set driver specific options (default map[])
      --scope string         Control the network's scope
      --subnet strings       Subnet in CIDR format that represents a network segment
```
创建一个其他的网段(docker默认使用172.17.0.1网段)，使用如下命令。
`docker network create --subnet 172.18.0.1/16 test_network`
> 如果碰到`Pool overlaps with other one on this address
> space`错误,可以更改网段试一下。 
>
> (其中，172.18.0.1/16中的16表示，子网掩码有16位,即255.255.0.0)

执行`docker network ls`

```
docker network ls
NETWORK ID          NAME                DRIVER              SCOPE
9ee03cae1b51        bridge              bridge              local
810b9624c573        host                host                local
ca19cab25ea8        none                null                local
781bfa74a862        test_network        bridge              local
```

这个时候，就可以指定容器使用这个网段的ip地址。

#### [指定固定IP]()




参考：[docker API](https://docs.docker.com/engine/reference/commandline/network_create/)