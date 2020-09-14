module.exports = {
  apps : [{
    name: 'nginx',
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
      'post-deploy' : './destroy.sh || pm2 startOrRestart ecosystem.config.js --env production -l /var/docker/images/nginx/.logs',
      'pre-deploy': 'mkdir -p /var/docker || mkdir -p /var/docker/images || mkdir -p /var/docker/images/nginx'
    }
  }
};
