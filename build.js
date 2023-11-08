const fs = require('fs');
const currentVersion = '1.2';
const podsFile = `./ios/App/Pods/Target\ Support\ Files/Pods-App/Pods-App-frameworks.sh`;
const infoPlist = `./ios/App/App/Info.plist`;

(() => {
    console.log('Updating pods file...');
    let p = fs.readFileSync(podsFile).toString().split('source="$(readlink "${source}")"');
    p.length === 2 && fs.writeFileSync(podsFile, p.join('source="$(readlink -f "${source}")"'));
})();
(() => {
    console.log('Updating version...');
    fs.writeFileSync(infoPlist, fs.readFileSync(infoPlist).toString().split(new RegExp(`<string>${currentVersion}.*</string>`)).join(`<string>${currentVersion}.${Math.round(new Date().getTime()/1000.0)}</string>`))
})();
