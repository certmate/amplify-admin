TODO Export Data = Vehicles, Certs
TODO Push Notifs - https://enappd.com/blog/firebase-push-notification-in-ionic-react-capacitor/111/
TODO Favourite Certs, Vehicles etc. favourites go top
TODO Offline Mode
TODO Import vehicle checklists
TODO Download cert - lite like covid qr
TODO Signout user once and resign in on first create
TODO Create company for user pre-signup - auto select company
TODO Driver workflow > prompt to update account
TODO Save signature on submit
TODO Self declaration - no checklist, no inspector
TODO Fleets read only
TODO Scan QR Code > Open Certmate > New route without login

TODO Secure lambdas with accessToken check - https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-using-tokens-verifying-a-jwt.html

Note - Capacitor
1.  Add ios device to Provisioning Profile
2.  Give XCode full disk access
3.  Delete ios folder and npx cap add ios if things seem weird.
4.  ios build fail - https://stackoverflow.com/questions/75902942/xcode-archive-command-fails-with-ionic-capacitor-and-react-command-phasescript
/ios/App/Pods/Target Support Files/Pods-App/Pods-App-frameworks.sh

And then replace:

source="$(readlink "${source}")"

with:

source="$(readlink -f "${source}")"

5. /ios/App/App/Info.plist
    CFBundleShortVersionString
    CFBundleVersion