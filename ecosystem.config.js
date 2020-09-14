module.exports = {
  apps : [{
    script: 'build.sh',
    watch: '.'
  }],

  deploy : {
    production : {
      user : 'docker-proxy',
      host : 'philippec.me',
      ref  : 'origin/master',
      repo : 'git@github.com:Pckool/philippec-nginx.git',
      path : '/var/docker/images/nginx',
      'pre-deploy-local': '',
      'pre-setup': 'npm i -g pm2',
      'post-deploy' : 'pm2 startOrRestart ecosystem.config.js --env production --name nginx-container',
      'pre-deploy': 'mkdir -p /var/docker || mkdir -p /var/docker/images || mkdir -p /var/docker/images/nginx'
    }
  }
};
