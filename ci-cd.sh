#!/bin/bash

##### CI #####
composer install
php artisan key:generate --env=testing
#php artisan migrate --force
#./vendor/bin/phpunit #No tests yet

#### CD ####
rsync -vzrh --exclude-from="deploy_exclude.txt" . root@185.130.207.215:/var/www/SMfrontend-Bundle/temp

ssh root@185.130.207.215 <<-EOF
    cd /var/www/SMfrontend-Bundle
    rm -rf ./backup # Delete previous backup
    mv ./live ./backup # Create new backup
    mv ./temp ./live
    mkdir ./temp # create new temp directory for next deployment
    cp ./lara-config/.env ./live
    cd ./live
    composer install --no-dev --optimize-autoloader --no-plugins --no-scripts
    composer update
    php artisan key:generate
    #php artisan route:cache resolve closure based routes before caching
    php artisan migrate --force
    chmod -R 755 .
    chown -R www-data:www-data .
EOF