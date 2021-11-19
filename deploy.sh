rm -rf build* && 
npm run build && 
zip -r build.zip build && 
sudo scp build.zip mr.medicine:/var/www/html/customer-webapp