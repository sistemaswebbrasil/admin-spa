## Resolve um erro sem muito sentido do node , tipo Error: watch src... ENOSPC

echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p

## Base do projeto

http://jasonwatmore.com/post/2017/12/07/react-redux-jwt-authentication-tutorial-example