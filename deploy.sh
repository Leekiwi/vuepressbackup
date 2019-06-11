#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn build

# 进入到构建输出目录
cd docs/.vuepress/dist

# 提交到历史区，$1 为运行 sh 时的第一个参数
git init
git add -A
git commit -m 'deploy'

# 提交到 master
# git push origin gh-pages:gh-pages
# git push git@github.com:Leekiwi/myvuepress.git master

# 将 dist 文件提交到 gh-pages 分支
git push -f git@github.com:Leekiwi/myvuepress.git master:gh-pages



exit 0