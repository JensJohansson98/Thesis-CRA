#! /bin/sh
#Script to build and deploy a Create React App to AWS
npm run build
git add .
git commit
git push
aws s3 sync build/ s3://thesis-bucket-react/CRA
