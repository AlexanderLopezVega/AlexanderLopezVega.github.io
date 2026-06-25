# Build
ng build --configuration production

# Deploy
cd dist/my-website

mv browser/* ./
rmdir browser

git init
git branch -M gh-pages
git add .
git commit -m "Deploy"

git remote add origin git@github.com:AlexanderLopezVega/AlexanderLopezVega.github.io.git
git push -f origin gh-pages