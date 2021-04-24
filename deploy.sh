#! /bin/sh
#Script to build and deploy a Create React App to AWS
git add .
git commit
git push
npm run build
aws s3 sync build/ s3://thesis-bucket-react/CRA
