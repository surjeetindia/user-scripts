#Surjeet
export CI_JOB_TOKEN=glpat-atfAA2RJCUXBCPy8DAL1
#export GITLAB_KEY=glpat-atfAA2RJCUXBCPy8DAL1

export CI_JOB_TOKEN_ANKIT=glpat-f5YaKxwhih3VHddFgies
#system




#git
alias glog="git log --oneline --graph -20"









# SURJEET common
rm-r(){
  sudo rm -rf "$1"
}

alias of=nautilus

check-address(){
  netstat -tulpn | grep "$1"
}

alias chkadd='sudo netstat -tulpn | grep LISTEN'

# SURJEET terminal
bind Space:magic-space
alias r='fc -s'



# SURJEET php
alias apache-up='sudo systemctl start apache2.service'
alias apache-down='sudo systemctl stop apache2.service'

# SURJEET git
alias glog="git log --oneline --graph -10"
alias gst="git status"
alias grst-s="git reset --soft HEAD~1"
# resetting back to one commit and preseve changes as well
alias grst-h="git reset --hard HEAD~1"

alias gsl="git stash list"
alias gspush="git stash"
alias gspop="git stash pop"
alias gss="git stash show -p"
alias gssid="git stash show -p <commit>"
alias gsd="git diff develop stash@{0}"
alias gsdn="git diff --name-only develop stash@{0}"

alias gbparent="git show-branch --current"

alias gb-r="git branch -r"
alias gb="git branch"
alias gbm="git branch --merged"
alias gbnm="git branch --no-merged"
alias gshow="git show"
  # shows only last commit detailed
alias gshowstat="git show --stat"
  # shows only last commit info
alias gshowname="git show --name-only"

alias glog-ns="git log --name-status -2"
alias glog-p="git log -p -2"
  # same as git show --stat
glog-pid(){
  git log -p "$1"
}
alias glog-stat="git log --stat -2"

# SURJEET docker
alias docker-df="docker system df"
alias docker-up="docker-compose up --remove-orphans"
alias docker-down="docker-compose down --remove-orphans"

alias docker-upd="docker-compose up -d"
alias docker-upb="docker-compose up --force-recreate --build -V"
alias docker-up-network="docker network create dev-travel.com"
alias docker-up-proxy="docker network create dev-travel.com | docker run -d --name dev-travel-network -p 80:80 -p 443:443 --restart always --net dev-travel.com -v /var/run/docker.sock:/tmp/docker.sock:ro registry.dyninno.net/docker/nginx-proxy:latest"
alias docker-down-proxy="docker rm -f dev-travel-network"

alias docker-clear-c="docker rm $(docker ps -aq)"

docksh() {
  docker exec -it $1 sh
}

alias dockps="docker-compose ps"

docksh() {

  docker-compose ps
  read num
  docker exec -it $(docker-compose ps -q | head -$num | tail -1) sh
}


#source /home/spv/applications/fancy-bash-promt.sh

# mkvpropedit
mkvpropupdate(){
  mkvpropedit "$1" --edit info --set title="$1" --edit track:1 --set name="$1" --set flag-default=1
}


# primsa hack for new migration to take effect
alias prisma-ref="rm -rf node_modules/@prisma/ node_modules/.prisma/ && npm i"

# refresh client-component to take effect
alias cc-ref="npm i && npm run build"

alias dist-ref="rm -rf dist && npm run build"


#npm
npm-clean-cache-one(){
  npm cache ls "$1" | xargs npm cache clean
}

