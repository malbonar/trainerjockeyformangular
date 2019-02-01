base href in index.html is set to '/' (so works locally, is set to different prod value below)
build with 'ng build --prod --base-href="/trainerjockeyformangular/"
then deploy with 'ngh'
last command comes from package angular-cli-ghpages

GIT:
git add .
git commit -m "initiasl commit"
git remote add origin https://github.com/<name>/trainerjockeyformangular.git
git remote -v
git push origin master
