---
title: Flutter
sidebar_label: Flutter
---


Device Connect Flutter SDK is used to collect anonymised non-PII data from the devices of the users after taking explicit user consent.


## Requirements

Device Connect Flutter SDK works on Android 5.0+ (API level 21+), on Java 8+ and AndroidX. In addition to the changes, enable desugaring to support older versions.

<Tabs
  defaultValue="kotlin"
  values={[
    {label: 'Kotlin', value: 'kotlin'},
    {label: 'Groovy', value: 'groovy'}
  ]}>

  <TabItem value="kotlin">

```kotlin
android {
    ...
    defaultConfig {
        ...
        // Minimum 5.0+ devices
        minSdkVersion(21)
        ...
    }
    ...
    compileOptions {
        // Flag to enable support for the new language APIs
        coreLibraryDesugaringEnabled = true
        // Sets Java compatibility to Java 8
        sourceCompatibility = JavaVersion.VERSION_1_8
        targetCompatibility = JavaVersion.VERSION_1_8
    }
    // For Kotlin projects
    kotlinOptions {
        jvmTarget = "1.8"
    }
}

dependencies {
    coreLibraryDesugaring("com.android.tools:desugar_jdk_libs:1.1.5")
}
```

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
android {
    ...
    defaultConfig {
        ...
        // Minimum 5.0+ devices
        minSdkVersion 21
        ...
    }
    ...
    compileOptions {
        // Flag to enable support for the new language APIs
        coreLibraryDesugaringEnabled true
        // Sets Java compatibility to Java 8
        sourceCompatibility JavaVersion.VERSION_1_8
        targetCompatibility JavaVersion.VERSION_1_8
    }
    // For Kotlin projects
    kotlinOptions {
        jvmTarget = "1.8"
    }
}

dependencies {
    coreLibraryDesugaring 'com.android.tools:desugar_jdk_libs:1.1.5'
}
```

</TabItem>
</Tabs>


## Add Plugin

Specify the following in `local.properties` file:
  ```
  ACCESS_KEY=<ACCESS_KEY>
  SECRET_KEY=<SECRET_KEY>
  DC_SDK_VERSION=<RM_SDK_VERSION>
  COMMON_SDK_VERSION=<COMMON_SDK_VERSION>
  COMMON_FLAVOR=<COMMON_FLAVOR>
  LOGGER_SDK_VERSION=<LOGGER_SDK_VERSION>
  ```

Add plugin dependency in `pubspec.yaml` file:
  ```yml
  finbox_dc_plugin: any
  ```

:::warning NOTE
Following will be shared by FinBox team at the time of integration:
- `ACCESS_KEY`
- `SECRET_KEY`
- `DC_SDK_VERSION`
- `COMMON_SDK_VERSION`
- `COMMON_FLAVOR`
- `LOGGER_SDK_VERSION`
- `CLIENT_API_KEY`
:::


## Create User

Call `FinBoxDcPlugin.createUser` method to create the user. It takes Client Api Key and Customer Id as the arguments.

:::danger IMPORTANT
Please make sure `CUSTOMER_ID` is **not more than 64** characters and is **alphanumeric** (with no special characters). Also it should never `null` or a blank string `""`.
:::

  ```dart
  static String _deviceConnectValue = "";

    Future _loadDC() async {
      try {
        _deviceConnectValue = await FinBoxDcPlugin.createUser("CLIENT_API_KEY", "CUSTOMER_ID");
      } on PlatformException catch (e) {
        _deviceConnectValue = 'Failed to fetch data';
        print(e.message);
      }
    }
  ```
As success result, you will get an 'accessToken'

