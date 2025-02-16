---
title: Integration flow
sidebar_label: Integration Flow
---


Once FinBox DeviceConnect SDK is initialized, data from the device is sent to the FinBox processing engine against an anonymous `CUSTOMER_ID` which will be the primary key from retrieving any information from the server.

Clients need to call the **Insights API** with `CUSTOMER_ID` to trigger the predictor calculation for a given customer. In case Insights API returns with status `"in_progress"` (meaning data is currently being processed), the client should poll the Insights API with a delay of at least **10 seconds**

An overview of the API calling is shown below

<img src="/img/device_connect_back_end_integration_2.png" alt="Device Connect Backed Integration Workflow" />

1. Call Insights API. If the response status is `"in_progress"`, a callback is registered.
3. Wait for the callback to receive [Insights API Response](/device-connect/rest-api#insights-api-response).

::: tip
The response status will be `"complete"` instead of `"in_progress"` if the results are already computed and returned through callback in the last 15 mins.
:::

Incase we have the `request_id` and we can fetch the [Pre-Computed results](insights-api#pre-computed-results).
