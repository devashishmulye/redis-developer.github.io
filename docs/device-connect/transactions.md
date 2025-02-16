# DeviceConnect: Transactions and Accounts

This page is an **extension** to the documentation [here](/device-connect/rest-api) and lists additional **Insights API Endpoints** for fetching captured **Transactions** and **Accounts** information of customers.
​
:::danger IMPORTANT
- Please refer to [Insights API Request](/device-connect/rest-api#insights-api-request) and [Insights API Response](/device-connect/rest-api#insights-api-response) to understand the **request** and **response** structure (including the data key) respectively.
 - It is to be noted that for **Transactions** and **Accounts** APIs, instead of `customer_id`, you have to provide `user_hash` key.
 - `user_hash` can be obtained using List Devices API. It is same as the `device_id` key in the `data` key object, as mentioned [here](/device-connect/transactions#list-devices-api).
:::


## Insights Endpoint Request
| Insights | Endpoint | Request Type | Description | 
| - | - | - | - |
| List Devices | /device-ids | POST | Lists all the devices a customer has logged into |
| Transactions | /transactions | POST | Captured and enriched bank transactions of customer |
| Accounts | /accounts | POST | Captured financial accounts of customer |

## `data` Key

### List Devices API
List Devices API lists the devices that a customer has logged into. We use the keyword `device_id` to denote a unique pair of customers and devices. **It is important to note that two customers using the same device will generate two different device names.**

A sample response for the API is listed below:
```json
{
    "customer_id": "demo_lender_612022",
    "request_id": "d573c4f9-6ad0-4009-ad8b-5fd44e9a17ae",
    "date_requested": "2020-01-06T15:34:15.391554Z",
    "status": "complete",
    "date_processed": "2020-01-06T15:34:15.391554Z",
    "message": "data processed successfully",
    "data": [
        {
            "device_id": "4aba67b51ef8c95bef2dd9f5cd6c0d08",
            "last_opened": "2020-01-06T14:52:52Z",
            "created": "2020-01-06T14:52:51Z",
            "mobile_model": "GOOGLE PIXEL 3A",
            "app_open_count": 1,
            "given_permissions": [
                "contacts_permission",
                "phone_state_permission",
                "location_permission",
                "calendar_permission",
                "accounts_permission",
                "sms_permission",
                "storage_permission"
            ]
        }
    ]
}
```

Each of the objects in the `data` key has the following keys:
- **device_id**: A unique identifier for each device a user has logged into.
- **last_opened**: Last time the user opened the app on this device.
- **created**: UTC time of when the device_id was created.
- **mobile_model**: A clean human-readable name of the model of the device from which the data is collected. Can be displayed to the user. Not suitable to be used in a programme.
- **app_open_count**: The count of invocation of the `createUser` method in the DeviceConnect Android SDK (Refer [here](/device-connect/android#create-user-method)). It is a directional indicator of the number of times the customer has opened the app, though not necessarily the exact number (depends on your Android integration).
- **given_permissions**: The permissions granted by the user on the device. It can have following values in the list:
    - `sms_permission`
    - `calls_permission`
    - `contacts_permission`
    - `location_permission`
    - `phone_state_permission`
    - `storage_permission`
    - `calendar_permission`
    - `accounts_permission`
    - `usage_permission`

:::danger IMPORTANT
- In the **Transactions** and **Accounts** API you need `user_hash` key instead of `customer_id` in the request body.
- `user_hash` key value is the same as `device_id` key value in the **List Devices** API response.
:::

### Transactions API
In the case of transactions API, the `data` key in response holds an array of transaction objects.
​

It is to be noted that **Transactions captured over only the last 6 months are given in
response.**

​
A sample transaction object is listed below:

```json
{
    "transaction_hash": "unique_transaction_hash",
    "tag": "Regular",
    "account_hash": "unique_account_hash",
    "category": "Travel",
    "type": "debit",
    "channel": "card",
    "merchant": "Uber",
    "timeinmilis": 1571732881768,
    "amount": 99.0,
    "servicename": "HDFC",
    "account_number": "HDFC 1234",
    "time": "2019-10-22 13:58:01",
    "is_qr_payment": "True",
    "qr_service_provider": "BHARATPE"
}
```

Each of the transaction objects have the following keys:
- **transaction_hash**: it is a unique identifier for each transaction made by the user. This
doesn’t change for any transaction over time.
- **tag**: We identify certain transactions as special transactions. They can be used to gain a
deeper sense of the user's financial profile. Such transactions are tagged as one of the
below:
    - `Fixed Deposit`
    - `Salary`
    - `Self Transfer`
    - `Credit Card Payment`
    - `Auto Pay`
    - `Refund`
    - `Regular`
- **account_hash**: it is a unique identifier for the account in which the transaction was made.
- **category**: All debit transactions are categorized into one of the following categories to gain a deeper insight into the user’s spending behavior:
    - `Cash`
    - `Transfers`
    - `Other`
    - `Bills`
    - `Entertainment`
    - `eWallet`
    - `Food`
    - `Fuel`
    - `Groceries`
    - `Investments`
    - `Loans`
    - `Medical`
    - `Shopping`
    - `Travel`
- **type**: this indicates the transaction type. It can be `debit` or `credit`.
- **channel**: this indicates the transaction channel. It can be one of the following:
    - `netbanking`
    - `card`
    - `cash`
    - `cheque`
    - `upi`
    - `auto-debit`
- **merchant**: the Point of Sale or Receiving Party in case of a debit transaction
- **servicename**: The service whose message was captured to extract the given transaction. For example, if HDFC Bank sent an SMS to notify a debit, the **servicename** would be HDFC. This
won’t always be the bank that is associated with the transaction.
- **time**: The UTC time at which the transaction message was received by the user's device. It is of the format YYYY-MM-DD HH:MM:SS.
- **timeinmilis**: Time in milliseconds at which the transaction message was received since
epoch
- **amount**: this indicates the monetary amount that the transaction was made for.
- **account_number**: a human-readable account number of the format: `<account company> <last 4 digits of account number>`
- **is_qr_payment**: this indicates whether the transaction came in through a QR Code
- **qr_service_provider**: Name of the QR Code provider

### Accounts API
In the case of accounts API, the data key in response holds an array of account objects.
​

It is to be noted that **Account Information captured over only the last 6 months are given in
response.**
​

A sample account object is listed below:
​
```json
{
    "type": "credit-card",
    "latest_bill_date": "2019-10-13 12:20:00",
    "is_primary": false,
    "company": "KOTAK",
    "last_used_date": "2019-10-13 12:40:01",
    "number": "1234",
    "latest_bill": 40000.00,
    "limit": 43369.53,
    "latest_balance_date": "2019-10-13 12:50:01",
    "active_months_list": ["2019-09", "2019-10"],
    "account_hash": "unique_account_hash",
    "latest_balance": 30500.00
}
```

:::warning IMPORTANT
Some of the keys in response can be null, if not captured or not relevant for the account.
:::

Each of the account objects have the following keys:
- **type**: this indicates the type of account. Can be one of the following:
    - `bank`
    - `ewallet`
    - `debit-card`
    - `credit-card`
- **is_primary**: a boolean value which indicates whether the account is the user's primary account (as per our analysis)
- **company**: name of the bank or institution which issued the account
- **last_used_date**: the UTC date-time of the last recorded activity of that bank account. It is of the format YYYY-MM-DD HH:MM:SS.
- **number**: the last 4 digits of the account number
- **latest_bill**: (only applicable for `credit-card`) The latest bill paid by the user
- **latest_bill_date**: (only applicable for `credit-card`) The UTC date-time of the latest credit card bill paid by the user. It is of the format YYYY-MM-DD HH:MM:SS.
- **limit**: (only applicable for account `credit-card`) The Credit Limit of the account
- **active_months_list**: A list of months in which any activity was done with the account
- **account_hash**: it is a unique identifier for the account that the transaction was made from.
- **latest_balance**: indicates the latest balance in case of `bank`, `ewallet` and `debit-card`, and available limit in case of `credit-card`.
- **latest_balance_date**: The UTC date time at which the latest balance was captured. It is of the format YYYY-MM-DD HH:MM:SS.



## Webhook Integration


FinBox fires a webhook when a user's results are updated. Upon receipt of the webhook, you can query the insights API to fetch these results. 


The webhook payload has the following keys:
- **service**: It indicates the service whose results have been updated. It can either be `accounts` or `transactions`.
- **device_id**: device_id is the unique identifier of the device and customer_id whose results have been updated.
- **customer_id**: customer_id for which result was updated.
- **salt**: A salt is used to authenticate webhook. It is computed basis logic mentioned in the section below


:::warning IMPORTANT
You have to register your webhook address with FinBox. Please get in touch with us for the same.
:::


```json
{
    "service": "transactions",
    "device_id": "f34ee388c56eaf1a0f7915c5ad058b29",
    "customer_id": "89561ea2190946a9",
    "salt": "/+Y459HYwFtWB2656bE5eTvB4NmTSoTmoAyt9SAtwek="
}
```



### Calculating Webhook Salt

Salt is calculated as follows:
1. A = Create MD5 hash of `CUSTOMER_ID`
2. B = Concatenate string of A and `WEBHOOK_SECRET` shared by FinBox.
3. C = Create an SHA-256 hash of B
4. Salt = base64 encoded version of C

Sample code for salt generation in different languages:



<Tabs
  defaultValue="Java"
  values={
      [
    {label: 'Java', value: 'java'},
    {label: 'Python', value: 'python'},
    {label: 'Go', value: 'go'},
  ]}>

  <TabItem value="java">

```java
import java.security.*;
import java.util.*;
import java.io.UnsupportedEncodingException;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.math.BigInteger;
​
​
public class SaltGeneration {
    private static final int HEX_255 = 0xFF;
    private static final String UNICODE_TRANSFORMATIONAL_FORMAT_8_BIT = "UTF-8";
    private static String CUSTOMER_ID = "<CUSTOMER_ID>";
    private static String WEBHOOK_SECRET = "<WEBHOOK_SECRET>";
    
    private static String getSaltForBody() {
        String hashedOutput = getMd5Hash(CUSTOMER_ID);
        String concatString = hashedOutput + WEBHOOK_SECRET;
        String shaOutput = get256Encoded(concatString);
        return shaOutput;
    }
​
​
    private static String getMd5Hash(final String s) {
        try {
            // Create MD5 Hash
            MessageDigest digest = MessageDigest.getInstance("MD5");
            digest.update(s.getBytes(Charset.forName(UNICODE_TRANSFORMATIONAL_FORMAT_8_BIT)));
            byte[] messageDigest = digest.digest();
    
            // Create Hex String
            StringBuilder hexString = new StringBuilder();
            for (byte mDigest : messageDigest) {
                StringBuilder h = new StringBuilder(Integer.toHexString(HEX_255 & mDigest));
                while (h.length() < 2) {
                    h.insert(0, "0");
                }
                hexString.append(h);
            }
            return hexString.toString().toUpperCase();
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        return null;
    }
​
    /**
     * Method converts the string into SHA 256 and returns it
     *
     * @param s String to be 256 encoded
     * @return Converted 256 hash
     */
    private static String get256Encoded(final String text) {
        try {
            MessageDigest digest = MessageDigest.getInstance("SHA-256");
            byte[] hash = digest.digest(text.getBytes(StandardCharsets.UTF_8));
            return Base64.getEncoder().encodeToString(hash);
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        return null;
    }
}
```

</TabItem>
<TabItem value="python" label="Python">

```python
import hashlib, base64

def create_salt(customer_id, webhook_secret):
    """
    Takes customer_id (unique identifier of customer)
    and webhook_secret (shared with FinBox) as input
    and returns salt in response
    """
    customer_hash = hashlib.md5(customer_id.encode('utf-8')).hexdigest().upper()
    intermediate_hash = customer_hash + webhook_secret
    salt_encoded = hashlib.sha256(intermediate_hash.encode('utf-8')).digest()
    salt = base64.b64encode(salt_encoded).decode()
    return salt
```

</TabItem>
<TabItem value="go" label="Go">

```go
import (
	"crypto/md5"
	"crypto/sha256"
	"fmt"
	"encoding/base64"
	"encoding/hex"
	"strings"
)
func GetSaltForCustomer(customerId string, webhookSecret string) string {
    hasher := md5.New()
	hasher.Write([]byte(customerId))
	hexHasher := hex.EncodeToString(hasher.Sum(nil))
	data := strings.ToUpper(hexHasher)+ webhookSecret
	newSha256 := sha256.New()
	newSha256.Write([]byte(data))
    finalData := base64.StdEncoding.EncodeToString(newSha256.Sum(nil))
	return finalData
}
```

</TabItem>
</Tabs>

## Querying by webhook

Once you receive a webhook, you can make a POST request of the `insights` API using the param `source` = `webhook`. This will return the updated data to you instantly. 

`https://insights.finbox.in/staging/accounts?source=webhook`

:::warning IMPORTANT
- You must only use this param once you have received the webhook.
- Including this param bypasses the calculation of results and returns already existing result.
:::


