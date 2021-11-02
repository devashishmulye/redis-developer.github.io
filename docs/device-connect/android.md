---
title: Android SDK
sidebar_label: Android SDK
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# DeviceConnect: Android
Device Connect Android SDK is used to collect anonymised non-PII data from the devices of the users after taking explicit user consent.

<div class="embed-container">
<iframe src="https://www.youtube.com/embed/SfzGylmUVpY" title="Device Connect Data Sync" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Requirements

Device Connect Android SDK works on Android 5.0+ (API level 21+), on Java 8+ and AndroidX. In addition to the changes, enable desugaring to support older versions.

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

## Adding Dependency
In the project level `build.gradle` file, add the repository URLs to all `allprojects` block.

<Tabs
  defaultValue="kotlin"
  values={[
    {label: 'Kotlin', value: 'kotlin'},
    {label: 'Groovy', value: 'groovy'}
  ]}>

  <TabItem value="kotlin">

```kotlin
maven {
    setUrl("s3://risk-manager-android-sdk/artifacts")
    credentials(AwsCredentials::class) {
        accessKey = <ACCESS_KEY>
        secretKey = <SECRET_KEY>
    }
    content {
        includeGroup("in.finbox")
    }
}
```

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
maven {
    url "s3://risk-manager-android-sdk/artifacts"
    credentials(AwsCredentials) {
        accessKey = <ACCESS_KEY>
        secretKey = <SECRET_KEY>
    }
    content {
        includeGroup("in.finbox")
    }
}
```

</TabItem>
</Tabs>

Now add the dependency to module level `build.gradle.kts` or `build.gradle` file:

<Tabs
  defaultValue="kotlin"
  values={[
    {label: 'Kotlin', value: 'kotlin'},
    {label: 'Groovy', value: 'groovy'}
  ]}>

  <TabItem value="kotlin">

```kotlin
implementation("in.finbox:mobileriskmanager:<DC_SDK_VERSION>:parent-release@aar") {
    isTransitive = true
}
implementation("in.finbox:common:<COMMON_SDK_VERSION>:<COMMON_FLAVOR>-release@aar") {
    isTransitive = true
}
implementation("in.finbox:logger:<LOGGER_SDK_VERSION>:parent-release@aar") {
    isTransitive = true
}
```

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
implementation('in.finbox:mobileriskmanager:<DC_SDK_VERSION>:parent-release@aar') {
    transitive = true
}
implementation ('in.finbox:common:<COMMON_SDK_VERSION>:<COMMON_FLAVOR>-release@aar') {
    transitive = true
}
implementation ('in.finbox:logger:<LOGGER_SDK_VERSION>:parent-release@aar') {
    transitive = true
}
```

</TabItem>
</Tabs>

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

Call `createUser` method to create the user. It takes Client Api Key and Customer Id as the arguments.

:::danger IMPORTANT
Please make sure `CUSTOMER_ID` is **not more than 64** characters and is **alphanumeric** (with no special characters). Also it should never `null` or a blank string `""`.
:::

The response to this method (success or failure) can be captured using the callback `FinBoxAuthCallback`.

<Tabs
  defaultValue="kotlin"
  values={[
    {label: 'Kotlin', value: 'kotlin'},
    {label: 'Java', value: 'java'}
  ]}>

  <TabItem value="kotlin">

```kotlin
FinBox.createUser("CLIENT_API_KEY", "CUSTOMER_ID",
    object : FinBox.FinBoxAuthCallback {
        override fun onSuccess(accessToken: String) {
            // Authentication is success
        }
        
        override fun onError(@FinBoxErrorCode errorCode: Int) {
            // Authentication failed
        }
    })
```

</TabItem>
<TabItem value="java" label="Java">

```java
FinBox.createUser("CLIENT_API_KEY", "CUSTOMER_ID",
    new FinBox.FinBoxAuthCallback() {
        @Override
        public void onSuccess(@NonNull String accessToken) {
            // Authentication is success
        }

        @Override
        public void onError(@FinBoxErrorCode int error) {
            // Authentication failed
        }
    });
```

</TabItem>
</Tabs>

You can read about the errors in the [Error Codes](/device-connect/error-codes.html) section.

## Start Periodic Sync

This is to be called only on a successful response to `createUser` method's callback. On calling this the syncs will start for all the data sources configured as per permissions. The method below syncs data in the background at regular intervals:

<Tabs
  defaultValue="kotlin"
  values={[
    {label: 'Kotlin', value: 'kotlin'},
    {label: 'Java', value: 'java'}
  ]}>

  <TabItem value="kotlin">

```kotlin
val finbox = FinBox()
finbox.startPeriodicSync()
```

</TabItem>
<TabItem value="java" label="Java">

```java
FinBox finbox = new FinBox();
finbox.startPeriodicSync();
```

</TabItem>
</Tabs>

## Match Details on Device

Device matching enables additional pattern recognition to match email, phone numbers and name. The matching happens on the device and the user phone numbers, email addresses won't leave the device.

Create the builder by passing email address, phone number and name of the customer.

<Tabs
  defaultValue="kotlin"
  values={[
    {label: 'Kotlin', value: 'kotlin'},
    {label: 'Java', value: 'java'}
  ]}>

  <TabItem value="kotlin">



```kotlin
val deviceMatch = DeviceMatch.Builder().apply {
    setEmail("useremail@gmail.com")
    setPhone("User Name")
    setName("9999999999")
}.build()
```

</TabItem>
<TabItem value="java" label="Java">

```java
final DeviceMatch.Builder builder = new DeviceMatch.Builder();
builder.setEmail("useremail@gmail.com");
builder.setName("Full Name");
builder.setPhone("9999999999");
final DeviceMatch deviceMatch = builder.build();
```

</TabItem>
</Tabs>


Once the in-device values are set, call `setDeviceMatch` before starting the syncs.

<Tabs
  defaultValue="kotlin"
  values={[
    {label: 'Kotlin', value: 'kotlin'},
    {label: 'Java', value: 'java'}
  ]}>

  <TabItem value="kotlin">

```kotlin
finBox.setDeviceMatch(deviceMatch)
```

</TabItem>
<TabItem value="java" label="Java">

```java
finBox.setDeviceMatch(deviceMatch);
```

</TabItem>
</Tabs>

:::tip TIP
For Device Match to work at full potential, the SDK expects `android.permission.READ_CONTACTS`, `android.permission.GET_ACCOUNTS`, `android.permission.READ_SMS` to be accepted by the user.
:::

## Forward Notifications to SDK

In certain cases, FinBox server often requests critical data from SDK directly (other than scheduled sync period), to make sure this works it is required to forward FCM Notifications to SDK.

Add the following lines inside the overridden `onMessageReceived` method available in the service that extends `FirebaseMessagingService`.

<Tabs
  defaultValue="kotlin"
  values={[
    {label: 'Kotlin', value: 'kotlin'},
    {label: 'Java', value: 'java'}
  ]}>

  <TabItem value="kotlin">

```kotlin
if (MessagingService.forwardToFinBoxSDK(remoteMessage.data)) {
    val firebaseMessagingService = MessagingService()
    firebaseMessagingService.attachContext(this)
    firebaseMessagingService.onMessageReceived(remoteMessage)
} else {
    // Rest of your FCM logic
}
```

</TabItem>
<TabItem value="java" label="Java">

```java
if(MessagingService.forwardToFinBoxSDK(remoteMessage.getData())) {
    final MessagingService firebaseMessagingService = new MessagingService();
    firebaseMessagingService.attachContext(this);
    firebaseMessagingService.onMessageReceived(remoteMessage);
} else {
    // Rest of your FCM logic
}
```

</TabItem>
</Tabs>

## Multi-Process Support

DeviceConnect uses a content provider to auto initialize the SDK. The limitation with the OS is that content providers are only initialized once in a **multi-process application** and from the main process. For this reason, any calls to the SDK from other processes will lead to unstable behavior.

In case, you want to use the SDK from a process other than the main process, follow the two steps mentioned below to initialize the SDK.

### Remove the Content Provider

Remove the content provider that auto initializes the SDK from the Android Manifest file.
```xml
<provider
    android:name="in.finbox.mobileriskmanager.init.AutoInitProvider"
    android:authorities="in.finbox.lenderapplication.riskmanagerprovider"
    android:enabled="true"
    android:exported="false"
    tools:node="remove" />
```
### Initialize the SDK

Initialize the FinBox SDK in the `onCreate` method of Application class.

<Tabs
  defaultValue="kotlin"
  values={[
    {label: 'Kotlin', value: 'kotlin'},
    {label: 'Java', value: 'java'}
  ]}>

  <TabItem value="kotlin">

```kotlin
FinBox.initLibrary(this)
```

</TabItem>
<TabItem value="java" label="Java">

```java
FinBox.initLibrary(this);
```

</TabItem>
</Tabs>

## Cancel Periodic Syncing

If you have already set up the sync for the user data, you can cancel it any time by the following code:

<Tabs
  defaultValue="kotlin"
  values={[
    {label: 'Kotlin', value: 'kotlin'},
    {label: 'Java', value: 'java'}
  ]}>

  <TabItem value="kotlin">

```kotlin
finbox.stopPeriodicSync()
```

</TabItem>
<TabItem value="java" label="Java">

```java
finbox.stopPeriodicSync();
```

</TabItem>
</Tabs>

## Handle Sync Frequency

By default sync frequency is set to **8 hours**, you can modify it by passing preferred time **in seconds** as an argument to `setSyncFrequency` method once the user is created.

## Reset User Data

In case the user data needs to be removed to re-sync the entire data, use the method `resetData`.

<Tabs
  defaultValue="kotlin"
  values={[
    {label: 'Kotlin', value: 'kotlin'},
    {label: 'Java', value: 'java'}
  ]}>

  <TabItem value="kotlin">

```kotlin
finbox.resetData()
```

</TabItem>
<TabItem value="java" label="Java">

```java
finbox.resetData();
```

</TabItem>
</Tabs>





