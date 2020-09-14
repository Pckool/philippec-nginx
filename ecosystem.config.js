module.exports = {
  apps : [{
    script: 'build.sh',
    watch: '.'
  }],

  deploy : {
    production : {
      user : 'root',
      host : 'philippec.me',
      ref  : 'origin/master',
      repo : 'git@github.com:Pckool/philippec-nginx.git',
      path : '/var/docker/images/nginx',
      'pre-deploy-local': '',
      'post-deploy' : 'pm2 reload ecosystem.config.js --env production',
      'pre-deploy': 'mkdir -p /var/docker || mkdir -p /var/docker/images || mkdir -p /var/docker/images/nginx'
    }
  }
};
