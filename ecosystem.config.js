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
      'pre-setup': 'mkdir /var/docker || mkdir /var/docker/images || mkdir /var/docker/images/nginx'
    }
  }
};
