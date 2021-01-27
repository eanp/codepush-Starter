/**
 * @format
 */

import { AppRegistry, ToastAndroid } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import React, { Component } from 'react';
import CodePush from 'react-native-code-push'

class Main extends Component {
    constructor(props) {
        super(props);

        CodePush.sync({ installMode: CodePush.InstallMode.IMMEDIATE }, status => {
            switch (status) {
                case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
                    // Alert.alert("Cek Pembaharuan");
                    // ToastAndroid.show('Cek Pembaharuan...', ToastAndroid.SHORT);
                    ToastAndroid.show('Cek Pembaharuan...', CodePush.SyncStatus.CHECKING_FOR_UPDATE);
                    break;
                case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
                    // Alert.alert("Downloading package");
                    // this.setState({ showDownloadingModal: true });
                    ToastAndroid.show('Mendownload Update...', CodePush.SyncStatus.DOWNLOADING_PACKAGE);
                    break;
                case CodePush.SyncStatus.INSTALLING_UPDATE:
                    // Alert.alert("Installing update");
                    // this.setState({ showInstalling: true });
                    ToastAndroid.show('Menginstall Update...', ToastAndroid.SHORT);
                    break;
                case CodePush.SyncStatus.UP_TO_DATE:
                    ToastAndroid.show('Aplikasi Terupdate...', ToastAndroid.SHORT);
                    // Alert.alert("Aplikasi up-to-date");
                    break;
                case CodePush.SyncStatus.UPDATE_INSTALLED:
                    // Alert.alert("Update installed.");
                    // this.setState({ showDownloadingModal: false });
                    ToastAndroid.show('Update Aplikasi Selesai.', ToastAndroid.SHORT);
                    break;
                default:
                    break;
            }
            // },
            // ({ receivedBytes, totalBytes }) => {
            //   this.setState({ downloadProgress: receivedBytes / totalBytes * 100 });
            // }
        });
    }

    render() {
        return (
            <App />
        )
    }
}


AppRegistry.registerComponent(appName, () => Main);
// AppRegistry.registerComponent(appName, () => App);
