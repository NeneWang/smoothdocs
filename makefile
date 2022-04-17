PAGE=http://smooth.l0l.in/
FTP_HOST=wngnelson.com
FTP_USER=u851203827.smoothdeploy
FTP_PASSWORD=Smooth448!
# Requrements: git-ftp, yarn, node

main: build-commit ft-push


build-commit:
	npx docusaurus build
	git add --all
	git commit -m "Production update | ${v}"	
	git push origin HEAD

build-commit-donpush:
	yarn install
	yarn build
	git add --all
	git commit -m "Production update | ${v}"


merge-to-deployment:
	git checkout deployment
	git pull
	git merge master
	git push origin HEAD
	git checkout master


ft-push:
	git ftp push 
	echo "open in https://smooth.l0l.in" && git log -n 2
	
ft-configpush:
	git config git-ftp.url ftp://ftp.${FTP_HOST}
	git config git-ftp.user ${FTP_USER}
	git config git-ftp.password ${FTP_PASSWORD}
	git config git-ftp.syncroot build/
	git ftp push --force

ftpinit:
	git config git-ftp.url ftp://ftp.${FTP_HOST}
	git config git-ftp.user ${FTP_USER}
	git config git-ftp.password ${FTP_PASSWORD}
	git config git-ftp.syncroot build/
	git ftp init --force

first-deploy:
	make ftpinit
	git ftp push

cap:
	git add --all
	git commit -m "${m}"
	git push origin HEAD
	git log -n 2