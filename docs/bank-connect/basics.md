---
title: BankConnect Overview
sidebar_label: Basics
---

One must be familiar with following terms before starting with BankConnect Integration Process:

<img src="/img/basic_terms_2.png" alt="Basic Terms" />

## Entity
A User is referred to as an **Entity** in BankConnect. It could be an individual or a company. FinBox refers to an entity with a unique identifier called `entity_id`.

## Account
Every entity can have multiple bank accounts in the same or different banks. These bank accounts are referred to as simply **Accounts** in BankConnect. FinBox refers to each account of an entity using a unique identifier, `account_id`.

## Statement
Now, every account can have multiple bank statements. These statements can belong to different time periods and can submitted directly or using net banking mode, over a period for a given entity. Each statement is referred using a unique identifier called `statement_id`.

When multiple statements are uploaded against an entity, BankConnect automatically recognizes the bank account and assigns the `account_id` to the statement.

## Link ID
It is often required to refer to an entity by a unique identifier provided by you, this is what is called as a Link ID (`link_id`). There is a one-to-one mapping between `link_id` and `entity_id`.

<img src="/img/link_id_2.png" alt="Link ID" />

Now since these terms are clear, you can head towards the next section [Uploading Bank Statements](/bank-connect/upload-overview) which is the first step of the integration process.