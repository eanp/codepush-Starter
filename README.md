<h1 align="center">React Native Code Push Starter</h1>

<p align="center">

</p>

Code Push Starter (react native android)

## Setup
1. Type `npm install -g code-push-cli` in the terminal or command prompt to install code-push cli
2. Type `code-push app add yourApp` in the terminal or command prompt to register your App and save Key from Codepush
3. Type `npm install --save react-native-code-push@latest` in the terminal or command prompt to install Codepush in your App
4. Check file `index.js` for check example how to import codepush  

## Settings
1. Add this in file `settings.gradle` 
```
include ':app', ':react-native-code-push'
project(':react-native-code-push').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-code-push/android/app')
```
* Set your `gradle.properties` example 
```
MYAPP_UPLOAD_STORE_FILE=my-upload-key.keystore
MYAPP_UPLOAD_KEY_ALIAS=my-key-alias
MYAPP_UPLOAD_STORE_PASSWORD=123456
MYAPP_UPLOAD_KEY_PASSWORD=123456
```
2. Add this in file `app/build.gradle` 
```
apply from: "../../node_modules/react-native/react.gradle"
apply from: "../../node_modules/react-native-code-push/android/codepush.gradle"
```
* Change this line to get minimal size app
```
def enableSeparateBuildPerCPUArchitecture = true
def enableProguardInReleaseBuilds = true
```
* remember your version code and version name
```
versionCode 1
versionName "1.0.1"
```
* add release config settings
```
 signingConfigs {
        debug {
           ...
        }
        release {
            if (project.hasProperty('MYAPP_UPLOAD_STORE_FILE')) {
                storeFile file(MYAPP_UPLOAD_STORE_FILE)
                storePassword MYAPP_UPLOAD_STORE_PASSWORD
                keyAlias MYAPP_UPLOAD_KEY_ALIAS
                keyPassword MYAPP_UPLOAD_KEY_PASSWORD
            }
        }
    }
```
3. add code push line on `app/main/res/values/string.xml`
```
<resources>
    ...
    <string moduleConfig="true" name="CodePushDeploymentKey">Your Deployment Key(Prod/Staging)</string>
</resources>
```
4. add this line on  `app/src/main/java/com/.../MainApplication.java`
```
import com.microsoft.codepush.react.CodePush;
```
```
public class MainApplication extends Application implements ReactApplication {
  private final ReactNativeHost mReactNativeHost =
      new ReactNativeHost(this) {
       ...
        @Override
        protected String getJSBundleFile() {
            return CodePush.getJSBundleFile();
        }
        ...
      };
    ...
  }
}
```

## Code push command
* dashboard codepush [appcenter](http://appcenter.ms)
* to update your app
```
code-push release-react yourAppname android -t "1.0.1" -d Production
```
## Note
* version name must be same when your build and your update codepush
* codepush not working if you add file except javascript and image


## About

[My Github](http://github.com/eanp)