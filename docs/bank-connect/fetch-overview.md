---
title: Fetching data
sidebar_label: Fetching data
---

Fetching enriched data is the second step involved in the BankConnect Integration flow. To fetch enriched data you need to have `entity_id` with you.

<img src="/img/webhook.png" alt="Fetching Enriched Data" style={{width:"80%", height:"80%"}} />

As shown in the diagram there are two ways you can go ahead with this step:

## Polling

Listed as **A1** in the diagram is the polling mechanism. You can keep polling the **Transactions API** every 2 seconds until the `progress` field indicates the status as `completed`. Once the status becomes `completed`, you can go ahead with step **B** and fetch the enriched data like Salary, Transactions, etc. Fetching of transactions can be done using our [REST API](/bank-connect/rest-api) or [Python Library](/bank-connect/python).

## Webhook

Other the polling, you can also use the **Webhook** approach (**A2**), where our server will inform you as soon as the transaction extraction process is completed. To make sure this works well you have to ensure that the webhook endpoint is always available. In case its not available you can go ahead with the previous approach or fetch all payloads for a given `link_id`. More on this is listed in [Webhook](/bank-connect/webhook) section.
Once you have received the webhook, you can go ahead with fetching the enriched data (**B**).
