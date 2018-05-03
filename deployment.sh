
rsync -vzrhe "ssh -i /var/lib/jenkins/.ssh/e360_prod_kp2.pem -o StrictHostKeyChecking=no" --exclude-from="deploy_exclude.txt"  . ubuntu@34.246.63.12:/var/www/SMfrontend/temp

ssh -i /var/lib/jenkins/.ssh/e360_prod_kp2.pem -o StrictHostKeyChecking=no ubuntu@34.246.63.12 <<-EOF

    
    cd /var/www/SMfrontend
    #sudo mv ./live/node_modules ./node-mods-bk  #backup node modules
    sudo rm -rf ./backup # Delete previous backup
    sudo mv ./live ./backup # Create new backup
    sudo mv ./temp ./live
    sudo mv ./node-mods-bk ./live/node_modules # move node modules back
    sudo mkdir ./temp # create new temp directory for next deployment
    cd ./live
    #export PATH=/var/lib/jenkins/tools/jenkins.plugins.nodejs.tools.NodeJSInstallation/recent_node/bin/
    #npm install
    #npm run dev
    sudo find dist/ -type f -exec sed -i 's#"/images#"images#g' {} \;
    sudo chmod -R 755 .
    sudo chown -R www-data:www-data .
EOF