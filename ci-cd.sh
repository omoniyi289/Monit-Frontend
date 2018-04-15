
rsync -vzrh --exclude-from="deploy_exclude.txt" . root@185.130.207.215:/var/www/SMfrontend-Bundle/temp
ssh root@185.130.207.215 <<-EOF
    
    cd /var/www/SMfrontend-Bundle
    mv live/node_modules/ node-mods-bk  #backup node modules
    rm -rf ./backup # Delete previous backup
    mv ./live ./backup # Create new backup
    mv ./temp ./live
    mv node-mods-bk live/node_modules/ # move node modules back
    mkdir ./temp # create new temp directory for next deployment
    cd ./live
    export PATH=/var/lib/jenkins/tools/jenkins.plugins.nodejs.tools.NodeJSInstallation/recent_node/bin/
    
    npm install
    npm run dev
    chmod -R 755 .
    chown -R www-data:www-data .
EOF