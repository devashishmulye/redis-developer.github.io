---
title: Overview of Uploading
sidebar_label: Overview of Uploading
---

import RedisCard from '@site/src/theme/RedisCard';


Uploading bank statements is the first step involved in the BankConnect Integration flow.

<img src="/img/upload_statements_2.png" alt="Upload Statements" />

As shown in the diagram there are two ways you can go ahead with this step:

## Using the Client SDK
As in the lower part of the diagram, Users can submit a PDF statement or enter **Net Banking** credentials in the Client SDK that resides in your Web / Android Application. While initializing this SDK you have to pass `link_id`, and the Client SDK will talk with the BankConnect Backend. On successful uploading of the statement, your application will get a callback / redirect with an `entity_id`. Client SDK is available for the following:

## Integrate on mobile or web

<div class="row">

<div class="col">
    <RedisCard 
        title="Android" 
        img="/img/android.png"
        description="Integrate into your iOS app" 
        page="/bank-connect/android-client"
        />
</div>


<div class="col">
    <RedisCard 
        title="React Native" 
        img="/img/React.png"
        description="Integrate it on your web or mobile app" 
        page="/bank-connect/react"
        />
</div>  

</div>

<div class="row">

<div class="col">
    <RedisCard 
        title="Javascript SDK" 
        img="/img/JS.png"
        description="Integrate into your iOS app" 
        page="/bank-connect/javascript-client"
        />
</div>


<div class="col"> <br></br></div>
</div>

## Integrate directly from your server

As depicted in the upper part of the diagram, the User submits a PDF statement, which through some journey reaches your server. From there you can make use of [BankConnect REST APIs](/bank-connect/upload-rest-api) to submit the statement. Alternatively you can also make use of server-side libraries like our [Python Library](/bank-connect/upload-python) to do this step.

<div class="row">

 <div class="col">
    <RedisCard 
        title="Rest APIs" 
        img="/img/API.png"
        description="Leverage our REST APIs and build your UI" 
        page="/bank-connect/rest-api"
        />
 </div>

 <div class="col">
    <RedisCard 
        title="Python" 
        img="/img/python.png"
        description="Leverage our Python library and build your  UI" 
        page="/bank-connect/upload-python"
        />
 </div>
 </div>

After uploading the statement, you'll get the identity information and an `entity_id` in the response. Identity information includes things like account holder name, account number, time period etc. which can be used for verifying the user or checking if the statement was of the time period you required.