# ~/.bashrc: executed by bash(1) for non-login shells.
# see /usr/share/doc/bash/examples/startup-files (in the package bash-doc)
# for examples

# If not running interactively, don't do anything
case $- in
    *i*) ;;
      *) return;;
esac

# don't put duplicate lines or lines starting with space in the history.
# See bash(1) for more options
HISTCONTROL=ignoreboth

# append to the history file, don't overwrite it
shopt -s histappend

# for setting history length see HISTSIZE and HISTFILESIZE in bash(1)
HISTSIZE=1000
HISTFILESIZE=2000

# check the window size after each command and, if necessary,
# update the values of LINES and COLUMNS.
shopt -s checkwinsize

# If set, the pattern "**" used in a pathname expansion context will
# match all files and zero or more directories and subdirectories.
#shopt -s globstar

# make less more friendly for non-text input files, see lesspipe(1)
[ -x /usr/bin/lesspipe ] && eval "$(SHELL=/bin/sh lesspipe)"

# set variable identifying the chroot you work in (used in the prompt below)
if [ -z "${debian_chroot:-}" ] && [ -r /etc/debian_chroot ]; then
    debian_chroot=$(cat /etc/debian_chroot)
fi

# set a fancy prompt (non-color, unless we know we "want" color)
case "$TERM" in
    xterm-color|*-256color) color_prompt=yes;;
esac

# uncomment for a colored prompt, if the terminal has the capability; turned
# off by default to not distract the user: the focus in a terminal window
# should be on the output of commands, not on the prompt
#force_color_prompt=yes

if [ -n "$force_color_prompt" ]; then
    if [ -x /usr/bin/tput ] && tput setaf 1 >&/dev/null; then
	# We have color support; assume it's compliant with Ecma-48
	# (ISO/IEC-6429). (Lack of such support is extremely rare, and such
	# a case would tend to support setf rather than setaf.)
	color_prompt=yes
    else
	color_prompt=
    fi
fi

if [ "$color_prompt" = yes ]; then
    PS1='${debian_chroot:+($debian_chroot)}\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\$ '
else
    PS1='${debian_chroot:+($debian_chroot)}\u@\h:\w\$ '
fi
unset color_prompt force_color_prompt

# If this is an xterm set the title to user@host:dir
case "$TERM" in
xterm*|rxvt*)
    PS1="\[\e]0;${debian_chroot:+($debian_chroot)}\u@\h: \w\a\]$PS1"
    ;;
*)
    ;;
esac

# enable color support of ls and also add handy aliases
if [ -x /usr/bin/dircolors ]; then
    test -r ~/.dircolors && eval "$(dircolors -b ~/.dircolors)" || eval "$(dircolors -b)"
    alias ls='ls --color=auto'
    #alias dir='dir --color=auto'
    #alias vdir='vdir --color=auto'

    alias grep='grep --color=auto'
    alias fgrep='fgrep --color=auto'
    alias egrep='egrep --color=auto'
fi

# colored GCC warnings and errors
#export GCC_COLORS='error=01;31:warning=01;35:note=01;36:caret=01;32:locus=01:quote=01'

# some more ls aliases
alias ll='ls -alF'
alias la='ls -A'
alias l='ls -CF'

# Add an "alert" alias for long running commands.  Use like so:
#   sleep 10; alert
alias alert='notify-send --urgency=low -i "$([ $? = 0 ] && echo terminal || echo error)" "$(history|tail -n1|sed -e '\''s/^\s*[0-9]\+\s*//;s/[;&|]\s*alert$//'\'')"'

# Alias definitions.
# You may want to put all your additions into a separate file like
# ~/.bash_aliases, instead of adding them here directly.
# See /usr/share/doc/bash-doc/examples in the bash-doc package.

if [ -f ~/.bash_aliases ]; then
    . ~/.bash_aliases
fi

# enable programmable completion features (you don't need to enable
# this, if it's already enabled in /etc/bash.bashrc and /etc/profile
# sources /etc/bash.bashrc).
if ! shopt -oq posix; then
  if [ -f /usr/share/bash-completion/bash_completion ]; then
    . /usr/share/bash-completion/bash_completion
  elif [ -f /etc/bash_completion ]; then
    . /etc/bash_completion
  fi
fi

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion











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


