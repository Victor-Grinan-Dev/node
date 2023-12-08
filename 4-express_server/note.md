
This command is to show all the listening port:

windows
```shell
netstat -ano | findstr "LISTENING"
```
linux
```shell
sudo ldof -i -P | grep LISTEN
```

