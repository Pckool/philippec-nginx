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
      repo : 'GIT_REPOSITORY',
      path : 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy' : 'pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
