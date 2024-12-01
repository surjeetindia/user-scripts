#Surjeet GIT
export CI_JOB_TOKEN=glpat-atfAA2RJCUXBCPy8DAL1
export GITLAB_TOKEN=glpat-atfAA2RJCUXBCPy8DAL1
export CI_JOB_TOKEN_CI_CD=glpat-p3Wp2nME-7fq8qqHuZrz

export CI_JOB_TOKEN_ANKIT=glpat-f5YaKxwhih3VHddFgies
export CI_JOB_TOKEN_ANKIT1=glpat-VFkkWg913Uf56CsRRGEQ
#system




#git
alias glog="git log --oneline --graph -20"









# SURJEET common
rm-r(){
  sudo rm -rf "$1"
}

alias of=nautilus

check-address(){
  netstat -tulpn | grep --color :$1
}

alias chkadd='sudo netstat -tulpn | grep LISTEN'

# SURJEET terminal
bind Space:magic-space
alias r='fc -s'



# SURJEET php
alias apache-enable-on-boot='sudo systemctl enable apache2'
alias apache-disable-on-boot='sudo systemctl disable apache2'

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
gbc() {
  git ls-remote origin $(git branch --show-current)
}
gbp() {
  git push --set-upstream origin $(git branch --show-current)
}

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
alias dockrst="docker-compose restart"


alias docker-upd="docker-compose up -d"
alias docker-upb="docker-compose up --force-recreate --build -V"
docker-upb1() {
  sudo docker-compose up --force-recreate --build -V $1
}
alias docker-up-network="docker network create dev-travel.com"
alias docker-up-proxy="docker network create dev-travel.com | docker run -d --name dev-travel-network -p 80:80 -p 443:443 --restart always --net dev-travel.com -v /var/run/docker.sock:/tmp/docker.sock:ro registry.dyninno.net/docker/nginx-proxy:latest"
alias docker-down-proxy="docker rm -f dev-travel-network"

alias docker-clear-c="docker rm $(docker ps -aq)"

alias dockps="docker-compose ps"

docksh() {
  docker-compose ps
  read num
  docker exec -it $(docker-compose ps -q | head -$num | tail -1) sh
}


dockrst1() {
  docker-compose ps --services
  read num
  docker-compose restart $(docker-compose ps --services | head -$num | tail -1)
}


#source /home/spv/applications/fancy-bash-promt.sh

# mkvpropedit
mkvpropupdate(){
  mkvpropedit "$1" --edit info --set title="$1" --edit track:1 --set name="$1" --set flag-default=1
}


# primsa hack for new migration to take effect
alias prisma-ref="rm -rf node_modules/@prisma/ node_modules/.prisma/ && npm i"
alias prisma-pref="rm -rf node_modules/.pnpm/@prisma* && pnpm i"

# refresh client-component to take effect
alias cc-ref="npm i && npm run build"

alias dist-ref="rm -rf dist && npm run build"


#npm
npm-clean-cache-one(){
  npm cache ls "$1" | xargs npm cache clean
}


gh(){
  # omits the error message 2>/dev/null
  # cheks for empty value
  if [[ -z "$1" ]];
  then
    # default renaming back to .husky
    mv .husky/.commit-msg .husky/commit-msg 2>/dev/null
  else
    # renaming to 1.husky
    mv .husky/commit-msg .husky/.commit-msg 2>/dev/null
  fi
}

husky-d(){
  mv .husky 1.husky
}

husky-e(){
  mv 1.husky .husky
}


cc-clear-gen(){
  sudo rm -rf lib rest-client-generator/out cc-test-pkg 
}

cc-gen-openapi(){
  cc-clear-gen
  cd rest-client-generator
  sudo mkdir out
  docker run --rm -v ${PWD}:/local openapitools/openapi-generator-cli:v5.0.1 generate \
    -i $2 \
    -g typescript-nestjs \
    -o /local/out \
    -t /local/templates/nestjs \
    --additional-properties=variableNamingConvention=camelCase \
    --additional-properties=invokerPackage=Dyninno\\RestClients\\$1 \
    --git-host=gitlab.dyninno.net \
    --git-repo-id=rest-client-$1 \
    --git-user-id=common-libraries
  sudo mkdir --parents ../src
  sudo cp -r out/* ../src
  cd ..
  cc-ref
}

cc-test-pkg(){
  testPkg=cc-test-pkg
  rm -rf $testPkg && mkdir $testPkg && cp -r lib jest.config.js README.md package.json $testPkg
}

cc-link-test-pkg(){
  testPkg=cc-test-pkg
  rm -rf $testPkg
  cp -r $1/$testPkg $testPkg && cd $testPkg && npm link && npm list -g && cd ..
}


cc-unlink-test-pkg(){
  testPkg=cc-test-pkg
  npm unlink -g $1 && sudo rm -rf $testPkg
}

